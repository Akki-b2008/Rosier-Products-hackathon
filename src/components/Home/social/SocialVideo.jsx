import React from "react";
import { motion } from "framer-motion";
import "./SocialVideo.css";

const reels = [
  {
    id: 1,
    videoUrl: "/videos/reel1.mp4",
    title: "From Farm to Table",
  },
  {
    id: 2,
    videoUrl: "/videos/reel2.mp4",
    title: "Behind the Scenes",
  },
  {
    id: 3,
    videoUrl: "/videos/reel3.mp4",
    title: "Authentic Taste",
  },
];

const Reels = () => {
  return (
    <section className="reels-section">
      <h2 className="reels-heading">Brand Reels</h2>
      <div className="reels-container">
        {reels.map((reel) => (
          <motion.div
            className="reel-card"
            key={reel.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <video
              src={reel.videoUrl}
              muted
              loop
              playsInline
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => e.target.pause()}
            />
            <p>{reel.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reels;
