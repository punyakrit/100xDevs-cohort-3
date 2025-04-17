import React from "react";
import CardHolder from "./CardHolder";

function Profile() {
  return (
    <div className="-mt-10 ">
      <CardHolder>
        <div className="p-8 flex flex-col items-center">
          <img
            src="./women.jpeg"
            className="w-32 h-32 rounded-xl object-cover shadow-md border-[0.9px]"
          ></img>
        <div className="text-[002A5B] my-2 font-semibold mt-4 text-lg">
            Prabhleen Kaur
        </div>
        <div className="text-gray-500">
            prabhleen@gmail.com
        </div>
        <div className="text-gray-500">
            9999999999
        </div>
        <div className="text-gray-500 pt-4">
            Delhi, India
        </div>
        </div>
      </CardHolder>
    </div>
  );
}

export default Profile;
