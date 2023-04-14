import { useContext } from "react"
import SimulatorContext from "../contexts/SimulatorProvider"


const useSimulator = ()=>{
    return useContext(SimulatorContext)
}

export default useSimulator