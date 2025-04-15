import React from "react";
function Logo() {
  return (
    <div className="bg-[#002A5B] w-fit py-3 px-4 rounded-2xl flex items-center text-sm gap-2">
      <img src={"./webinar.png"} alt="logo" className="w-5 h-5"></img>
      <span>
        <span className="text-white">Webinar</span>
        <span className="text-[#2AA5AA]">.gg</span>
      </span>
    </div>
  );
}

export default Logo;
