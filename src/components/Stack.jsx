import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Stack = ({ styling, stack }) => {
  const controls = useAnimation();

  useEffect(() => {
    // Trigger slide-in animation when the stack prop changes
    controls.start({
      y: 0,
      opacity: 1,
      
    });
  }, [stack, controls]);

  return (
    <div className={`w-full flex-between gap-10 items-center ${styling}`}>
      {stack.map(({ name, percentage, image }, i) => {
        return (
          <motion.div
            key={name + "dev.silas"}
            className="group flex-between flex-col w-full gap-4"
            initial={{ y: 20, opacity: 0 }}
            transition= {{ duration: 0.5, delay: 0.2 * i }}
            animate={controls}
          >
            <motion.div
              className="flex-between flex-col w-28 h-36 py-5 px-7 gap-[25px] border-[3px] group-hover:border-[#06FFFF] group-hover:border-opacity-90 border-white-trans border-opacity-60 rounded-full"
            >
              <img src={image} alt="" className="w-[70%]" />
              <p className="content text-[#A2F3F3]">{percentage}</p>
            </motion.div>
            <p className="text-sm text-white-100 text-center font-rob capitalize">
              {name}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Stack;
