import React from "react";
import Profile from "../component/home/Profile";
import GreetingSection from "../component/home/GreetingSection";
import DailySchedule from "../component/home/DailySchedule";

function Home() {
  return (
    <div className="bg-[#F9FCFD] h-screen">
      <div className="w-full">
        <img src="./coverimg.jpeg" className="w-full h-48 object-cover" alt="cover"></img>
      </div>
      <div className="grid grid-cols-12 gap-4 px-4">
        <div className="col-span-3">
          <Profile />
        </div>
        <div className="col-span-6">
          <GreetingSection />
          <DailySchedule />
        </div>
        <div className="col-span-3 pt-20 pl-4 text-gray-400">
          ljkwmndwjdnmjwndjw
        </div>
      </div>
    </div>
  );
}

export default Home;
