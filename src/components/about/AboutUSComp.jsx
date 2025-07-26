

// const timeline = [
//   { year: "2020", event: "Rosier Foods was incorporated in Delhi, India." },
//   { year: "2021", event: "Launched flagship A2 Gir Cow Ghee during Chaitra Navratri." },
//   { year: "2022 - 2023", event: "Became Top 5000 seller on Amazon India." },
//   { year: "2024–2025", event: "Achieved 879% revenue and 1882% profit growth." }
// ];

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import "./AboutUSComp.css";
import { NavLink } from "react-router-dom";

const timeline = [
  { year: "2020", event: "Rosier Foods was incorporated in Delhi, India." },
  { year: "2021", event: "Launched flagship A2 Gir Cow Ghee during Chaitra Navratri." },
  { year: "2022 - 2023", event: "Became Top 5000 seller on Amazon India." },
  { year: "2024–2025", event: "Achieved 879% revenue and 1882% profit growth." }
];

export default function AboutUsComp() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      controls.start({ opacity: 1, y: 0 });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="about-us">
      {/* Hero Image */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/sl8w2ayuc/Og/484051526_650232391086922_7846735457136928008_n.jpg?updatedAt=1753362035764')",
        }}
      ></motion.div>

      {/* Hero Text */}
      <motion.section
        className="hero"
        initial={{ y: 50, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <h1>About Rosier Foods</h1>
        <p>
          Rosier Foods is a premium food brand offering high-quality, healthy, and natural food products to elevate everyday meals into extraordinary experiences.
        </p>
      </motion.section>

      {/* Story */}
      <motion.section
        className="story"
        initial={{ x: -50, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <h2>Our Story</h2>
        <p>
          Founded with a passion for purity and flavor, Rosier Foods began its journey in 2015...
        </p>
      </motion.section>

      {/* Mission and Vision */}
      <section className="mission-vision">
        {["Our Mission", "Our Vision"].map((title, idx) => (
          <motion.div
            className="block"
            key={idx}
            initial={{ y: 40, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <h2>{title}</h2>
            <p>
              {title === "Our Mission"
                ? "To provide wholesome, authentic, and high-quality food products that nourish families..."
                : "To become a globally recognized brand known for innovation in food..."}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Timeline */}
      <motion.section className="timeline" animate={controls}>
        <h2>Our Journey</h2>
        <div className="timeline-container">
          {timeline.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.6 }}
            >
              <h3>{item.year}</h3>
              <p>{item.event}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* USPs */}
      <motion.section className="usps" animate={controls} transition={{ delay: 0.2, duration: 0.8 }}>
        <h2>Why Choose Rosier?</h2>
        <div className="usp-cards">
          {["100% Natural Ingredients", "No Preservatives", "Farm-to-Table Freshness", "Award-Winning Taste"].map(
            (text, idx) => (
              <motion.div
                className="card"
                key={idx}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.1, delay: idx * 0 }}
              >
                {text}
              </motion.div>
            )
          )}
        </div>
      </motion.section>

      {/* Products Grid */}
      <motion.section className="products" animate={controls}>
        <h2>Our Products</h2>
        <div className="product-grid">
          {[
            { src: "71O4XwFiS-L._UF1000,1000_QL80_.jpg?updatedAt=1753383539567", alt: "A2 Cow Ghee" },
            { src: "659da5_4bc34e3299d54369b6b3dfbfa65961c7~mv2.avif?updatedAt=1753465452347", alt: "Wild Forest Honey" },
            { src: "2_c64d1cf8-55d0-41fa-83a3-130a0c84f191.webp?updatedAt=1753437714572", alt: "Cold Pressed Oils" },
            { src: "Bestseller.webp?updatedAt=1753383539736", alt: "Khapli Wheat Aata" },
          ].map((product, idx) => (
            <motion.div
              className="product"
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              transition={{ duration: 0.1, delay: idx * 0 }}
            >
              <img src={`https://ik.imagekit.io/sl8w2ayuc/Og/${product.src}`} alt={product.alt} />
              <p>{product.alt}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="cta"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <h2>Be a Part of the Rosier Experience</h2>
        <NavLink to={'/products'}>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            Explore Our Products
          </motion.button>
        </NavLink>
      </motion.section>
    </div>
  );
}


