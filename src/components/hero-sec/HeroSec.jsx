import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroSec.css"; // updated SCSS file

const HeroSlider = () => {
  const slides = [
    {
      title: "A2 DESI GHEE",
      description:
        "Pure, traditional A2 cow ghee made using the bilona method. Rich in taste, healthy for heart and digestion.",
      product:
        "https://ik.imagekit.io/sl8w2ayuc/Og/yxdy7ebpw5thixxkcmhw.webp?updatedAt=1753083012158",
      bgColor: "#f5f0e6",
      video:
        "https://ik.imagekit.io/sl8w2ayuc/Og/ghee.mp4?updatedAt=1753097786269",
      benefits: ["Better Digestion", "Bone Strength", "Traditional Goodness"],
    },

    {
      title: "FARM-FRESH HONEY",
      description:
      "Extracted from ethically maintained bee boxes, our honey is raw, unprocessed, and rich in natural enzymes — a perfect addition to your daily wellness.",
      product:
        "https://ik.imagekit.io/sl8w2ayuc/Og/hctfsr4x043kczgspqxp.webp?updatedAt=1753083011914",
      bgColor: "#fff7e6",
      video:
        "https://ik.imagekit.io/sl8w2ayuc/Og/honey%20(1).mp4?updatedAt=1753097787308",
      benefits: ["Boost Immunity", "Natural Energy", "Brain Clarity"],
    },

    {
      title: " DARK CHOCOLATE NUT BUTTER",
      description:
        "Crafted with roasted nuts and pure dark chocolate, this deliciously creamy spread is rich in protein, naturally sweetened, and free from preservatives.",
      product:
        "https://ik.imagekit.io/sl8w2ayuc/Og/dark_choco_front_65d098de-da74-46fe-8524-d15caa20a2bf-removebg-preview.webp?updatedAt=1753108709289",
      bgColor: "#f2fcff",
      video:
        "https://ik.imagekit.io/sl8w2ayuc/Og/ghee%20-%20Made%20with%20Clipchamp.mp4?updatedAt=1753106730494",
      benefits: ["Healthy Spread", "Rich Taste", "No Preservatives"],
    },

    {
      title: "COLD PRESSED MUSTURD OIL",
      description:
        "Wood-pressed from premium mustard seeds, our oil is rich in antioxidants, enhances flavor, and promotes heart health — a true kitchen essential.",

      product:
        "https://ik.imagekit.io/sl8w2ayuc/Og/yng4znbwt141f1oem43f.webp?updatedAt=1753083012017",
      bgColor: "#fefae0",
      video:
        "https://ik.imagekit.io/sl8w2ayuc/Og/oil%20(1).mp4?updatedAt=1753097787794",
      benefits: ["Heart Friendly", "Strong Aroma", "Chemical Free"],
    },
  ];

  return (
    <div className="HeroSlider">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        // autoplay={{ delay: 20000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-container"
              style={{ backgroundColor: slide.bgColor }}
            >
              <div className="left-side">
                <div className="text-content">
                  <h1 className={`heading-${index}`}>{slide.title}</h1>
                  <p>{slide.description}</p>
                </div>

                <div className={`benefits benefits-${index}`}>
                  {slide.benefits?.map((benefit, i) => (
                    <h2 key={i} className="benefit-heading">
                      {benefit}
                    </h2>
                  ))}
                </div>

                <img
                  src={slide.product}
                  alt={`product-${index}`}
                  className={`img-${index}`}
                />
              </div>

              <div className="right-side">
                <video
                  src={slide.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={`slide-video video-${index}`}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
