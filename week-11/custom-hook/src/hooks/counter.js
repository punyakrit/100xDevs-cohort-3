import { useState } from "react";

export function useCounter() {
    const [count, setCount] = useState(0);
    function increment() {
      setCount((c) => c + 1);
    }
  
    return { count, increment };
  }