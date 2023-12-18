import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const SlideIn = ({ style='w-full', delay = 0.1, once, children }) => {
  const slideRef = useRef(null);
  const controller = useAnimation();
  const slideInView = useInView(slideRef, { once });

  React.useEffect(() => {
    if (!slideRef) return false;
    slideInView ? controller.start("visible") : controller.start("hidden");
  }, [controller, slideInView]);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay },
    },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      ref={slideRef}
      initial="hidden"
      animate={controller}
      variants={variants}
      className={style}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
