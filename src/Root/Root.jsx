import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router";
import Footer from "../Component/Footer";
import useDataLoad from "../Hooks/useDataLoad";
import Loading from "../Component/Loading";

const Root = () => {
  const { loading } = useDataLoad();
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="flex flex-col min-h-screen">
          <Navbar></Navbar>
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default Root;
