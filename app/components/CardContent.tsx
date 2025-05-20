import React from "react";

const CardContent = () => {
  return (
    <div className="w-[200px] h-[300px] bg-red-500 shadow-md flex flex-col items-center">
      <div className="w-full h-[270px] bg-blue-500">
      </div>
      <div className="absolute bottom-0 w-[150px] h-[60px] bg-purple-500"></div>
    </div>
  );
};

export default CardContent;
