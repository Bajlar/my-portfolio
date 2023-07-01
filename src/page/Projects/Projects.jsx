import React from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import SectionTitle from "../../components/SectionTitle";

const Projects = () => {
  return (
    <>
      <section id="" className="bg-[#faf6f6] py-12">
        <SectionTitle heading={"Projects"} />
        <div className="mt-10">
          <Project1 />
          <Project2 />
          <Project3 />
        </div>
      </section>
      <p id="testimonials" className="text-transparent pb-[54px] bg-[#faf6f6]">
        hidden
      </p>
    </>
  );
};

export default Projects;
