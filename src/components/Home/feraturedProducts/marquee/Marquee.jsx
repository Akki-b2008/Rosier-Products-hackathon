// MarqueePlatforms.jsx
import Marquee from "react-fast-marquee";
import "./Marquee.css";

const platformLogos = [
  {
    name: "Amazon",
    img: "https://ik.imagekit.io/sl8w2ayuc/Og/amazon-black-icon.webp?updatedAt=1753386834398",
    alt: "Amazon",
  },
  {
    name: "Flipkart",
    img: "https://ik.imagekit.io/sl8w2ayuc/Og/flipkart.png.webp?updatedAt=1753386834209",
    alt: "Flipkart",
  },
  {
    name: "Zepto",
    img: "https://ik.imagekit.io/sl8w2ayuc/Og/Zepto_Logo.svg.png?updatedAt=1753386834410",
    alt: "Zepto",
  },
  {
    name: "Blinkit",
    img: "https://ik.imagekit.io/sl8w2ayuc/Og/Blinkit_Coloured_logo402x.webp?updatedAt=1753386834318",
    alt: "Blinkit",
  },
  {
    name: "Amazon",
    img: "https://ik.imagekit.io/sl8w2ayuc/Og/amazon-black-icon.webp?updatedAt=1753386834398",
    alt: "Amazon",
  },
  {
    name: "Flipkart",
    img: "https://ik.imagekit.io/sl8w2ayuc/Og/flipkart.png.webp?updatedAt=1753386834209",
    alt: "Flipkart",
  },
  {
    name: "Zepto",
    img: "https://ik.imagekit.io/sl8w2ayuc/Og/Zepto_Logo.svg.png?updatedAt=1753386834410",
    alt: "Zepto",
  },
  {
    name: "Blinkit",
    img: "https://ik.imagekit.io/sl8w2ayuc/Og/Blinkit_Coloured_logo402x.webp?updatedAt=1753386834318",
    alt: "Blinkit",
  },
];

const MarqueePlatforms = () => {
  return (
    <section className="marquee-platforms">
      <h2 className="marquee-heading">Also Available On</h2>

      <Marquee gradient={false} speed={80} pauseOnHover={true}>
        {platformLogos.map((platform, index) => (
          <div className="platform-logo" key={index}>
            <img src={platform.img} alt={platform.alt} />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueePlatforms;
