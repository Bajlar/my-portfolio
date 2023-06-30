import React from "react";
import SectionTitle from "../../components/SectionTitle";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";

const Skills = () => {
  return (
    <>
      <section id="skills" className="py-8 px-4 md:h-[500px] bg-white md:px-28">
        <SectionTitle heading={"Skills"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
          <FrontEnd />
          <BackEnd />
        </div>
      </section>
    </>
  );
};

export default Skills;
