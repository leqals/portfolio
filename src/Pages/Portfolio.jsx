import React, { useEffect, useRef } from "react";
import { Layout, SectionTitle, ShareBtn, SlideIn, Stack } from "../components";
import { useParams, Link, useLocation } from "react-router-dom";
import pattern from "../assets/pattern.png";
import logo from "../assets/logo.png";
import NativeVisit from "../assets/hand-drawn-african-pattern.jpg";
import NativeSource from "../assets/traditional-patterns.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import Testimonial from "../components/Testimonial";
import { about, projects as p } from "../util/constants";
import { motion as m, useAnimation, useInView } from "framer-motion";
import { useVisibleHeight, projectsData } from "../util/helpers";

const Portfolio = () => {
  const { id } = useParams();
  const data = projectsData();
  const project = data[id];

  const {
    title,
    thumbnail,
    logo,
    color,
    liveSite,
    sourceCode,
    meta,
    features,
    challenges,
    overview,
    timeline,
    result,
    stack,
  } = project || {};

  return (
    <Layout>
      <div className="flex-center flex-col w-full gap-24">
        <Header
          timeline={timeline}
          title={title}
          thumbnail={thumbnail}
          meta={meta}
          color={color}
          logo={logo}
        />
        <SlideIn once={true} style={"w-full"}>
          <Stack styling={"screen-px"} stack={stack} />
        </SlideIn>
        <ProjectDetails
          challenges={challenges}
          overview={overview}
          liveSite={liveSite}
          sourceCode={sourceCode}
        />
        <div className="flex-center w-full gap-16 flex-col">
          <SectionTitle
            title="Features"
            description="What was so special about this?, you may ask.🧐🤖👽"
          />
          <div className="flex flex-col w-full">
            {features.map((feature, i) => (
              <Feature key={i + "devsilas"} {...feature} i={i} />
            ))}
          </div>
        </div>
        <div className="flex-center w-full gap-16 flex-col">
          <SectionTitle
            title="Result"
            description="How far did all this sacrifies get us to?"
            direction="flex-row-reverse"
          />
          <div className="w-full h-fit flex-between items-start">
            <div className="w-full h-full flex-between items-start flex-col gap-20">
              <p className="content text-white-100 max-w-lg">
                {result.conclusion}
              </p>
              <div className="w-5/6 h-60 overflow-hidden rounded-2xl group hover:scale-[1.03] hover:overflow-visible hover:z-30 transition duration-300">
                <img
                  src={result.proof}
                  alt=""
                  className="w-full group-hover:scale-110 transition duration-200 ease-in"
                />
              </div>
            </div>

            <Testimonial {...result.testimonial} />
          </div>
        </div>
        <ShareBtn />
        <Link
          to="/home#contact"
          type="submit"
          className="text-lg font-medium text-white-100 bg-gradient w-full p-6 text-center cursor-pointer rounded-full border-2 border-white-trans hover:border-white-200 hover:text-white-200 transition duration-300"
        >
          Contact
        </Link>
      </div>
    </Layout>
  );
};

const Header = ({ title, meta, thumbnail, timeline, color, logo }) => {
  const cover = useRef(null);

  useEffect(() => {
    if (!cover.current) return false;
    cover.current.style.backgroundColor = color;
  }, []);

  return (
    <div className="w-full flex flex-col gap-16 mt-20">
      <div className="w-full flex-between flex-col lg:flex-row items-start gap-14">
        <SlideIn delay={0.9} once={true}>
          <h1 className="font-osw text-[4.5rem] -mt-5 font-semibold text-left text-white-200 leading-snug">
            {title}
          </h1>
        </SlideIn>
        <div className="flex-start flex-col gap-5 lg:gap-10 w-full">
          <SlideIn once={true} delay={0.2} style={"flex-start flex-col gap-5 lg:gap-10 w-full"}>
            {meta.map(({ title, value }, i) => (
              <Meta key={i + "_devsilas"} title={title} value={value} />
            ))}
          </SlideIn>
        </div>
      </div>

      <m.div
        variants={{
          initial: {
            scale: 2,
            y: "-30vh",
          },
          final: {
            scale: 1,
            y: 0,
          },
        }}
        initial={"initial"}
        animate={"final"}
        transition={{
          duration: 3,
          type: "spring",
          delay: 1,
        }}
        className={`group relative overflow-hidden flex-center w-full h-[27rem] bg-white-trans rounded-2xl`}
      >
        <img src={thumbnail} alt="" className="w-full z-10" />
        <div
          className="w-full h-full absolute top-0 left-0 bottom-0 flex-center group-hover group-hover:scale-y-0 ease-out origin-top z-20 transition duration-500"
          ref={cover}
        >
          <img
            src={logo}
            alt=""
            className="w-20 transition duration-100 group-hover:opacity-0 "
          />
        </div>
      </m.div>

      <SlideIn style={"w-full"} once={true}>
        <h2 className="w-full font-medium font-osw text-[5rem] lg:text-[10rem] text-center -mt-14 text-white-trans">
          {timeline}
        </h2>
      </SlideIn>
    </div>
  );
};

