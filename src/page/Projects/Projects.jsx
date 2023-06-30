import React from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import SectionTitle from "../../components/SectionTitle";

const Projects = () => {
  return (
    <section id="projects" className="bg-[#faf6f6] py-8">
      <div className="mb-6 px-4">
        <SectionTitle heading={"Projects"} />
      </div>
      <Project1 />
      <Project2 />
      <Project3 />
    </section>
  );
};

export default Projects;
