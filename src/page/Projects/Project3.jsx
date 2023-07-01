import React from "react";
import { BiWorld } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project3 = () => {
  return (
    <div className="px-4 py-4 md:px-28">
      <div className="grid md:grid-cols-2 gap-4 md:gap-10 justify-center items-center">
        <div className="box w-[350px] h-[250px] mx-auto md:w-[550px] md:h-[400px] bg-black bg-project3 bg-top hover:bg-bottom bg-cover rounded-lg"></div>
        <div>
          <div className="text-center">
            <h3 className="text-2xl text-primary font-semibold pb-2">
              Toy Marketplace
            </h3>
            <div className="w-[300px] mx-auto border-b-4"></div>
            <p className="my-3 w-full px-4">
              Welcome to Toy Marketplace, your one-stop-shop for toy cars! We
              offer a wide range of high-quality, meticulously crafted toy cars
              that cater to collectors, hobbyists, and gift-seekers alike.
              Explore our extensive selection of classic vintage models and
              modern supercars to find the perfect addition to your collection.
              With our commitment to quality and authenticity, you can shop with
              confidence knowing you're getting the best toy cars available.
              Start your toy car adventure with us at Toy Marketplace today!
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Link
              to="https://toy-street-ac102.web.app"
              className="flex items-center gap-2 btn bg-primary hover:bg-secondary text-white capitalize rounded-3xl"
            >
              <BiWorld className="h-6 w-6" />
              <span className="hidden md:block">Live Demo</span>
            </Link>
            <Link
              to="https://github.com/Bajlar/toy-marketplace-client"
              className="flex items-center gap-2 btn bg-primary hover:bg-secondary text-white capitalize rounded-3xl"
            >
              <FaGithub className="h-6 w-6" />
              <span className="hidden md:block">GitHub</span> Client
            </Link>
            <Link
              to="https://github.com/Bajlar/toy-marketplace-server"
              className="flex items-center gap-2 btn bg-primary hover:bg-secondary text-white capitalize rounded-3xl"
            >
              <FaGithub className="h-6 w-6" />
              <span className="hidden md:block">GitHub</span> Server
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;
