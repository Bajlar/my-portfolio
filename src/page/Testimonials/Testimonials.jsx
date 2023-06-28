import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <>
      <section
        id="testimonials"
        className="my-4 px-6 md:h-[500px] bg-white md:px-24"
      >
        <h2 className="text-3xl my-8 uppercase text-center text-[#ff014f] font-bold">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Testimonial review={review} key={review._id}></Testimonial>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;