const Meta = ({ title = "Major Role", value = "Software Engineer" }) => {
  return (
    <div className="w-full flex-center gap-1">
      <div className="py-3 px-14 flex-center text-center border-white-trans border-4 rounded-full whitespace-nowrap capitalize  font-rob text-white-100 text-base ">
        {title}
      </div>
      <div className="rounded-full min-w-[1rem] w-4 h-4 bg-white-100" />
      <div className="w-full py-3 px-14 flex-center text-center border-white-trans border-4 rounded-full  capitalize font-rob text-white-200 text-lg font-semibold">
        {value}
      </div>
    </div>
  );
};

const ProjectDetails = ({ challenges, overview, liveSite, sourceCode }) => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  let height = 0;

  const projectDetailContainer = useRef(null);
  const projectDetailInView = useInView(projectDetailContainer, {
    once: false,
  });
  const projectDetailVisible = useVisibleHeight(projectDetailContainer);
  const projectDetailsControl = useAnimation();

  useEffect(() => {
    projectDetailContainer.current && projectDetailInView
      ? projectDetailsControl.start({ scale: projectDetailVisible - 0.2 })
      : null;
  }, [projectDetailVisible, projectDetailInView]);

  useEffect(() => {
    const setHeight = () => {
      if (containerRef1.current && containerRef2.current) {
        const height = containerRef1.current.clientHeight;
        containerRef2.current.style.height = `${height}px`;
      }
    };

    // Initial setup
    setHeight();

    // Listen for window resize to dynamically update the height
    window.addEventListener("resize", setHeight);

    return () => {
      window.removeEventListener("resize", setHeight);
    };
  }, []);

  return (
    <m.div
      animate={projectDetailsControl}
      ref={projectDetailContainer}
      transition={{ duration: 0.1 }}
      className="flex-center w-full gap-10 flex-col "
    >
      <div className="flex-between items-start flex-col md:flex-row gap-10 w-full ">
        <SlideIn once={false} style="w-full md:w-3/6">
          <div
            className="flex-between items-start w-full flex-col gap-8 content rounded-3xl bg-white-trans p-10"
            ref={containerRef1}
          >
            <h4 className="font-medium font-osw text-white-trans text-left font-base text-lg capitalize">
              Project Overview
            </h4>
            <article className="font-rob text-white-100 flex flex-col gap-3 w-full">
              <p>{overview}</p>
            </article>
          </div>
        </SlideIn>

        <div
          className="flex-between flex-1 flex-col gap-8 w-full flex-grow md:w-2/6"
          ref={containerRef2}
        >
          <div
            className={`flex-between w-full h-24 gap-8 rounded-full bg-gradient p-4 ${
              liveSite ? "" : "opacity-40"
            }`}
          >
            <div className="w-40 h-full overflow-hidden rounded-full">
              <img src={NativeVisit} alt="" className="w-full" />
            </div>
            <a
              href={liveSite}
              className={`flex-center gap-1 transition duration-3002 text-white-100 font-rob font-normal hover:text-white-200 hover:font-medium -translate-x-10  sm:translate-x-0 xl:-translate-x-10  ${
                liveSite ? "" : "pointer-events-none"
              }`}
            >
              <span className="whitespace-nowrap">Visit Site</span>
              <span className="text-2xl">
                <FiArrowUpRight />{" "}
              </span>
            </a>
          </div>

          <div className="flex-between flex-row-reverse w-full h-24 gap-8 rounded-full bg-gradient p-4">
            <div
              className={`w-40 h-full overflow-hidden rounded-full ${
                sourceCode ? "opacity-100" : "opacity-40"
              }`}
            >
              <img src={NativeSource} alt="" className="w-full" />
            </div>
            <a
              href={sourceCode}
              className={`flex-center  gap-1 transition duration-3002 text-white-100 font-rob font-normal hover:text-white-200 hover:font-medium translate-x-10  sm:translate-x-0 xl:translate-x-5  pointer-events-none ${
                sourceCode ? "" : "pointer-events-none"
              }`}
            >
              <span className="whitespace-nowrap">Source Code</span>
              <span className="text-2xl">
                <FiArrowUpRight />{" "}
              </span>
            </a>
          </div>
        </div>
      </div>

      <SlideIn once={false} delay={0.3} style="w-full">
        <div className="flex-between items-start w-full flex-col gap-8 content rounded-3xl bg-white-trans py-14 px-20">
          <h4 className="font-medium font-osw text-white-trans text-left font-base text-lg capitalize">
            Project Challenges
          </h4>
          <article className="content text-white-100 flex flex-col gap-6 w-full">
            <p>{challenges}</p>
          </article>
        </div>
      </SlideIn>
    </m.div>
  );
};

const Feature = ({ title, description, thumbnail, i }) => {
  return (
    <SlideIn delay={i * 0.2}>
      <div className="relative w-full flex-center flex-col gap-10 group">
        <div className="absolute hidden w-screen h-[4px] bg-white-trans -left-20 top-0 group-first:block" />
        <div className="w-full flex-between items-start my-10">
          <h3 className="text-2xl text-white-200 font-osw font-medium">
            {title}
          </h3>
          <div className="w-64 h-32 overflow-hidden rounded-2xl group group-hover:scale-[2] group-hover:overflow-visible group-hover:z-30 transition duration-300" >
            <img
              src={thumbnail}
              alt=""
              className="w-full group-hover:scale-110 transition duration-200 ease-in"
            />
          </div>
          <p className="content text-white-100 max-w-sm">{description}</p>
        </div>
        <div className="absolute w-screen h-[4px] bg-white-trans -left-20 bottom-0 grou" />
      </div>
    </SlideIn>
  );
};

export default Portfolio;
