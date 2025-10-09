import React from "react";
import { useParams } from "react-router";
import useDataLoad from "../Hooks/useDataLoad";
import Loading from "../Component/Loading";
import Rechart from "../Component/Rechart";
import downloadsIcon from "../assets/icon-downloads.png";
import ratingsIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";

const AppDetails = () => {
  const { data, loading } = useDataLoad();
  const { id } = useParams();
  const AppData = data.find((app) => app.id === Number(id));

  if (!AppData) {
    return <div>{loading ? <Loading></Loading> : <p>App not found.</p>}</div>;
  }

  return (
    <div className="bg-[#D9D9D940] px-5 py-10 md:py-20">
      <div className="grid grid-cols-4 lg:grid-rows-3 gap-x-3 sm:gap-x-10 max-w-[1440px] mx-auto  pb-10">
        <div className="lg:row-span-3 bg-white p-2 md:p-10 rounded-md">
          <img src={AppData.image} />
        </div>
        <div className="col-span-3  border-b-2 border-gray-300">
          <h1 className="text-3xl font-bold">{AppData.title}</h1>
          <p className="text-[#627382] pt-2">
            Developed by{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
              {AppData.companyName}
            </span>
          </p>
        </div>
        <div className="col-span-4 lg:col-span-3 row-span-2 pt-8">
          <div className="flex gap-3 sm:gap-10 pb-6">
            <div>
              <img src={downloadsIcon} />
              <p className="pt-1">Downloads</p>
              <p className="text-3xl md:text-[40px] font-extrabold">
                {AppData.downloads}
              </p>
            </div>
            <div>
              <img src={ratingsIcon} />
              <p className="pt-1">Average Ratings</p>
              <p className="text-3xl md:text-[40px] font-extrabold">
                {AppData.ratingAvg}
              </p>
            </div>
            <div>
              <img src={reviewIcon} />
              <p className="pt-1">Total Reviews</p>
              <p className="text-3xl md:text-[40px] font-extrabold">
                {AppData.reviews}
              </p>
            </div>
          </div>
          <button className="btn bg-[#00D390] text-white px-10 py-3 rounded-md ">
            Install Now ({AppData.size} MB)
          </button>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto py-5 md:py-10 border-y-2 border-gray-300">
        <h1 className="text-2xl font-semibold">Ratings</h1>
        <Rechart ratings={AppData.ratings}></Rechart>
      </div>
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-2xl font-semibold mt-10 mb-6">Description</h1>
        <p className="">{AppData.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
