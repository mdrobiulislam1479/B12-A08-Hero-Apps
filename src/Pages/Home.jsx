import React from "react";
import HomeApps from "../Component/Home/HomeApps";
import Banner from "../Component/Home/Banner";
import Report from "../Component/Home/Report";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Report></Report>
      <HomeApps></HomeApps>
    </div>
  );
};

export default Home;
