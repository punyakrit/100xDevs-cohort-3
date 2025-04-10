import React from "react";

function App() {
  return (
    <div>
      <Card>demejdm</Card>
      <Card>demejdm</Card>
      <Card>demejdm</Card>
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: "red",
        borderRadius: 10,
        color: "white",
        padding: 7,
      }}
    >
      {children}
    </div>
  );
}

// import React, { useEffect, useState } from "react";

// function App() {
//   const [count, setCount] = useState(1);
//   useEffect(() => {
//     let inter = setInterval(() => {
//       setCount(count => count + 1);
//     }, 1000);

//     return function(){
//       clearInterval(inter)
//     }
//   }, []);

//   return (
//     <div>
//       <div
//         style={{
//           width: 40,
//           height: 40,
//           backgroundColor: "yellow",
//           borderRadius: 20,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {count}
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { PostComponent } from "./PostComponent";

// function App() {
//   const [posts, setPosts] = useState([]);

//   function addPost() {
//     setPosts([
//       ...posts,
//       {
//         name: "harkirat",
//         subtitle: "10000 followers",
//         time: "2m ago",
//         image:
//           "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
//         description:
//           "What to know how to win big? Check out how these folks won $6000 in bounties.",
//       },
//     ]);
//   }

//   return (
//     <div style={{ background: "#dfe6e9", height: "100vh" }}>
//       <button onClick={addPost}>Add post</button>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <div>
//           {posts.map((post) => (
//             <PostComponent
//               name={post.name}
//               subtitle={post.subtitle}
//               time={post.title}
//               image={post.image}
//               description={post.description}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function Notification() {
//   const [count, setCount] = useState(0);
//   function callbtn() {
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <button onClick={callbtn}>Increase</button>
//       <div>{count}</div>
//     </div>
//   );
// }

// function CHecker() {
//   const [visible, setVisible] = useState(false);
//   function callbtn() {
//     setVisible(!visible);
//   }
//   return (
//     <div>
//       <button onClick={callbtn}>Show</button>
//       {visible && <div>Hello sir</div>}
//     </div>
//   );
// }

export default App;
