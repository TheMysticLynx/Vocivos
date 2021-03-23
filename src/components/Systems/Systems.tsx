import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Api from '../../Api';
import { Location, LocationType } from '../../Api/types';
import { RootState, setSystems } from '../../store';

interface SortedSystem {
   symbol: string,
   name: string,
   locations: SortedLocation[],
}

interface SortedLocation {
   parent: Location,
   satellites: Location[],
}

const SystemMap = () => {
   const token = useSelector((state:RootState) => state.account.token);
   const systems = useSelector((state:RootState) => state.systems);
   const dispatch = useDispatch();
   const [sortedLocations, setSortedLocations] = useState<SortedSystem[]>([]);

   useEffect(() => {
      const GetSystems = async () => {
         if (systems.length === 0) {
            const temp = (await Api.systemsInfo(token)).systems;
            dispatch((setSystems(temp)));
         }
      };
      GetSystems();
   }, []);

   useEffect(() => {
      const sorted:SortedSystem[] = [];
      systems.forEach((system) => {
         const sortedSystem:SortedSystem = { symbol: system.symbol, name: system.name, locations: [] };
         sorted.push(sortedSystem);
         system.locations.forEach((location) => {
            if (location.type !== LocationType.Moon) {
               sortedSystem.locations.push({ parent: location, satellites: [] });
            } else {
               sortedSystem.locations.find((x) => x.parent.symbol === (`${location.symbol.split('-')[0]}-${location.symbol.split('-')[1]}`))?.satellites.push(location);
            }
         });
      });
      setSortedLocations(sorted);
   }, [systems]);

   return (
      <React.Fragment>
         <div className="h-1/4">
            { sortedLocations
               && (
                  <React.Fragment>
                     <div className="grid gap-3 grid-cols-4 mt-4">
                        { sortedLocations.map((system) => (
                           <div key={system.symbol}>
                              <h2 className="text-3xl">{ system.name }</h2>
                              <ul className="mt-3 pl-5">
                                 {system.locations.map((location) => (
                                    <React.Fragment key={location.parent.symbol}>
                                       <li className="py-1">{ location.parent.name }</li>
                                       { location.satellites.length > 0
                                       && (
                                          <ul className="pl-5">
                                             {
                                                location.satellites.map((satellite) => (
                                                   <li key={satellite.symbol} className="py-1">{ satellite.name }</li>
                                                ))
                                             }
                                          </ul>
                                       )}
                                    </React.Fragment>
                                 ))}
                              </ul>
                           </div>
                        ))}
                     </div>
                  </React.Fragment>
               )}
         </div>
      </React.Fragment>
   );
};

export default SystemMap;