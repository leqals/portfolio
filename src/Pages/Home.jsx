import React, { useEffect, useRef } from "react";
import {
  Layout,
  SectionTitle,
  Projects,
  Testimonials,
  About,
  Contact,
} from "../components";
import pattern from "../assets/pattern.png";
import DP from "../assets/DP.png";
import google from "../assets/experience/google.png";
import marvel from "../assets/experience/marvel.png";
import xboring from "../assets/experience/xboring.png";
import { useVisibleHeight } from "../util/helpers";
import { motion as m, inView, useAnimation } from "framer-motion";

const Home = () => {
  const projectContainer = useRef(null);
  const projectInView = inView(projectContainer, { once: false });
  const projectVisible = useVisibleHeight(projectContainer);
  const projectsControl = useAnimation();

  useEffect(() => {
    projectContainer.current && projectInView
      ? projectsControl.start({ scale: projectVisible })
      : null;
  }, [projectVisible, projectInView]);

  return (
    <>
      <Layout>
        <div className="relative flex-center flex-col gap-20 mt-32">
          <Hero />
          <m.div
            animate={projectsControl}
            ref={projectContainer}
            className="w-full flex-col flex-center"
            id="projects"
            transition={{ duration: 0.1 }}
          >
            <SectionTitle />
            <Projects />
          </m.div>
          <Experience />
          <Testimonials />
          <About />
          <Contact />
        </div>
      </Layout>
    </>
  );
};

const Hero = () => {
  return (
    <>
      <div className="relative w-full min-h-full hidden md:flex justify-center items-center">
        <div className="absolute left-24 bottom-24 w-48 h-48">
          <div className=" rounded-full w-40 h-40 border-white-trans border-4 bg-gradient" />
        </div>
        <div className="relative w-full flex flex-col">
          <div className="relative w-full flex-center flex-col mx-auto text-white-200 text-center text-[4rem] font-osw font-bold">
            <h1 className="top-0 left-0 absolute z-10">Software/</h1>
            <div className="relative overflow-hidden flex-center w-[35%] bg-white-trans rounded-3xl">
              <img src={pattern} alt="" className="absolute w-screen z-1" />
              <img src={DP} alt="" className="w-full h-full z-10" />
            </div>
            <h1 className="bottom-16 right-0 absolute z-20">/Designer</h1>
          </div>
        </div>
        <p className="font-rob content max-w-[17rem] absolute right-24 top-24">
          He is an original copycat🐱‍👤😻. Copies code from github like hell
          but weaves it together like magic🎩.
        </p>
      </div>
      .
    </>
  );
};

const Experience = () => {
  return (
    <div className="relative w-full flex flex-col gap-16">
      <p className="max-w-xs content text-white-100">
        Logos we both <br />
        know😂😅🤣
      </p>
      <div className="flex-between w-full overflow-x-scroll md:overflow-x-hidden">
        <img src={google} alt="google" />
        <img src={marvel} alt="google" />
        <img src={xboring} alt="google" />
      </div>
    </div>
  );
};

export default Home;
