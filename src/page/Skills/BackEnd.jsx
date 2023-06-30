import React from 'react';
import { backEndData } from './../../constants/backEndData';

const BackEnd = () => {
  return (
    <div>
      <h3 className="text-center text-secondary mb-4 text-2xl font-medium">
        Backend Development
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {backEndData.map(({ _id, name, image, experience }) => (
          <article key={_id}>
            <div className="flex justify-center items-center text-primary border-4 py-2 rounded-md">
              <img className="h-[50px]" src={image} alt="" />
              <div className="ml-3">
                <h4 className="font-Roboto font-medium">{name}</h4>
                <small className="text-gray-400">{experience}</small>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BackEnd;