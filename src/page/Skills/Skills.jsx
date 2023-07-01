import React from "react";
import SectionTitle from "../../components/SectionTitle";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";

const Skills = () => {
  return (
    <>
      <section id="" className="py-12 px-4 bg-white md:px-28">
        <SectionTitle heading={"Skills"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mt-5">
          <FrontEnd />
          <BackEnd />
        </div>
      </section>
      <p id="projects" className="text-transparent mb-[54px]">
        hidden
      </p>
    </>
  );
};

export default Skills;
