import React from "react";
import Lottie from "lottie-react";
import about from '../../assets/about.json';

const LeftAbout = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Lottie animationData={about} className="w-full h-[400px]" />
      </div>
    </div>
  );
};

export default LeftAbout;
