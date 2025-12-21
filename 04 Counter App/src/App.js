// src/App.js
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // Show message when counter updates
  useEffect(() => {
    if (count !== 0) {
      setMessage(`Counter updated to ${count}`);

      const msgTimer = setTimeout(() => setMessage(""), 2000);
      return () => clearTimeout(msgTimer);
    }
  }, [count]);

  // Auto reset counter after 10 seconds
  useEffect(() => {
    if (count !== 0) {
      const resetTimer = setTimeout(() => {
        setCount(0);
        setMessage("Counter reset automatically");
      }, 10000);

      return () => clearTimeout(resetTimer);
    }
  }, [count]);

  return (
    <div>
      <h2>Counter App</h2>
      <h1>{count}</h1>

      {message && <p>{message}</p>}

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
