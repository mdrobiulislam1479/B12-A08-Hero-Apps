import React, { useEffect, useState } from "react";
import useDataLoad from "../Hooks/useDataLoad";
import { HiOutlineDownload } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import Loading from "../Component/Loading";
import { Link } from "react-router";

const Apps = () => {
  const { data, loading } = useDataLoad();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const term = search.trim().toLocaleLowerCase();
  const searchedData = term
    ? data.filter((apps) => apps.title.toLocaleLowerCase().includes(term))
    : data;
  useEffect(() => {
    if (!searchLoading) return;
    const timer = setTimeout(() => {
      setSearchLoading(false);
    }, 150);
    return () => clearTimeout(timer);
  }, [searchLoading]);
  return (
    <div className="bg-[#D9D9D940] px-5">
      {loading ? (
        <Loading></Loading>
      ) : (
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#001931] text-center pt-10 md:pt-20">
            Our All Applications
          </h1>
          <p className="text-[#627382] text-center mb-10 mt-4">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
          <div className="flex flex-col sm:flex-row  justify-between max-w-[1440px] mx-auto mb-5">
            <h2 className="text-2xl font-semibold text-center mb-3 sm:mb-0">
              ({searchedData.length}) Apps Found
            </h2>
            <label className="input mx-auto sm:mx-0">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                placeholder="Search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSearchLoading(true);
                }}
              />
            </label>
          </div>

          {searchLoading ? (
            <Loading />
          ) : searchedData.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-5xl font-semibold text-gray-600 mb-5">
                No Data Found
              </h2>
              <button
                onClick={() => setSearch("")}
                className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-0 w-[200px]"
              >
                Show All Apps
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-[1440px] mx-auto pb-10 gap-4">
              {searchedData.map((data, i) => (
                <Link
                  to={`/apps/${data.id}`}
                  key={i}
                  className="bg-white shadow-2xl p-4 rounded-2xl flex flex-col"
                >
                  <div className="p-10 bg-gray-300 rounded-2xl flex-1">
                    <img src={data.image} />
                  </div>
                  <p className="py-4 text-xl font-medium">{data.title}</p>
                  <div className="flex justify-between items-center">
                    <p className="flex items-center gap-2 font-medium bg-[#F1F5E8] py-1 px-2 rounded-md text-[#00D390]">
                      <HiOutlineDownload /> {data.downloads}
                    </p>
                    <p className="flex items-center gap-2 font-medium bg-[#FFF0E1] py-1 px-2 rounded-md text-[#FF8811]">
                      <FaStar /> {data.ratingAvg}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Apps;
