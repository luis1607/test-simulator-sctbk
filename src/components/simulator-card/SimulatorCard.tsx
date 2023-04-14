import { Fragment } from "react";
import useSimulator from "../../hooks/useSimulator";
import "./SimulatorCard.scss";

const SimulatorCard = () => {
  const { simulator } = useSimulator();
  if (!simulator) return <Fragment>Cargando Pagina</Fragment>;
  let { monthlyAmountFormat, teaFormat, maxQuota, paymentDateFormat } = simulator;
  return (
    <div className="card-container">
      <h2 className="card-container-title">Tu cuota mensual será:</h2>
      <span className="card-container-monthly-fee">{monthlyAmountFormat}</span>
      <div className="card-container-data">
        <div className="card-container-data-item">
          <p>Coutas</p>
          <p className="card-container-data-item-value">{maxQuota}</p>
        </div>
        <div className="card-container-data-item card-container-data-border">
          <p>TEA</p>
          <p className="card-container-data-item-value">{teaFormat}</p>
        </div>
        <div className="card-container-data-item">
          <p>Pago 1° Couta</p>
          <p className="card-container-data-item-value">{paymentDateFormat}</p>
        </div>
      </div>
    </div>
  );
};

export default SimulatorCard;
