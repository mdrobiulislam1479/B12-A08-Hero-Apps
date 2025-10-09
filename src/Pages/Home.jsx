import React from "react";
import HomeApps from "../Component/Home/HomeApps";
import Banner from "../Component/Home/Banner";
import Report from "../Component/Home/Report";
import useDataLoad from "../Hooks/useDataLoad";
import Loading from "../Component/Loading";

const Home = () => {
  const { loading } = useDataLoad();
  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div>
          <Banner></Banner>
          <Report></Report>
          <HomeApps></HomeApps>
        </div>
      )}
    </div>
  );
};

export default Home;
