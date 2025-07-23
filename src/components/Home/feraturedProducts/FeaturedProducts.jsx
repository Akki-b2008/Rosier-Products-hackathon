import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import "./FeaturedProducts.css";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: "A2 Gir Cow Ghee",
    image: "/images/ghee.webp",
    price: "₹899",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Cold Pressed Coconut Oil",
    image: "/images/coconut-oil.webp",
    price: "₹449",
    tag: "New",
  },
  {
    id: 3,
    name: "Raw Forest Honey",
    image: "/images/honey.webp",
    price: "₹299",
    tag: "Organic",
  },
  {
    id: 4,
    name: "Pooja Essentials Pack",
    image: "/images/pooja-pack.webp",
    price: "₹749",
    tag: "Combo",
  },
];

const FeaturedProducts = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const totalScrollWidth = track.scrollWidth - container.offsetWidth;

    gsap.to(track, {
      x: () => `-${totalScrollWidth}px`,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${track.scrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        snap: 1 / (products.length - 1),
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="featured-container" ref={containerRef}>
      <div className="horizontal-track" ref={trackRef}>
        {products.map((product, i) => (
          <motion.div
            className="product-card"
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="tag">{product.tag}</span>
            <img src={product.image} alt={product.name} className="product-img" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="product-btn">Add to Cart</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
