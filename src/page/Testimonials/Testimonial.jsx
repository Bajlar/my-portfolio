import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = ({ review }) => {
  // console.log(review);
  const { name, image, details, rating } = review;

  return (
    <div className="card bg-base-100 shadow-xl mt-4">
      <div className="avatar flex justify-center items-center">
        <div className="w-24 rounded-full">
          <img src={image} />
        </div>
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <Rating style={{ maxWidth: 160 }} value={rating} readOnly />
      </div>
    </div>
  );
};

export default Testimonial;
