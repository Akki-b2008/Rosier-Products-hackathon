import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../hero-sec/HeroSec"; // we'll style here

const HeroSlider = () => {
  const slides = [
    "src/assets/hero-sec-img/ghee.png",

    "src/assets/hero-sec-img/butter.png",

    "src/assets/hero-sec-img/oil.png",
    
    "src/assets/hero-sec-img/aata.png"
  ];

  return (
    <div className="HeroSlider">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        slidesPerView={1}
      >
        {slides.map((url, index) => (
          <SwiperSlide key={index}>
            <img src={url} alt={`slide-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;

