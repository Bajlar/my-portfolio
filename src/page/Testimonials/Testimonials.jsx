import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';
import SectionTitle from '../../components/SectionTitle';

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
        className="py-8 px-4 bg-white md:px-28"
      >
        <SectionTitle heading={"Testimonials"} />
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