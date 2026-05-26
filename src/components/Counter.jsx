import React, { useState } from "react";
import "../styles/Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">

      {/* Snowfall */}
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>

      {/* Counter Box */}
      <div className="counter-box">
        <h1>Counter App</h1>

        <div className="count">{count}</div>

        <div className="buttons">

          <button onClick={() => setCount(count + 1)}>
            Increment
          </button>

          <button onClick={() => setCount(count - 1)}>
            Decrement
          </button>

          <button onClick={() => setCount(0)}>
            Reset
          </button>

        </div>
      </div>
    </div>
  );
};

export default Counter;