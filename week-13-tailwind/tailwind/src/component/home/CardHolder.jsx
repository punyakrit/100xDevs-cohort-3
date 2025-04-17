import React from "react";

function CardHolder({ children }) {
  return (
    <div className="bg-white rounded-xl w-fit h-fit p-4 border-[0.5px] border-gray-200 shadow mx-8">
      {children}
    </div>
  );
}

export default CardHolder;
