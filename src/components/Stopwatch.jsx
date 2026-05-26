import React, { useState, useEffect } from "react";
import "../styles/Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = () => {
    const hrs = String(Math.floor(time / 3600)).padStart(2, "0");
    const mins = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const secs = String(time % 60).padStart(2, "0");

    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="stopwatch-container">

      {/* Snowfall */}
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>

      {/* Stopwatch Box */}
      <div className="stopwatch-box">
        <h1>Stopwatch</h1>

        <div className="time">{formatTime()}</div>

        <div className="buttons">
          <button onClick={() => setIsRunning(true)}>
            Start
          </button>

          <button onClick={() => setIsRunning(false)}>
            Stop
          </button>

          <button
            onClick={() => {
              setTime(0);
              setIsRunning(false);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;