import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = ({ review }) => {
  const { name, image, details, rating } = review;

  return (
    <div
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="card bg-base-100 shadow-md mt-4"
    >
      <div className="card-body items-center text-center">
        <FaQuoteLeft className="text-2xl text-yellow-500" />
        <p>{details}</p>
        <div className="w-[30px] border-b-4 text-gray-400"></div>
        <div className="avatar flex justify-center items-center mt-2">
          <div className="w-20 rounded-full">
            <img src={image} />
          </div>
        </div>
        <h2 className="card-title">{name}</h2>

        <Rating style={{ maxWidth: 160 }} value={rating} readOnly />
      </div>
    </div>
  );
};

export default Testimonial;
