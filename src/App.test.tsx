
import {render, screen } from '@testing-library/react';
import { getSimulatorAdapter } from './adapters/SimulatorAdapter';
import { SIMULATOR_DATA } from './mock/simulator-data';
import SimulatorCard from './components/simulator-card/SimulatorCard';
import { getMonthlyAmountFormat, getPaymentDateFormat } from './utils/SimulatorUtil';

describe('General basics test',()=>{

  beforeEach(()=>{
    const simulator = getSimulatorAdapter(SIMULATOR_DATA)
    console.log(simulator)
  })

  test('renders simulator card', () => {
    render(<SimulatorCard />);
    const elementInitial = screen.getByText(/Cargando Pagina/i);
    expect(elementInitial).toBeInTheDocument();
  });

  test('function getPaymentDate', () => {
    const dataInput:string = '2019-08-02T16:30:04.591Z'
    const dataOut:string = '2 Ago.'
    const responseTest:string = getPaymentDateFormat(dataInput)
    expect(responseTest).toEqual(dataOut)
  });

  test('function getMonthlyAmountFormat', () => {
    const dataInput:number = 4521.242563
    const dataOut:string = 'S/ 4521.24'
    const responseTest = getMonthlyAmountFormat(dataInput)
    expect(responseTest).toEqual(dataOut)
  });

})


