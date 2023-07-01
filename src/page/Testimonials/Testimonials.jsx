import React, { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import SectionTitle from "../../components/SectionTitle";

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
      <section id="" className="py-12 px-4 bg-white md:px-28">
        <SectionTitle heading={"Testimonials"} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {reviews.map((review) => (
            <Testimonial review={review} key={review._id}></Testimonial>
          ))}
        </div>
      </section>
      <p id="contact" className="text-transparent mb-[53px]">
        hidden
      </p>
    </>
  );
};

export default Testimonials;
