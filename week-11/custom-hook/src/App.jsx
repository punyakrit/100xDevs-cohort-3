import React from 'react'
import { useDebounce } from './hooks/useDebounc'

function App() {

  function apiCall(){
    console.log("Api called")
  }

  const  debouncing = useDebounce(apiCall)
  return (
    <div>
      <input onChange={debouncing}></input>
    </div>
  )
}

export default App







//Use prev Hook


// import React from 'react'
// import { useState } from 'react'
// import { usePrev } from './hooks/usePrev'

// function App() {

//   const [state, setState]  = useState(0)
//   const prev = usePrev(state)
//   return (
//     <div>
//       {state}
//       <button onClick={()=>{
//         setState(c => c+1 )
//       }}>Incrment</button>
//       <div>
//         Prev = {prev}
//       </div>
//     </div>
//   )
// }

// export default App





// import React from "react";
// import { useFetch } from "./hooks/fetch";
// import { useState } from "react";
// function App() {
//   const [post, setPost] = useState(1);
//   const { finalData, loading } = useFetch(
//     `https://jsonplaceholder.typicode.com/todos/${post}`
//   );

//   if(loading){
//     return <div>
//       Loading ...
//     </div>
//   }
//   return (
//     <div>
//       <div>
//         <button onClick={() => setPost(1)}>1</button>
//         <button onClick={() => setPost(2)}>2</button>
//         <button onClick={() => setPost(3)}>3</button>
//       </div>
//       <div>{JSON.stringify(finalData)}</div>
//     </div>
//   );
// }

// export default App;
