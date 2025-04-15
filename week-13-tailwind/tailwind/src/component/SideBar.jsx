import React from "react";
import Logo from "./Sidebar/Logo";
import WomenCard from "./Sidebar/WomenCard";
import NavComponents from "./Sidebar/NavComponents";

function SideBar() {
  return (
    <div className="bg-[#FEFEFE] border-r-[2px] border-gray-200 w-full h-screen shadow p-4">
      <div className="flex justify-between">
        <Logo />
        <WomenCard />
      </div>
      <div className="mt-10">
        <NavComponents/>
      </div>
    </div>
  );
}

export default SideBar;
