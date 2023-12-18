import React, { useRef } from "react";
import SectionTitle from "./SectionTitle";
import Testimonial from "./Testimonial";
import { motion as m, useScroll, useTransform } from "framer-motion";

const Testimonials = () => {
  const testRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: testRef });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-40%"]);

  return (
    <div className="w-full h-full screen-px flex-center flex-col gap-10">
      <SectionTitle
        title="Testimonials"
        description="Don’t take his words and very well organised work for it - hear from others"
        direction="flex-row-reverse"
      />

      <section ref={testRef} className="relative h-[300vh] bg-neutral-900">
        <div className="sticky top-0 left-0 flex h-screen w-full items-center overflow-hidden">
          <m.div style={{ x }} className="transition ease-in-out duration-100 flex gap-10 md:gap-28 overflow-hidden">
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </m.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
