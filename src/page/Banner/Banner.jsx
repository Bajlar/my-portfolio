import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <div
      id="home"
      className="my-12 px-6 md:px-24 grid md:grid-cols-2 gap-6 justify-between items-center"
    >
      <LeftBanner />
      <RightBanner />
    </div>
  );
};

export default Banner;
