import React from "react";
import { BeakerIcon } from "@heroicons/react/solid";
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
        <div className=" text-xl font-medium text-blue-500 ">
          <BeakerIcon className="h-5 w-5 text-blue-500" />
          <p>To Sushi!</p>{" "}
        </div>
        <p className="text-gray-500">Another one!</p>
      </div>
    </div>
  );
};

export default Card;
