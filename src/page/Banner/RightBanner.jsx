import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

// import banner from "../../assets/images/banner/banner.jpg";

const RightBanner = () => {
  const [banner, setBanner] = useState('');
  useEffect(() => {
    fetch("banner.json")
      .then((res) => res.json())
      .then((data) => {
        setBanner(data);
      });
  }, []);
  return (
    <div className="order-1 md:order-2">
      <div className="flex items-center">
        {/* <img src={banner} alt="bannerImg" className="w-full" /> */}
        <Lottie animationData={banner} className="h-[350px]" />
      </div>
    </div>
  );
};

export default RightBanner;
