import React from "react";

import ContactImg from "./ContactImg";
import ContactFrom from "./ContactFrom";
import SectionTitle from "../../components/SectionTitle";

const Contact = () => {
  return (
    <>
      <section id="" className="py-12 px-4 bg-[#faf6f6] md:px-28">
        <SectionTitle heading={"Contact me"} />
        <div className="md:flex gap-4 md:gap-10 mt-10">
          <ContactImg />
          <ContactFrom />
        </div>
      </section>
    </>
  );
};

export default Contact;
