import React, { useEffect, useRef, useState } from "react";
import tesla from "../assets/prototype-2/logo-1.svg";
import triangleTop from "../assets/triangle-top.svg";
import triangleBottom from "../assets/triangles.svg";
import ceo from "../assets/DP.png";
import { motion as m, useAnimation } from "framer-motion";
import { isInProximity, useScreenMidpoint } from "../util/helpers";

const Testimonial = ({ name, position, words, dp, icon }) => {
  const [prox, setProx] = useState(false);
  const ref = useRef(null);
  const controller = useAnimation();
  const { x, y } = useScreenMidpoint();

  useEffect(() => {
    setProx(isInProximity(ref));
    if (!ref.current) return;
    prox ? controller.start({ scale: 1 }) : controller.start({ scale: 0.87 });
  }, [y, prox]);

  return (
    <m.div
      animate={controller}
      transition={{ duration: 0.1 }}
      ref={ref}
      className="min-w-[24rem] md:w-[23rem] h-[28rem] md:h-[27rem] flex-center border-white-trans border-4 rounded-2xl p-10 overflow-hidden"
    >
      <div className="flex flex-col gap-4 w-full relative overflow-hidden">
        <div className="flex-between w-full">
          <div className="flex-between flex-col gap-10">
            <img src={icon} alt="tesla" className="w-10" />
            <img src={triangleTop} className="w-10" />
          </div>

          <div className="absolute flex-center bg-white-trans w-32 h-32 rounded-full overflow-hidden translate-x-1/4 -translate-y-1/4 right-0 top-0">
            <img src={dp} className="h-full aspect-video" />
          </div>
        </div>

        <p className="content text-white-100 mt-5">{words}</p>

        <div className="flex-between w-full mt-5">
          <div className="flex-start flex-col gap-2">
            <div className="content font-semibold text-white-200">{name}</div>
            <div className="content font-light text-white-100">{position}</div>
          </div>

          <div className="absolute flex-center w-32 h-32 right-0 -bottom-7">
            <img src={triangleBottom} className="w-full" />
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Testimonial;
