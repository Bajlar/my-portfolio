import React from 'react';
import { frontEndData } from '../../constants/frontEndData';

const FrontEnd = () => {
  return (
    <div>
      <h3 className="text-center text-secondary mb-5 text-2xl font-medium">
        Frontend Development
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {frontEndData.map(({ _id, name, image, experience }) => (
          <article key={_id}>
            <div className="flex justify-center items-center bg-primary hover:bg-secondary duration-300 text-white py-4 rounded-md">
              <img className="h-[50px]" src={image} alt="" />
              <div className="ml-3">
                <h4 className="font-medium">{name}</h4>
                <small className="text-gray-200">{experience}</small>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FrontEnd;