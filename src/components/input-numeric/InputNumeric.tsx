import React, { useEffect, useState } from "react";
import { TIPE_CURRENCY } from "../../constants/TipeCurrency";
import useSimulator from "../../hooks/useSimulator";
import { LabelTitle } from "../label-title/LabelTitle";
import "./InputNumeric.scss";
import { useDebounce } from "usehooks-ts";

type Props = {
  onChange: (a: number) => void;
  value?: number;
};

const InputNumeric = ({ onChange }: Props) => {
  const [valueInput, setValueInput] = useState<string>("");
  const debouncedValue = useDebounce<string>(valueInput, 1000);

  const { simulator } = useSimulator();

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let numberWithDecimal = handleDecimalsOnValue(e.target.value);
    setValueInput(numberWithDecimal);
  };

  const handleDecimalsOnValue = (value: any) => {
    const regex = /([0-9]*[\.|\,]{0,1}[0-9]{0,2})/s;
    return value.match(regex)[0];
  };

  useEffect(() => {
    onChange(parseFloat(debouncedValue));
  }, [debouncedValue]);

  return (
    <div className="input-amount-container">
      <LabelTitle>Ingresa un monto</LabelTitle>
      <div className="input-amount-container-input">
        <span className="input-amount-container-input-currency">
          {TIPE_CURRENCY.PEN}
        </span>
        <input
          value={valueInput}
          onChange={(e) => handleChangeAmount(e)}
          type="number"
          className="input-amount-container-input-value"
        />
      </div>
      <span className="input-amount-container-footer">
        {simulator?.minMaxAmountFormat}
      </span>
    </div>
  );
};

export default InputNumeric;
