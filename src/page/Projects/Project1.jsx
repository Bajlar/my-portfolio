import React from "react";
import { BiWorld } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project1 = () => {
  return (
    <div className="px-4 md:px-28">
      <div className="grid md:grid-cols-2 gap-4 md:gap-10 justify-center items-center">
        <div className="box w-[350px] h-[250px] mx-auto md:w-[550px] md:h-[400px] bg-black bg-project1 bg-top hover:bg-bottom bg-cover rounded-lg"></div>
        <div>
          <div className="text-center">
            <h3 className="text-2xl text-primary font-semibold pb-2">
              Justice Solutions
            </h3>
            <div className="w-[300px] mx-auto border-b-4"></div>
            <p className="my-3 w-full px-4">
              Justice Solutions is a comprehensive website offering a wide range
              of resources and services related to the field of justice and law.
              It provides legal information, professional services, and valuable
              tools to individuals, organizations, and professionals in the
              justice system. The website serves as a hub for accessing legal
              knowledge, connecting with legal experts, and finding solutions to
              various justice-related needs.
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Link
              to="https://justice-legal-solution1.netlify.app"
              className="flex items-center gap-2 btn bg-primary hover:bg-secondary text-white capitalize rounded-3xl"
            >
              <BiWorld className="h-6 w-6" />
              <span className="hidden md:block">Live Demo</span>
            </Link>
            <Link
              to="https://github.com/Bajlar/legal-solution-resources"
              className="flex items-center gap-2 btn bg-primary hover:bg-secondary text-white capitalize rounded-3xl"
            >
              <FaGithub className="h-6 w-6" />
              <span className="hidden md:block">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
