/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */
import * as Comlink from 'comlink';
import Bottleneck from 'bottleneck';
import {
   Status, Account, User, ShipsAvailable, Systems, Loans, Market, Purchase, Locations, FlightPlanRes, ShipInfo, OwnedShips, Jettison, CargoType, DepositResponse, LocationResponse,
} from './types';

export interface ApiType {
   new(username:string, token:string): Api
}

// IMPORTANT: camelCase used because: https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#usage-with-indirection-like-workers-and-js-templates
// webworkers that reference this Api file will throw an error if PascalCase is used.
enum fetchMethod {
   Get = 'get',
   Post = 'post',
   Put = 'put',
}

export class Api {
   private BASE_URL = 'https://api.spacetraders.io';
   private username:string
   private token:string;
   private limiter:Bottleneck;

   constructor(username:string, token:string) {
      this.username = username;
      this.token = token;
      this.limiter = new Bottleneck({
         minTime: 500,
         maxConcurrent: 1,
      });
   }

   private wait(time: number) {
      return new Promise((resolve) => setTimeout(resolve, time));
   }

   private async makeRequest<T>(
      url: string, type: fetchMethod, payload: Record<string, any> = {}, retry = 0,
   ): Promise<T> {
      let response:Response;

      if (type === fetchMethod.Get) {
         response = await this.limiter.schedule(async () => {
            const data = await fetch(url, {
               method: type,
               headers: {
                  Authorization: `Bearer ${this.token}`,
               },
            });
            return data;
         });
      } else {
         response = await this.limiter.schedule(async () => {
            const data = await fetch(url, {
               method: type,
               headers: {
                  Authorization: `Bearer ${this.token}`,
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify(payload),
            });
            return data;
         });
      }

      if (response.status === 500 && retry < 5) {
         console.log(`${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}: API error 500`);
         const header = response.headers.get('retry-after');
         const retryAfter = header ? parseInt(header, 10) * 1000 : 1000;
         await this.wait(retryAfter);
         return this.makeRequest(url, type, payload, retry + 1);
      }

      // Retry 3 times if rate limit error
      if (response.status === 429 && retry < 3) {
         const header = response.headers.get('retry-after');
         const retryAfter = header ? parseInt(header, 10) * 1000 : 1000;
         await this.wait(retryAfter);
         return this.makeRequest(url, type, payload, retry + 1);
      }

      if (response.status === 401) {
         throw new Error('Invalid username or token.');
      }

      const result = await response.json();

      if (response.status >= 400) {
         console.log(`Error! URL: ${url}, Payload: ${JSON.stringify(payload)}, Response: ${JSON.stringify(result.error)}`);
         throw new Error(result.error.message);
      }

      return result;
   }

   getInstance() {
      return this;
   }

   /** Public functions used to query the API */
   async getStatus() {
      const response = await fetch(`${this.BASE_URL}/game/status`);
      const result = await response.json() as Status;

      return result;
   }

   async getToken() {
      const response = await fetch(`${this.BASE_URL}/users/${this.username}/token`, { method: fetchMethod.Post });

      if (response.status >= 400) {
         throw new Error('Username already exists');
      }

      const result = await response.json() as Account;

      return result;
   }

   async getUser() {
      const url = `${this.BASE_URL}/users/${this.username}`;
      return this.makeRequest<User>(url, fetchMethod.Get);
   }

   async getLoansAvailable() {
      const url = `${this.BASE_URL}/game/loans`;
      return this.makeRequest<Loans>(url, fetchMethod.Get);
   }

   async getLoansOwned() {
      const url = `${this.BASE_URL}/users/${this.username}/loans`;
      return this.makeRequest<Loans>(url, fetchMethod.Get);
   }

   async newLoan(type: string) {
      const url = `${this.BASE_URL}/users/${this.username}/loans`;
      return this.makeRequest<User>(url, fetchMethod.Post, { type });
   }

   async replayLoan(loanId: string) {
      const url = `${this.BASE_URL}/users/${this.username}/loans/${loanId}`;
      return this.makeRequest<User>(url, fetchMethod.Put);
   }

   async availableShips(className = '') {
      const url = `${this.BASE_URL}/game/ships`;
      return this.makeRequest<ShipsAvailable>(url, fetchMethod.Get, { class: className });
   }

   async ownedShips() {
      const url = `${this.BASE_URL}/users/${this.username}/ships`;
      return this.makeRequest<OwnedShips>(url, fetchMethod.Get);
   }

   async buyShip(location: string, type: string) {
      const url = `${this.BASE_URL}/users/${this.username}/ships`;
      return this.makeRequest<User>(url, fetchMethod.Post, { location, type });
   }

   async shipInfo(shipId: string) {
      const url = `${this.BASE_URL}/users/${this.username}/ships/${shipId}`;
      return this.makeRequest<ShipInfo>(url, fetchMethod.Get);
   }

   async systemsInfo() {
      const url = `${this.BASE_URL}/game/systems`;
      return this.makeRequest<Systems>(url, fetchMethod.Get);
   }

   async getLocations(location: string) {
      const url = `${this.BASE_URL}/game/systems/${location}/locations`;
      return this.makeRequest<Locations>(url, fetchMethod.Get);
   }

   async getLocation(location: string) {
      const url = `${this.BASE_URL}/game/locations/${location}`;
      return this.makeRequest<LocationResponse>(url, fetchMethod.Get);
   }

   async getMarket(symbol: string) {
      const url = `${this.BASE_URL}/game/locations/${symbol}/marketplace`;
      return this.makeRequest<Market>(url, fetchMethod.Get);
   }

   async purchaseOrder(shipId: string, good: string, quantity: number) {
      const url = `${this.BASE_URL}/users/${this.username}/purchase-orders`;
      return this.makeRequest<Purchase>(url, fetchMethod.Post, { shipId, good, quantity });
   }

   async sellOrder(shipId: string, good: CargoType, quantity: number) {
      const url = `${this.BASE_URL}/users/${this.username}/sell-orders`;
      return this.makeRequest<Purchase>(url, fetchMethod.Post, { shipId, good, quantity });
   }

   async depositGoods(structureId: string, shipId: string, good: CargoType, quantity: number) {
      const url = `${this.BASE_URL}/game/structures/${structureId}/deposit`;
      return this.makeRequest<DepositResponse>(url, fetchMethod.Post, { shipId, good, quantity });
   }

   async deleteOrder(shipId: string, good: string, quantity: number) {
      const url = `${this.BASE_URL}/users/${this.username}/ships/${shipId}/jettison`;
      return this.makeRequest<Jettison>(url, fetchMethod.Put, { good, quantity });
   }

   async createFlightPlan(shipId: string, destination: string) {
      const url = `${this.BASE_URL}/users/${this.username}/flight-plans`;
      return this.makeRequest<FlightPlanRes>(url, fetchMethod.Post, { shipId, destination });
   }

   async queryFlightPlan(planId: string) {
      const url = `${this.BASE_URL}/users/${this.username}/flight-plans/${planId}`;
      return this.makeRequest<FlightPlanRes>(url, fetchMethod.Get);
   }

   async warpJump(shipId: string) {
      const url = `${this.BASE_URL}/users/${this.username}/warp-jump`;
      return this.makeRequest<FlightPlanRes>(url, fetchMethod.Post, { shipId });
   }
}

Comlink.expose(Api);