import React from "react";
import CardContent from "../components/CardContent";

const MainSection = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-4">
        <hr className="w-1/3 border-t-2 border-gray-300" />
        <h1 className="mx-4 text-3xl text-gray-600 font-semibold">
          COLLECTION
        </h1>
        <hr className="w-1/3 border-t-2 border-gray-300" />
      </div>
      <div className="flex justify-center items-center">
        <CardContent />
      </div>
    </div>
  );
};

export default MainSection;
