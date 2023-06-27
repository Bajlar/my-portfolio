import React from "react";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";

const About = () => {
  return (
    <section
      id="about"
      className="my-4 px-6 bg-base-200 md:h-[500px] py-4 md:px-24 grid md:grid-cols-2 gap-10 justify-between items-center"
    >
      <LeftAbout />
      <RightAbout />
    </section>
  );
};

export default About;