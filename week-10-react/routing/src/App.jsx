import React, { useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  const rer = useRef()

  function StartClock() {
    const value = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    rer.value = value
  }

  function stop() {
    clearInterval(rer.value);
  }

  return (
    <div>
      {count}
      <div>
        <button onClick={StartClock}>Start</button>
        <button onClick={stop}>Stop</button>
      </div>
    </div>
  );
}

export default App;
