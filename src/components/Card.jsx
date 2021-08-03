import React from "react";
import logo from "../logo.svg";

const Card = () => {
  return (
    <div
      className="space-x-4 
      items-center mx-auto p-6 max-w-lg 
      rounded-xl  flex shadow-md
      sm:w-52 motion-safe:hover:scale-115 opacity-50 bg-white
      "
    >
      <div className="flex-shrink-0">
        <img src={logo} alt="logo" className="h-12 w-12" />
      </div>
      <div>
        <div class=" text-xl font-medium text-blue-500 ">To! Sushi</div>
        <p className="text-gray-500">Another one!</p>
      </div>
    </div>
  );
};

export default Card;
