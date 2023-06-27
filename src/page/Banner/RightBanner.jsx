import React from "react";
import banner from "../../assets/images/banner/banner.jpg";

const RightBanner = () => {
  return (
    <div className="order-1 md:order-2">
      <div>
        <img src={banner} alt="bannerImg" className="w-full" />
      </div>
    </div>
  );
};

export default RightBanner;
