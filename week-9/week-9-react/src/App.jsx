import { useState } from "react";
import { PostComponent } from "./PostComponent";

function App() {
  const [posts, setPosts] = useState([]);


  function addPost() {
    setPosts([
      ...posts,
      {
        name: "harkirat",
        subtitle: "10000 followers",
        time: "2m ago",
        image:
          "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
        description:
          "What to know how to win big? Check out how these folks won $6000 in bounties.",
      },
    ]);
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {posts.map((post) => (
            <PostComponent
              name={post.name}
              subtitle={post.subtitle}
              time={post.title}
              image={post.image}
              description={post.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

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
