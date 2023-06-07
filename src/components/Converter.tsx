import React, { useState } from "react";
import { hex2rgb } from '../utilits'
import "../App.css";
import { IInput } from "../models/converterModel";

export default function Converter() {
  const [form, setForm] = useState<IInput>({
    hex: "#ffffff",
  });
  const { hex } = form;

  const [valid, setValid] = useState(true);
  const regExp = /^#[0-9A-F]{6}$/i;
  const validityLength = 7;

  const validator = (value: string) => {
    regExp.test(value)
      ? (setValid(regExp.test(value)), console.log("valid"))
      : (setValid(regExp.test(value)), console.log("no valid"));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    validator(value);
    setForm((prevForm) => ({ ...prevForm, hex: value }));
  };

  return (
    <div
      className="App"
      style={valid ? { background: `${hex}` } : { background: `#ffffff` }}
    >
      <div className="wrapper">
        <input
          className="hex"
          value={hex}
          onChange={handleChange}
          maxLength={validityLength}
        />
        <div className="rgb">
          <p>
            {validityLength === hex.length
              ? valid
                ? hex2rgb(hex)
                : "Ошибка!"
              : 'Например "#BBA5CC"'}
          </p>
        </div>
      </div>
    </div>
  );
}
