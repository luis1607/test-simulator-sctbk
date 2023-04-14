import {useEffect, useState } from "react";
import InputNumeric from "../../components/input-numeric/InputNumeric";
import InputRange from "../../components/input-range/InputRange";
import SimulatorCard from "../../components/simulator-card/SimulatorCard";
import useSimulator from "../../hooks/useSimulator";
import "./SimulatorPage.scss";

const SimulatorPage = () => {
  const { getSimulator } = useSimulator();

  const [amount, setAmount] = useState<number>(0);
  const [quotes, setQuotes] = useState<number | null>(0);

  const handleChangeAmount = (valueAmount: number) => {
    setAmount(valueAmount);
  };

  const handleChangeQuotes = (valueQuotes: number) => {
    setQuotes(valueQuotes);
  };

  useEffect(() => {
    getSimulator!();
  }, []);

  useEffect(() => {
    amount && quotes && getSimulator!(amount, quotes);
  }, [amount, quotes]);

  return (
    <div className="simulator-container">
      <h1 className="simulator-container-title">Simula tu cuota</h1>
      <hr className="simulator-container-title-line" />
      <SimulatorCard />
      <InputNumeric onChange={handleChangeAmount} value={amount} />
      <InputRange onChange={handleChangeQuotes} value={quotes} />
    </div>
  );
};

export default SimulatorPage;
