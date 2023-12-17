import React from "react";
import { motion as m } from "framer-motion";

const Transition = ({ children }) => {
  return (
    <>
      {children}
      <m.div
        className="origin-bottom fixed top-0 left-0 w-screen h-screen bg-dark-200 z-50"
        variants={{ initial: {scaleY: 0}, show: {scaleY: 1} }}
        initial={"initial"}
        animate={"initial"}
        exit={"show"}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1 }}
      />
      <m.div
        className="origin-top fixed top-0 left-0 w-screen h-screen bg-dark-200 z-50"
        variants={{ initial: { scaleY: 0 }, show: { scaleY: 1 } }}
        initial={"show"}
        animate={"initial"}
        exit={"initial"}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1 }}
      />
    </>
  );
};

export default Transition;
