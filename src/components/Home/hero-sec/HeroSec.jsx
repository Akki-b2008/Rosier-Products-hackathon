import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroSec.css"; 
import slides from './HeroData'
import { NavLink } from "react-router-dom";

const HeroSlider = () => {
 
  return (
    <div className="HeroSlider">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-container"
            >
              <div className="left-side">
                <div className="text-content">
                  <h1 className={`heading heading-${index}`}>{slide.title}</h1>
                  <p>{slide.description}</p>

                  <div className={`benefits benefits-${index}`}>
                    {slide.benefits?.map((benefit, i) => (
                      <h2 key={i} className="benefit-heading">
                        {benefit}
                      </h2>
                    ))}
                  </div>
                </div>

                <div className="product-img">
                  <img
                    src={slide.product}
                    alt={`product-${index}`}
                    className={`img-${index}`}
                  />
                </div>
              </div>

              <div className="right-side">
                <div>
                  <video
                    src={slide.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={`slide-video video-${index}`}
                  />
                </div>
              <NavLink to={`/product-details/${slide.id}`}>
                <button className="buy-now-btn">Buy Now</button>
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
