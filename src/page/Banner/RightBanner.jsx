import React from "react";
import Lottie from "lottie-react";
import banner from "../../assets/banner.json";

const RightBanner = () => {
  return (
    <div className="order-1 md:order-2">
      <Lottie animationData={banner} className="w-full h-[400px]" />
    </div>
  );
};

export default RightBanner;
