import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const SocialLink = () => {
  return (
    <div className="flex items-center gap-4">
      <div>
        <a href="https://github.com/Bajlar" target="_blank">
          <div className="avatar placeholder">
            <div className="bg-[#cda9f3] hover:bg-secondary text-neutral-content rounded-full w-10">
              <FaGithub className="text-2xl text-primary " />
            </div>
          </div>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/bajlar-rahman-484503280"
          target="_blank"
        >
          <div className="avatar placeholder">
            <div className="bg-[#cda9f3] hover:bg-secondary text-neutral-content rounded-full w-10">
              <FaLinkedinIn className="text-2xl text-primary" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialLink;
