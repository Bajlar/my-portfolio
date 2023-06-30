import React from "react";

const SectionTitle = ({ heading }) => {
  return (
    <div className="pb-5">
      <p className="text-3xl uppercase text-center text-primary font-bold">
        {heading}
      </p>
      <div className="w-2/3 mx-auto border-b-4"></div>
    </div>
  );
};

export default SectionTitle;
