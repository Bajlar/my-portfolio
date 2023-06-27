import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="my-4 px-6 bg-white h-[500px] md:px-24 grid md:grid-cols-2 gap-6 justify-between items-center"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
