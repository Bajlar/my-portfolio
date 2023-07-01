import React from "react";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";

const About = () => {
  return (
    <>
      <section
        id=""
        className="py-12 px-4 bg-[#faf6f6] md:px-28 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 justify-center items-center"
      >
        <LeftAbout />
        <RightAbout />
      </section>
      <p id="skills" className="text-transparent pb-[54px] bg-[#faf6f6]">
        hidden
      </p>
    </>
  );
};

export default About;
