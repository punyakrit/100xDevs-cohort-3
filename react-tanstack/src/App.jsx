import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    async function call() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      setValues(response.data);
    }
    call();
  }, []);
  return (
    <div>
      {values.map((data) => {
        return <div key={data.id}>{data.title}</div>;
      })}
    </div>
  );
}

export default App;
