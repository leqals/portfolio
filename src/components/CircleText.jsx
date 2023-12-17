import React from "react";
import { motion } from "framer-motion";

const CircleText = () => {
  const texts = ["One", "Two", "Three", "Four", "Five"]; // Array of texts to display in a circle
  const radius = 100; // Radius of the circle
  const center = 150; // Center coordinates of the circle

  const textElements = texts.map((text, index) => {
    const angle = (index / texts.length) * 2 * Math.PI;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: center, y: center }}
        animate={{ opacity: 1, x: x, y: y }}
        transition={{ duration: 1 }}
        className="absolute"
        style={{ left: x, top: y }}
      >
        {text}
      </motion.div>
    );
  });

  return (
    <div className="absolute left-24 bottom-24 rounded-full w-40 h-40 border-white-trans border-4 bg-gradient">
      {textElements}
    </div>
  );
};

export default CircleText;
