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
      title: "BILONA A2 DESI GHEE",
      description:
        "Pure, traditional A2 cow ghee made using the bilona method. Rich in taste, healthy for heart and digestion.",
      product:
        "https://ik.imagekit.io/sl8w2ayuc/Og/71pYpkxrg4L-removebg-preview.webp?updatedAt=1753167517594",

      video:
        "https://ik.imagekit.io/sl8w2ayuc/Og/ghee.mp4?updatedAt=1753097786269",
      benefits: ["Better Digestion", "Bone Strength", "Traditional Goodness"],
    },

    {
      title: " WILD FOREST HONEY",
      description:
        "Extracted from ethically maintained bee boxes, our honey is raw, and rich in natural enzymes.",
      product:
        "https://ik.imagekit.io/sl8w2ayuc/Og/ChatGPT_Image_Jul_22__2025__07_08_12_PM-removebg-preview.webp?updatedAt=1753191640867",

      video:
        "https://ik.imagekit.io/sl8w2ayuc/Og/honey%20(1).mp4?updatedAt=1753097787308",
      benefits: ["Boost Immunity", "Natural Energy", "Brain Clarity"],
    },

    {
      title: " CHOCOLATE NUT BUTTER",
      description:
        "Crafted with roasted nuts and pure dark chocolate, rich in protein, naturally sweetened, and preservatives free.",
      product:
        "https://ik.imagekit.io/sl8w2ayuc/Og/dark_choco_front_65d098de-da74-46fe-8524-d15caa20a2bf-removebg-preview.webp?updatedAt=1753108709289",

      video:
        "https://ik.imagekit.io/sl8w2ayuc/Og/ghee%20-%20Made%20with%20Clipchamp.mp4?updatedAt=1753106730494",
      benefits: ["Healthy Spread", "Rich Taste", "No Preservatives"],
    },

    {
      title: "COLD PRESSED MUSTURD OIL",
      description:
        "Wood-pressed from premium mustard seeds, our oil is rich in antioxidants, enhances flavor, and promotes heart health.",

      product:
        "https://ik.imagekit.io/sl8w2ayuc/Og/mustard-removebg-preview-Pica-removebg-preview.webp?updatedAt=1753192433002",
      video:
        "https://ik.imagekit.io/sl8w2ayuc/Og/oil%20(1).mp4?updatedAt=1753097787794",
      benefits: ["Heart Friendly", "Strong Aroma", "Chemical Free"],
    },
  ];

  return (
    <div className="HeroSlider">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
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

                <button className="buy-now-btn">Buy Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
