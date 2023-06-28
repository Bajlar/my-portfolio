import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Front-End Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="order-2 md:order-1">
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold uppercase">Welcome to my World</h2>
        <h1 className="text-3xl md:text-5xl font-bold">
          Hi, I'm <span className="text-[#ff014f]">Bajlar Rahman</span>
        </h1>
        <h2 className="text-2xl font-bold">
          a <span className="text-red-500">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="text-[#ff014f]"
          />
        </h2>
      </div>
      <div className="mt-4">
        <button className="btn btn-secondary">Resume</button>
      </div>
    </div>
  );
};

export default LeftBanner;
