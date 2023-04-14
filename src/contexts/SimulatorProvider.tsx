import { createContext, useState } from "react";
import { getSimulatorAdapter } from "../adapters/SimulatorAdapter";
import {
  SimulatorApiI,
  SimulatorContextI,
  SimulatorI,
} from "../models/SimulatorInterface";
import { getSimulatorData } from "../services/SimulatorService";

type props = {
  children?: React.ReactNode;
};

const SimulatorContext = createContext<Partial<SimulatorContextI>>({});

const SimulatorProvider = ({ children }: props) => {

  const [simulator, setSimulator] = useState<SimulatorI>({} as SimulatorI);

  const getSimulator = async (amount?: number, numberQuote?: number) => {
    try{
      const responseSimulator: SimulatorApiI = await getSimulatorData();
      if(numberQuote) responseSimulator.max_quota = numberQuote
      if(amount) responseSimulator.monthly_amount = amount
      const adaptedSimulator = getSimulatorAdapter(responseSimulator);
      setSimulator(adaptedSimulator);
    }catch(error){
      console.log("ERROR",error)
    }
    
  };

  return (
    <SimulatorContext.Provider
      value={{
        getSimulator,
        simulator,
      }}
    >
      {children}
    </SimulatorContext.Provider>
  );
};

export { SimulatorProvider };

export default SimulatorContext;
