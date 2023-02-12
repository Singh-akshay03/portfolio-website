import React from "react";
import "./Testimonial.css";
import AVTR1 from "../../Assets/client1.jpg";
import AVTR2 from "../../Assets/client2.jpg";
import AVTR3 from "../../Assets/client3.jpg";
import AVTR4 from "../../Assets/client4.jpg";

import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
  {
    avatar: AVTR1,
    name: "John Snow",
    review:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniamlabore placeat in! Deserunt autem iusto ullam, corporis itaque odio ex fuga soluta atque quam facilis ipsa officiis porro pariatur magnam!",
  },
  {
    avatar: AVTR2,
    name: "Arya Stark",
    review:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniamlabore placeat in! Deserunt autem iusto ullam, corporis itaque odio ex fuga soluta atque quam facilis ipsa officiis porro pariatur magnam!",
  },
  {
    avatar: AVTR3,
    name: "Sersie Lanister",
    review:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniamlabore placeat in! Deserunt autem iusto ullam, corporis itaque odio ex fuga soluta atque quam facilis ipsa officiis porro pariatur magnam!",
  },
  {
    avatar: AVTR4,
    name: "Jemmie Lanister",
    review:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniamlabore placeat in! Deserunt autem iusto ullam, corporis itaque odio ex fuga soluta atque quam facilis ipsa officiis porro pariatur magnam!",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial_container mySwiper"
      autoplay={{
       
          delay: 1000,
          
      }}
      speed={1000} 
      loop={true}
      // install Swiper modules
      modules={[Autoplay,Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={true}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h5>{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
