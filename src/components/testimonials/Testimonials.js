import React from "react";
import "./testimonials.css";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: avatar1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magni corporis at culpa in harum fugit numquam, incidunt dignissimos placeat nulla animi rerum distinctio? Porro rem pariatur eos assumenda recusandae."
  },
  {
    avatar: avatar2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magni corporis at culpa in harum fugit numquam, incidunt dignissimos placeat nulla animi rerum distinctio? Porro rem pariatur eos assumenda recusandae."
  },
  {
    avatar: avatar3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magni corporis at culpa in harum fugit numquam, incidunt dignissimos placeat nulla animi rerum distinctio? Porro rem pariatur eos assumenda recusandae."
  },
  {
    avatar: avatar4,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magni corporis at culpa in harum fugit numquam, incidunt dignissimos placeat nulla animi rerum distinctio? Porro rem pariatur eos assumenda recusandae."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
