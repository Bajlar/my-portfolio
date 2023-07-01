import React from "react";

const SectionTitle = ({ heading}) => {
  return (
    <div className="mb-5">
      <p className="text-3xl uppercase text-center text-primary font-bold pb-2">
        {heading}
      </p>
      <div className="w-[300px] mx-auto border-b-4"></div>
    </div>
  );
};

export default SectionTitle;
