import React from "react";
import Banner from "../../Banner/Banner";
import About from "../../About/About";
import Testimonials from "../../Testimonials/Testimonials";
import Contact from "../../Contact/Contact";
import Skills from "../../Skills/Skills";
import Projects from "../../Projects/Projects";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
};

export default Home;
