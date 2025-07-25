// MarqueePlatforms.jsx
import Marquee from "react-fast-marquee";
import "./Marquee.css";
import platformLogos from './MarqueeData'


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
