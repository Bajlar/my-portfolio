import React, { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

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
        <div className="md:grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 hidden">
          {reviews.map((review) => (
            <Testimonial review={review} key={review._id}></Testimonial>
          ))}
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="block mt-10 md:hidden">
              {reviews.slice(0, 1).map((review) => (
                <Testimonial review={review} key={review._id}></Testimonial>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block mt-10 md:hidden">
              {reviews.slice(1, 2).map((review) => (
                <Testimonial review={review} key={review._id}></Testimonial>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block mt-10 md:hidden">
              {reviews.slice(2, 3).map((review) => (
                <Testimonial review={review} key={review._id}></Testimonial>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <p id="contact" className="text-transparent mb-[53px]">
        hidden
      </p>
    </>
  );
};

export default Testimonials;
