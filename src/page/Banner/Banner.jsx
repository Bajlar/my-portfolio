import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <>
      <section
        id="home"
        className="my-4 px-4 bg-white h-[500px] md:px-24 grid md:grid-cols-2 gap-10 justify-between items-center"
      >
        <LeftBanner />
        <RightBanner />
      </section>
      <div id="about" className="text-white">
        <p className="pb-[38px]">Lorem</p>
      </div>
    </>
  );
};

export default Banner;
