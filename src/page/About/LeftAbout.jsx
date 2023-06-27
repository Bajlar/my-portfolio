import React from 'react';
import about from "../../assets/images/about/about.jpg";

const LeftAbout = () => {
  return (
    <div>
      <div>
        <img src={about} alt="bannerImg" className="w-full rounded-xl" />
      </div>
    </div>
  );
};

export default LeftAbout;