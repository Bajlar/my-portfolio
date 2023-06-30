import React from "react";
import { BiWorld } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project2 = () => {
  return (
    <div className="px-4 py-4 md:px-28">
      <div className="grid md:grid-cols-2 gap-4 md:gap-10 justify-center items-center">
        <div className="order-2 md:order-1">
          <div className="text-center">
            <h3 className="text-2xl text-primary font-semibold">Bistro Boss</h3>
            <div className="w-2/3 mx-auto border-b-4"></div>
            <p className="my-3 w-full px-4">
              Bistro Boss Restaurant's website is a captivating portal to a
              world of culinary excellence. With its visually stunning design
              and intuitive layout, the site offers a seamless browsing
              experience for visitors. Discover the restaurant's commitment to
              using fresh, locally sourced ingredients and be tempted by their
              mouthwatering menu. Whether you're a food enthusiast or simply
              looking for a memorable dining experience, Bistro Boss
              Restaurant's website is your gateway to a world of delectable
              delights.
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Link
              to="https://recap-bistro-boss-restaurant.web.app"
              className="flex items-center gap-2 btn bg-primary hover:bg-secondary text-white capitalize rounded-3xl"
            >
              <BiWorld className="h-6 w-6" />
              <span className="hidden md:block">Live Demo</span>
            </Link>
            <Link
              to="https://github.com/Bajlar/recap-bistro-boss-client"
              className="flex items-center gap-2 btn bg-primary hover:bg-secondary text-white capitalize rounded-3xl"
            >
              <FaGithub className="h-6 w-6" />
              <span className="hidden md:block">GitHub</span> Client
            </Link>
            <Link
              to="https://github.com/Bajlar/recap-bistro-boss-server"
              className="flex items-center gap-2 btn bg-primary hover:bg-secondary text-white capitalize rounded-3xl"
            >
              <FaGithub className="h-6 w-6" />
              <span className="hidden md:block">GitHub</span> Server
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 md:-ml-4 box w-[350px] h-[250px] mx-auto md:w-[550px] md:h-[400px] bg-black bg-project2 bg-top hover:bg-bottom bg-cover rounded-lg"></div>
      </div>
    </div>
  );
};

export default Project2;
