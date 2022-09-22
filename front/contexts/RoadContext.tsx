//create context

import { Road, Topic } from "data/road";
import { createContext, ReactNode, useContext, useState } from "react";

interface RoadContextData {
  road: Road;
  setRoad: (road: Road) => void;
}

interface RoadProviderProps {
  children: ReactNode;
}

const RoadContext = createContext({} as RoadContextData);

export function RoadProvider({ children }: RoadProviderProps) {
  const [road, setRoad] = useState({} as Road);

  return (
    <RoadContext.Provider value={{ road, setRoad: setRoad }}>
      {children}
    </RoadContext.Provider>
  );
}

export function useRoad() {
  const context = useContext(RoadContext);

  return context;
}
