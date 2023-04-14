import { Errors } from "../constants/Messages"
import { SIMULATOR_DATA } from "../mock/simulator-data"
import { SimulatorApiI } from "../models/SimulatorInterface"

//EXAMPLE API
export const getSimulatorData  = ():Promise<SimulatorApiI> => {
    const responseOk:boolean  = true

    return new Promise((resolve,reject)=>{
        responseOk ? resolve(SIMULATOR_DATA) : reject(Errors.ERROR_GET_SIMULADOR)
    })
}


