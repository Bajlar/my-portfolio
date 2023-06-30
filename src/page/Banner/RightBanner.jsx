import React from "react";
import Lottie from "lottie-react";
import banner from "../../assets/banner.json";

const RightBanner = () => {
  return (
    <div className="order-1 md:order-2">
      <div className="flex text-end items-center">
        <Lottie animationData={banner} className="w-full h-[400px]" />
      </div>
    </div>
  );
};

export default RightBanner;
