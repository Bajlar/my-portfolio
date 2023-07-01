import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import BoxArea from "./BoxArea";

const Banner = () => {
  return (
    <>
      <BoxArea />
      <section className="pb-12 px-4 bg-white md:px-28 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 justify-center items-center">
        <LeftBanner />
        <RightBanner />
      </section>
      <p id="about" className="text-transparent mb-[54px]">
        hidden
      </p>
    </>
  );
};

export default Banner;
