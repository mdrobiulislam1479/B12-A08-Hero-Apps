import React from "react";
import useDataLoad from "../../Hooks/useDataLoad";
import { HiOutlineDownload } from "react-icons/hi";
import { FaStar } from "react-icons/fa";

const HomeApps = () => {
  const [data, loading] = useDataLoad();
  const homeData = data.slice(0, 8);
  return (
    <div className="bg-[#D9D9D940] px-5">
      <h1 className="text-4xl md:text-5xl font-bold text-[#001931] text-center pt-10 md:pt-20">
        Trending Apps
      </h1>
      <p className="text-[#627382] text-center mb-10 mt-4">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-[1440px] mx-auto pb-10 gap-4">
        {homeData.map((data, i) => (
          <div key={i} className="bg-white shadow-2xl p-4 rounded-2xl">
            <div className="p-10 bg-gray-300 rounded-2xl">
              <img src={data.image} />
            </div>
            <p className="py-4 text-xl font-medium">{data.title}</p>
            <div className="flex justify-between items-center">
              <div>
                <p className="flex items-center gap-2 font-medium bg-[#F1F5E8] py-1 px-2 rounded-md text-[#00D390]">
                  <HiOutlineDownload /> {data.downloads}
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 font-medium bg-[#FFF0E1] py-1 px-2 rounded-md text-[#FF8811]">
                  <FaStar /> {data.ratingAvg}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeApps;
