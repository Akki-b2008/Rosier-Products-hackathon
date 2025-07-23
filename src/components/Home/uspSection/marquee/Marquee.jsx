// MarqueeSection.jsx
import Marquee from "react-fast-marquee";
import "./Marquee.css"; // For custom styling if needed

const MarqueeSection = () => {
  return (
    <section className="marquee-section">
      <Marquee
        gradient={false}
        speed={150}
        pauseOnHover={true}
        direction="left"
      >
        <span className="marquee-item">Rooted in Vedic Traditions </span>

        <span className="dots">•</span>

        <span className="marquee-item">Ethically Sourced </span>

        <span className="dots">•</span>

        <span className="marquee-item">Lab Tested </span>

        <span className="dots">•</span>

        <span className="marquee-item">Sustainable & Honest </span>

        <span className="dots">•</span>
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
