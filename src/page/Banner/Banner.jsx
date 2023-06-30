import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <>
      <section
        id="home"
        className="py-8 px-4 bg-white md:h-[500px] md:px-28 grid md:grid-cols-2 gap-4 md:gap-10 justify-center items-center"
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
