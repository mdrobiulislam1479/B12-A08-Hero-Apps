import React from "react";
import playStore from "../../assets/play-store.png";
import appStore from "../../assets/app-store.png";
import BannerImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="text-center pt-10 md:pt-20 text-[48px] md:text-[72px] font-bold text-[#001931]  md:leading-20">
        We Build <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-[#627382] text-center md:pt-4 pb-5 md:pb-10 max-w-[810px] mx-auto px-5">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
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
  );
};

export default Banner;
