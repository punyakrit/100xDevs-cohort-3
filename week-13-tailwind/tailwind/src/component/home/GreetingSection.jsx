import React from "react";

const getFormattedDate = () => {
  const date = new Date();
  const options = {
    weekday: "long",
    day: "2-digit",
    month: "long",
  };
  return date.toLocaleDateString("en-US", options);
};

function GreetingSection() {
  return (
    <div className="ml-10 mt-10">
      <div className="font-semibold text-sm ">{getFormattedDate()}</div>
      <div className="py-4 text-2xl text-[#002A5A] font-semibold">
        Good morning, Prabhleen 👋
      </div>
    </div>
  );
}

export default GreetingSection;
