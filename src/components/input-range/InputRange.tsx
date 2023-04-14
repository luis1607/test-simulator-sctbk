import React, { useEffect, useState } from "react";
import { LabelTitle } from "../label-title/LabelTitle";
import "./InputRange.scss";
import { useDebounce } from "usehooks-ts";

type Props = {
  onChange: (a: number) => void;
  value?: number | null;
};

const InputRange = ({ onChange }: Props) => {
  const [valueInput, setValueInput] = useState<number>(0);
  const debouncedValue = useDebounce<number>(valueInput, 1000);

  const handleChangeQuotes = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValueInput(parseInt(e.target.value));
  };

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="range-quotes-container">
      <LabelTitle>Elige el número de coutas</LabelTitle>
      <input
        value={valueInput}
        onChange={(e) => handleChangeQuotes(e)}
        type="range"
        className="range-quotes-container-input"
        min={0}
        max={48}
      />
      <div className="range-quotes-container-footer">
        <span className="range-quotes-container-footer-value">
          {valueInput} cuotas
        </span>
        <span className="range-quotes-container-footer-max">Máximo:48</span>
      </div>
    </div>
  );
};

export default InputRange;
