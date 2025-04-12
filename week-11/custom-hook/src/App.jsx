import React from "react";
import { useFetch } from "./hooks/fetch";
import { useState } from "react";
function App() {
  const [post, setPost] = useState(1);
  const { finalData, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${post}`
  );

  if(loading){
    return <div>
      Loading ...
    </div>
  }
  return (
    <div>
      <div>
        <button onClick={() => setPost(1)}>1</button>
        <button onClick={() => setPost(2)}>2</button>
        <button onClick={() => setPost(3)}>3</button>
      </div>
      <div>{JSON.stringify(finalData)}</div>
    </div>
  );
}

export default App;
