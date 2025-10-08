import React from "react";

const Report = () => {
  return (
    <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
      <div className="max-w-[1440px] mx-auto py-10 md:py-20">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-10 px-5">
          Trusted by Millions, Built for You
        </h1>
        <div className="sm:flex justify-around space-y-4">
          <div className="text-center leading-10">
            <p className="opacity-80">Total Downloads</p>
            <h2 className="text-5xl md:text-6xl font-extrabold">29.6M</h2>
            <p className="opacity-80">21% more than last month</p>
          </div>
          <div className="text-center leading-10">
            <p className="opacity-80">Total Reviews</p>
            <h2 className="text-5xl md:text-6xl font-extrabold">906K</h2>
            <p className="opacity-80">46% more than last month</p>
          </div>
          <div className="text-center leading-10">
            <p className="opacity-80">Active Apps</p>
            <h2 className="text-5xl md:text-6xl font-extrabold">132+</h2>
            <p className="opacity-80">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
