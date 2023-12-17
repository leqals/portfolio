import React, { useEffect, useRef, useState } from "react";
import { motion as m, useAnimation, inView } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Stack from "./Stack";
import DP from "../assets/mbj.jpg";
import DP2 from "../assets/mbj_two.jpg";
import DP3 from "../assets/mbj_three.jpg";
import DP4 from "../assets/mbj_four.jpg";
import DP5 from "../assets/mbj_five.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { shiftImages, useVisibleHeight } from "../util/helpers";
import Transition from "./Transition";
import { SlideIn } from ".";
import { about } from "../util/constants";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const aboutContainer = useRef(null);
  const aboutInView = inView(aboutContainer, { once: false });
  const aboutVisible = useVisibleHeight(aboutContainer);
  const aboutsControl = useAnimation();

  const firstBox = useRef(null),
    secondBox = useRef(null),
    thirdBox = useRef(null),
    fourthBox = useRef(null),
    fifthBox = useRef(null);

  const handleShiftImages = () => {
    setCurrentIndex((currentIndex + 1) % 5);
    shiftImages([firstBox, secondBox, thirdBox, fourthBox, fifthBox]);
  };

  const handleNext = () => {
    handleShiftImages();
    setState(true);
  };

  useEffect(() => {
    aboutContainer.current && aboutInView
      ? aboutsControl.start({ scale: aboutVisible - 0.15 })
      : null;
  }, [aboutVisible, aboutInView]);

  const [state, setState] = useState(false);

  return (
    <m.div
      animate={aboutsControl}
      ref={aboutContainer}
      className="w-full flex-center flex-col"
      id="about"
      transition={{ duration: 0.1 }}
    >
      <SlideIn once={true} style={"w-full"}>
        <SectionTitle
          title="About"
          description="Learn more about this extraordinary genius."
        />
      </SlideIn>
      <div className="flex-center w-full mt-10">
        <div className="w-full grid grid-cols-12 grid-rows-6 gap-10">
          <div className="flex-between items-start flex-col w-full h-full col-span-6 row-span-4 gap-12">
            <SlideIn once={true} delay={0.2}>
              <h3 className="font-osw text-white-200 text-4xl font-semibold">
                {about[currentIndex].title}
              </h3>
            </SlideIn>

            <SlideIn once={true} delay={0.23}>
              <p className="content text-white-100 max-w-md -mt-8">
              {about[currentIndex].description}
              </p>
            </SlideIn>
            <SlideIn once={true} delay={0.24}>
              <Stack stack={about[currentIndex].stack} />
            </SlideIn>
          </div>
          <SlideIn once={true} delay={0.24} style={"col-span-4 row-span-6"}>
            <div
              ref={fourthBox}
              className="w-full h-full bg-white-trans  rounded-2xl overflow-hidden justify-center items-center"
            >
              <img src={DP4} alt="" className="w-full" />
            </div>
          </SlideIn>
          <SlideIn once={true} delay={0.29} style={" col-span-2 row-span-4 "}>
            <div className="w-full h-full flex-between flex-col items-center ">
              <div
                onClick={handleNext}
                className="group flex-center rounded-full w-16 h-16 transition duration-300 border-white-trans hover:border-white-100 border-2 bg-gradient"
              >
                <BsArrowLeft className="text-4xl text-white-100 group-hover:text-white-200 transition duration-300" />
              </div>
              <div className="group flex-center rounded-full w-16 h-16 transition duration-300 border-white-trans hover:border-white-100 border-2 bg-gradient">
                <BsArrowRight className="text-4xl text-white-100 group-hover:text-white-200 transition duration-300" />
              </div>
            </div>
          </SlideIn>
          <SlideIn once={true} delay={0.3} style={"col-span-2 row-span-2"}>
            <div
              ref={firstBox}
              className="relative w-40 h-40  bg-white-trans rounded-lg overflow-hidden"
            >
              <Transition onStop={(state) => setState(state)} state={state}>
                <img src={DP5} alt="" className="w-full" />
              </Transition>
            </div>
          </SlideIn>
          <SlideIn once={true} delay={0.35} style={"col-span-2 row-span-2"}>
            <div
              ref={secondBox}
              className="w-40 h-40 bg-white-trans rounded-lg overflow-hidden"
            >
              <img src={DP} alt="" className="w-full" />
            </div>
          </SlideIn>
          <SlideIn once={true} delay={0.4} style={"col-span-2 row-span-2"}>
            <div
              ref={thirdBox}
              className="w-40 h-40 bg-white-trans rounded-lg overflow-hidden"
            >
              <img src={DP2} alt="" className="w-full" />
            </div>
          </SlideIn>
          <SlideIn once={true} delay={0.45} style={"col-span-2 row-span-2"}>
            <div
              ref={fifthBox}
              className="w-40 h-40 bg-white-trans rounded-lg overflow-hidden"
            >
              <img src={DP3} alt="" className="w-full" />
            </div>
          </SlideIn>
        </div>
      </div>
    </m.div>
  );
};

export default About;
