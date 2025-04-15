import React from 'react';

function WomenCard() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <img
        src="./women.jpeg"
        alt="profile"
        className="w-10 h-10 rounded-xl object-cover shadow-md"
      />
    </div>
  );
}

export default WomenCard;
