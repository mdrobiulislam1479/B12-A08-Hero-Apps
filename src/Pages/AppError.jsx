import React from "react";
import appError from "../assets/App-Error.png";
import { NavLink } from "react-router";
import useDataLoad from "../Hooks/useDataLoad";
import Loading from "../Component/Loading";
const AppError = () => {
  const { loading } = useDataLoad();
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="flex-1 flex flex-col justify-center items-center space-y-5 py-14 bg-[#D9D9D940] px-5">
          <img src={appError} />
          <h1 className="text-3xl sm:text-5xl font-semibold text-center">
            OPPS!! APP NOT FOUND
          </h1>
          <p className="text-[#627382] text-center">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <NavLink
            to={"/apps"}
            className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-0 w-[200px]"
          >
            Go Back!
          </NavLink>
        </div>
      )}
    </>
  );
};

export default AppError;
