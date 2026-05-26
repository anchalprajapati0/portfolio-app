import React, { useState } from "react";
import "../styles/Armstrong.css";

const Armstrong = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkArmstrong = () => {
    let num = parseInt(number);

    let sum = 0;
    let temp = num;

    const digits = number.length;

    while (temp > 0) {
      let remainder = temp % 10;

      sum += remainder ** digits;

      temp = Math.floor(temp / 10);
    }

    if (sum === num) {
      setResult("✅ Armstrong Number");
    } else {
      setResult("❌ Not an Armstrong Number");
    }
  };

  return (
    <div className="armstrong-container">

      {/* Snowfall */}
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>

      {/* Armstrong Box */}
      <div className="armstrong-box">

        <h1>Armstrong Checker</h1>

        <input
          type="number"
          placeholder="Enter Number..."
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <button onClick={checkArmstrong}>
          Check Number
        </button>

        <p className="result">{result}</p>

      </div>
    </div>
  );
};

export default Armstrong;