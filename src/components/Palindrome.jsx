import React, { useState } from "react";
import "../styles/Palindrome.css";

const Palindrome = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const checkPalindrome = () => {
    const cleanedText = text.toLowerCase();
    const reversedText = cleanedText.split("").reverse().join("");

    if (cleanedText === reversedText && text !== "") {
      setResult("✅ It is a Palindrome");
    } else {
      setResult("❌ Not a Palindrome");
    }
  };

  return (
    <div className="palindrome-container">

      {/* Snowfall */}
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>

      {/* Palindrome Box */}
      <div className="palindrome-box">

        <h1>Palindrome Checker</h1>

        <input
          type="text"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={checkPalindrome}>
          Check
        </button>

        <p className="result">{result}</p>

      </div>
    </div>
  );
};

export default Palindrome;