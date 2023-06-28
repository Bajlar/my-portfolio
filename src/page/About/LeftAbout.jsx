import React, { useEffect, useState } from "react";
// import about from "../../assets/images/about/aboutImg.jpg";
import Lottie from "lottie-react";

const LeftAbout = () => {
  const [about, setAbout] = useState("");
  useEffect(() => {
    fetch("about.json")
      .then((res) => res.json())
      .then((data) => {
        setAbout(data);
      });
  }, []);
  return (
    <div>
      {/* <div>
        <img src={about} alt="aboutImg" className="w-full rounded-xl" />
      </div> */}
      <div className="flex items-center">
        {/* <img src={banner} alt="bannerImg" className="w-full" /> */}
        <Lottie animationData={about} className="h-[350px]" />
      </div>
    </div>
  );
};

export default LeftAbout;
