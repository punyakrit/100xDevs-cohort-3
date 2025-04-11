import React, { createContext, useContext, useState } from "react";

const BulbContext = createContext();

function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <BulbContext.Provider
      value={{
        bulb: bulbOn,
        setBulb: setBulbOn,
      }}
    >
      {children}
    </BulbContext.Provider>
  );
}

function App() {
  return (
    <div>
      <BulbProvider>
        <LightBulk />
      </BulbProvider>
    </div>
  );
}

function LightBulk() {
  return (
    <div>
      <BUlbState />
      <BulbToggle />
    </div>
  );
}

function BUlbState() {
  const { bulb } = useContext(BulbContext);

  return <div>{bulb ? "Bulb is On" : "Bulb is Off"}</div>;
}

function BulbToggle() {
  const { setBulb } = useContext(BulbContext);
  function toggle() {
    setBulb((b) => !b);
  }

  return (
    <div>
      <button onClick={toggle}>Toggle Bulk</button>
    </div>
  );
}

export default App;
