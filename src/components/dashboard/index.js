import React from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import ServiceModule from "./ServiceModule";

const Dashboard = () => {
  return (
    <div className="overflow-hidden">
      <Carousel />
      <ServiceModule />
      <Footer />
    </div>
  );
};

export default Dashboard;
