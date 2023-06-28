import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const SocialLink = () => {
  return (
    <div className="flex gap-4 -mb-4">
      <div>
        <a href="https://github.com/Bajlar" target="_blank">
          <FaGithub className="text-5xl" />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/bajlar-rahman-484503280"
          target="_blank"
        >
          <FaLinkedinIn className="text-5xl" />
        </a>
      </div>
    </div>
  );
};

export default SocialLink;
