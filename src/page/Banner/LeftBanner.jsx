import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import resume from "../../assets/file/resume.pdf";
import SocialLink from "./SocialLink";
import { FaDownload } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Front-End Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="order-2 md:order-1 flex flex-col">
      <div>
        <h2 className="text-2xl font-bold mb-3 leading-6">
          Welcome to my World
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, <span className="text-primary">I'm Bajlar</span>
        </h1>
        <h2 className="text-3xl mt-3 font-bold">
          a <span className="text-secondary">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#d81b60d8"
          />
        </h2>
      </div>
      <div className="flex items-center flex-6 mt-4">
        <div className="md:mt-14 mr-4">
          <a
            href={resume}
            download
            className="btn bg-primary hover:bg-secondary text-white capitalize rounded-3xl"
          >
            Download Resume <FaDownload className="text-lg" />
          </a>
        </div>
        <div className="md:-mb-14">
          <SocialLink />
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
