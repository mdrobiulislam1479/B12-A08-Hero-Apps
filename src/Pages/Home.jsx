import React from "react";
import playStore from "../assets/play-store.png";
import appStore from "../assets/app-store.png";
import BannerImg from "../assets/hero.png";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-center py-10 md:py-20 text-[48px] md:text-[72px] font-bold text-[#001931]  md:leading-20">
          We Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            Productive
          </span>{" "}
          Apps
        </h1>
        <div className="flex justify-center gap-3 md:gap-5 pb-10">
          <a
            className="flex items-center  md:gap-3 text-[20px] font-semibold md:py-2 px-2 md:px-6 border border-gray-300 rounded-md hover:bg-gray-300 duration-200"
            href="https://play.google.com/store/games?hl=en"
            target="_blank"
          >
            <img src={playStore} alt="play-store" />
            Google Play
          </a>
          <a
            className="flex items-center  md:gap-3 text-[20px] font-semibold md:py-2 px-2 md:px-6 border border-gray-300 rounded-md hover:bg-gray-300 duration-200"
            href="https://www.apple.com/app-store/"
            target="_blank"
          >
            <img src={appStore} alt="app-store" />
            App Store
          </a>
        </div>
        <img
          src={BannerImg}
          alt="banner-image"
          className="mx-auto px-5 lg:px-0"
        />
      </div>
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
    </div>
  );
};

export default Home;
