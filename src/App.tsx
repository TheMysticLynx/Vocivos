/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import React, {
   Suspense, useContext, useEffect, useState,
} from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Comlink from 'comlink';
import AutomationWorker from 'worker-loader?filename=automation.worker.js!./automation';
import Timer from 'easytimer.js';
import { AutomationType, Automation } from './automation';
import {
   addFlightPlan, removeFlightPlan, reset, RootState, setAllAutomationState, setCredits,
   setSystems,
   setUser, StoredMarket, updateMarketData, updateShip,
} from './store';
import './App.css';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import Ships from './components/Ships/Ships';
import Systems from './components/Systems/Systems';
import Location from './components/Systems/Location';
import Loans from './components/Money/Money';
import { CargoType, FlightPlan, Purchase } from './Api/types';
import Markets from './components/Markets/Markets';
import { AutoAction } from './components/Automation/Models';
import { WorkerContext } from './WorkerContext';

export interface WorkerDataUpdate {
   type: AutoAction.Travel | AutoAction.AddFlightPlan | AutoAction.RemoveFlightPlan | AutoAction.Buy | AutoAction.Sell,
   data: FlightPlan | Purchase,
}

export interface WorkerError {
   shipId: string,
   error: string | null,
}

enum AutomationWorkerApiAction {
   Buy,
   Sell,
   CreateFlightPlan,
   MarketData,
}

function App() {
   const store = useSelector((state:RootState) => state);
   const {
      account, user, automateAll, marketData, flightPlans, systems,
   } = useSelector((state:RootState) => state);
   const [automationWorker, setAutomationWorker] = useState<[Comlink.Remote<Automation>]>();
   const dispatch = useDispatch();
   const [apiWorker] = useContext(WorkerContext);

   useEffect(() => {
      const FetchAccount = async () => {
         try {
            const result = await apiWorker.getUser();
            dispatch(setUser(result));

            // only needed because the ships property on the user response does not contain the 'flightPlanId' property
            if (result.user.ships.some((x) => x.location === undefined)) {
               const { ships } = await apiWorker.ownedShips();

               ships.forEach(async (ship) => {
                  if (ship.flightPlanId) {
                     const { flightPlan } = await apiWorker.queryFlightPlan(ship.flightPlanId);
                     if (flightPlan.terminatedAt === null) {
                        dispatch(addFlightPlan(flightPlan));
                     }
                  }
               });
            }

            const getSystems = async () => {
               const temp = (await apiWorker.systemsInfo()).systems;
               dispatch((setSystems(temp)));
            };
            getSystems();

            // Update market data stored in local storage
            const marketDataStore = localStorage.getItem('marketData');
            const loadedMarketData = marketDataStore !== null ? JSON.parse(marketDataStore) as StoredMarket[] : null;
            loadedMarketData?.map((data) => (
               dispatch(updateMarketData(data))
            ));
         } catch (err: unknown) {
            if ((err as Error).message === 'Invalid username or token.') {
               dispatch(reset());
               localStorage.removeItem('apiKey');
            }
         }
      };

      if (account.username && account.token) {
         FetchAccount();
      }
   }, []);

   const webworkerError = (data:string) => {
      console.log(data);
      dispatch(setAllAutomationState(false));
   };

   const automationWorkerMakeApiCall = async (action: AutomationWorkerApiAction, data: { shipId?: string, good?: CargoType, quantity?: number, to?: string, location?: string }) => {
      switch (action) {
         case AutomationWorkerApiAction.Buy: {
            const order = await apiWorker.purchaseOrder(data.shipId as string, data.good as CargoType, data.quantity as number);
            dispatch(setCredits(order.credits));
            dispatch(updateShip(order.ship));
            return order;
         }
         case AutomationWorkerApiAction.Sell: {
            const order = await apiWorker.sellOrder(data.shipId as string, data.good as CargoType, data.quantity as number);
            dispatch(setCredits(order.credits));
            dispatch(updateShip(order.ship));
            return order;
         }
         case AutomationWorkerApiAction.CreateFlightPlan: {
            const flightPlan = await apiWorker.createFlightPlan(data.shipId as string, data.to as string);
            dispatch(addFlightPlan(flightPlan.flightPlan));
            const timer = new Timer();
            timer.start({ precision: 'seconds', target: { seconds: flightPlan.flightPlan.timeRemainingInSeconds } });
            timer.addEventListener('targetAchieved', () => {
               dispatch(removeFlightPlan(flightPlan.flightPlan));
            });
            return flightPlan;
         }
         case AutomationWorkerApiAction.MarketData: {
            const market = await apiWorker.getMarket(data.location as string);
            dispatch(updateMarketData({ updatedAt: Date.now(), planet: market.location }));
            return market;
         }
         default:
            return null;
      }
   };

   useEffect(() => {
      if (automationWorker) {
         automationWorker[0].updateState(store);
      }
   }, [user.credits, user.ships, marketData, flightPlans, systems]);

   useEffect(() => {
      const createWorker = async () => {
         const AutoWorker = Comlink.wrap<AutomationType>(new AutomationWorker());
         const instance = await new AutoWorker(Comlink.proxy(automationWorkerMakeApiCall), Comlink.proxy(webworkerError));
         // set state doesn't work here with just a comlink object. needs to be in an array.
         setAutomationWorker([instance]);
      };

      if (!automationWorker) {
         createWorker();
      }

      if (!automationWorker) { return; }

      if (automateAll) {
         automationWorker[0].start();
      } else {
         automationWorker[0]?.stop();
      }
   }, [automateAll]);

   return (
      <React.Fragment>
         { (account.token === undefined || account.token === null || account.token.length === 0
            || account.username === undefined || account.username === null || account.username.length === 0) ? <SignIn /> : (
               <React.Fragment>
                  <NavBar />
                  <div className="bg-gray-800 py-4 flex-grow text-gray-200">
                     <div className="container min-h-full mx-auto">
                        <Switch>
                           <Route exact path="/" component={Profile} />
                           <Route path="/ships" component={Ships} />
                           <Route path="/money" component={Loans} />
                           <Route path="/markets" component={Markets} />
                           <Route path="/systems/:location" component={Location} />
                           <Suspense fallback={<div />}>
                              <Route exact path="/systems" component={Systems} />
                           </Suspense>
                        </Switch>
                     </div>
                  </div>
               </React.Fragment>
            )}
      </React.Fragment>
   );
}

export default App;
