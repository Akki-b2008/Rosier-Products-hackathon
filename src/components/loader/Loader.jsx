// src/components/loader/Loader.jsx
import "./Loader.css";
import { motion } from "framer-motion";

const Loader = () => {
  const dotVariants = {
    initial: { y: 0, opacity: 0.6 },
    animate: {
      y: [-10, 0, 10, 0],
      opacity: [0.6, 1, 0.6],
      transition: {
        repeat: Infinity,
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="loader-wrapper">
      <div className="motion-loader">
        {[...Array(4)].map((_, i) => (
          <motion.span
            className="dot"
            key={i}
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{
              delay: i * 0.2,
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;

