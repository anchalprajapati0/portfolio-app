import React, { useState } from "react";
import "../styles/Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="calculator-container">

      {/* Snowfall */}
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>

      {/* Calculator Box */}
      <div className="calculator-box">

        <h1>Calculator</h1>

        <input
          type="text"
          value={input}
          readOnly
          placeholder="0"
        />

        <div className="buttons">

          <button onClick={clearInput} className="clear">
            C
          </button>

          <button onClick={() => handleClick("/")}>
            /
          </button>

          <button onClick={() => handleClick("*")}>
            *
          </button>

          <button onClick={() => handleClick("-")}>
            -
          </button>

          <button onClick={() => handleClick("7")}>
            7
          </button>

          <button onClick={() => handleClick("8")}>
            8
          </button>

          <button onClick={() => handleClick("9")}>
            9
          </button>

          <button onClick={() => handleClick("+")}>
            +
          </button>

          <button onClick={() => handleClick("4")}>
            4
          </button>

          <button onClick={() => handleClick("5")}>
            5
          </button>

          <button onClick={() => handleClick("6")}>
            6
          </button>

          <button onClick={() => handleClick("1")}>
            1
          </button>

          <button onClick={() => handleClick("2")}>
            2
          </button>

          <button onClick={() => handleClick("3")}>
            3
          </button>

          <button onClick={() => handleClick("0")}>
            0
          </button>

          <button onClick={() => handleClick(".")}>
            .
          </button>

          <button onClick={calculateResult} className="equal">
            =
          </button>

        </div>
      </div>
    </div>
  );
};

export default Calculator;