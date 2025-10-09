import React from "react";
import Logo from "../assets/logo.png";

const Loading = () => {
  return (
    <div className="bg-gray-200 flex justify-center items-center min-h-screen">
      <p className="flex items-center text-3xl md:text-6xl font-bold tracking-widest animate-pulse text-gray-400">
        L{" "}
        <img
          src={Logo}
          className="w-[70px] md:w-[100px] px-4 animate-spin duration-1000"
        />{" "}
        A D I N G
      </p>
    </div>
  );
};

export default Loading;
