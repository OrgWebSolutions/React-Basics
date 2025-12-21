// src/App.js
import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(null);

  const calculateSum = () => {
    const number1 = parseInt(num1) || 0;
    const number2 = parseInt(num2) || 0;
    setSum(number1 + number2);
  };

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setSum(null);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Sum of Two Integers</h1>
        <p className="subtitle">Enter two numbers to calculate their sum</p>

        <div className="input-group">
          <label htmlFor="num1">First Number:</label>
          <input
            id="num1"
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
          />
        </div>

        <div className="input-group">
          <label htmlFor="num2">Second Number:</label>
          <input
            id="num2"
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
          />
        </div>

        <div className="button-group">
          <button className="btn btn-primary" onClick={calculateSum}>
            Calculate Sum
          </button>
          <button className="btn btn-secondary" onClick={handleReset}>
            Reset
          </button>
        </div>

        {sum !== null && (
          <div className="result">
            <h2>Result</h2>
            <p className="sum-display">
              {num1 || 0} + {num2 || 0} = <span className="answer">{sum}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
