import React, { useEffect, useState } from "react";
import useDataLoad from "../Hooks/useDataLoad";
import Loading from "../Component/Loading";
import { HiOutlineDownload } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router";
import { toast } from "react-toastify";

const Installation = () => {
  const { loading } = useDataLoad();
  const [installed, setInstalled] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const installedList = JSON.parse(localStorage.getItem("installList"));
    if (installedList) setInstalled(installedList);
  }, []);

  const sortedList = () => {
    if (sortOrder === "asc") {
      return [...installed].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "dsc") {
      return [...installed].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installed;
    }
  };

  const handleUninstall = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installList")) || [];
    const updatedList = existingList.filter((app) => app.id !== id);
    setInstalled(updatedList);
    localStorage.setItem("installList", JSON.stringify(updatedList));
  };

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="max-w-[1440px] mx-auto px-5 2xl:px-0 pb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#001931] text-center pt-10 md:pt-20">
            Your Installed Apps
          </h1>
          <p className="text-[#627382] text-center mb-10 mt-4">
            Explore All Trending Apps on the Market developed by us
          </p>
          <div className="flex justify-between  pb-5 ">
            <h2 className="text-2xl font-semibold text-center mb-3 sm:mb-0">
              ({installed.length}) Apps Found
            </h2>
            <div className="w-[150px]">
              <select
                className="select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="none" className="opacity-60">
                  Sort By Size
                </option>
                <option value="asc">Low - High</option>
                <option value="dsc">High - Low</option>
              </select>
            </div>
          </div>
          {installed.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-3xl font-semibold text-gray-600 mb-5">
                No apps installed yet.
              </h2>
              <NavLink
                to={"/apps"}
                className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-0 w-[150px]"
              >
                Show All Apps <FaArrowRightLong className="animate-pulse" />
              </NavLink>
            </div>
          ) : (
            <div>
              {sortedList().map((app, i) => (
                <div
                  key={i}
                  className="bg-white p-4 mb-4 rounded-md sm:flex justify-between items-center"
                >
                  <div className="flex items-center gap-4 mb-3 sm:mb-0">
                    <img
                      src={app.image}
                      className="w-20 h-20 bg-gray-200 rounded-md p-2"
                    />
                    <div className="space-y-3">
                      <p className="text-[20px] font-medium">{app.title}</p>
                      <div className="flex justify-between items-center w-[180px]">
                        <p className="flex items-center gap-2 text-[#00D390]">
                          <HiOutlineDownload /> {app.downloads}B
                        </p>
                        <p className="flex items-center gap-2 text-[#FF8811]">
                          <FaStar /> {app.ratingAvg}
                        </p>
                        <p className="text-[#627382]">{app.size} MB</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn bg-[#00D390] text-white py-3 rounded-md w-full sm:w-[140px] hover:bg-[#00b87f]"
                      onClick={() => {
                        toast.success(`${app.title} Uninstalled successful 😔`);
                        handleUninstall(app.id);
                      }}
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Installation;
