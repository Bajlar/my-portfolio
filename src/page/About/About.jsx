import React from "react";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="py-8 px-4 md:h-[500px] bg-[#faf6f6] md:px-28 grid md:grid-cols-2 gap-10 justify-center items-center"
      >
        <LeftAbout />
        <RightAbout />
      </section>
    </>
  );
};

export default About;
