import React from "react";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill, BsLinkedin } from "react-icons/bs";
import { TbBrandDribbbleFilled } from "react-icons/tb";

const SocialIcons = () => {
  return (
    <div className="flex fixed flex-col top-[30%] left-0">
      <ul>
        <li className="text-white w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-rose-600 rounded-tr-md">
          <a
            className="flex justify-between items-center w-full text-white px-5"
            href="https://drive.google.com/file/d/1o7ttSF-rRp7jHedq8MN9uLHRAn9G42VS/view?usp=sharing"
            target="_blank"
          >
            Resume <BsFillPersonLinesFill size={24} />
          </a>
        </li>
        <li className="text-white w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-black">
          <a
            className="flex justify-between items-center w-full text-white px-5"
            href="https://github.com/Bajlar"
            target="_blank"
          >
            GitHub <FaGithub size={24} />
          </a>
        </li>
        <li className="text-white w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-blue-600">
          <a
            className="flex justify-between items-center w-full text-white px-5"
            href="https://www.linkedin.com/in/bajlar-rahman-484503280/"
            target="_blank"
          >
            LinkedIn <BsLinkedin size={24} />
          </a>
        </li>
        <li className="text-white w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-[#b269f6]">
          <a
            className="flex justify-between items-center w-full text-white px-5"
            href="https://dribbble.com/bajlar1007"
            target="_blank"
          >
            Dribbble <TbBrandDribbbleFilled size={24} />
          </a>
        </li>
        <li className="text-white w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-blue-600 rounded-br-md">
          <a
            className="flex justify-between items-center w-full text-white px-5"
            href="https://www.facebook.com/profile.php?id=100006694475266"
            target="_blank"
          >
            Facebook <FaFacebookSquare size={24} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
