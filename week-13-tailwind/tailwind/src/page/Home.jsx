import React from "react";
import Profile from "../component/home/Profile";

function Home() {
  return (
    <div className="bg-[#F9FCFD] h-full relative">
      <div className="w-full">
        <img src="./coverimg.jpeg" className="w-full h-48 -z-20"></img>
      </div>
      <div>
        <div>
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Home;
