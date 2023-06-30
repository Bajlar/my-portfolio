import React from "react";
import Lottie from "lottie-react";
import contact from '../../assets/contact.json';

const ContactImg = () => {
  return (
    <div className="md:w-1/2 flex justify-center items-center">
      <Lottie animationData={contact} className="w-full h-[400px]" />
    </div>
  );
};

export default ContactImg;
