import React, { useEffect, useRef } from "react";
import pattern from "../assets/pattern.png";
import { Link } from "react-router-dom";
import { motion as m, useAnimation } from "framer-motion";
import { projectsData } from "../util/helpers";

const Project = ({ id = 0, span }) => {
  const data = projectsData();

  const [clicked, setClicked] = React.useState(false);
  const cover = useRef(null);

  let project = null;
  let color;
  let logo;
  let title;
  let thumbnail;

  if (data) {
    if (data[id]) {
      project = data[id];
      color = project.color;
      logo = project.logo;
      title = project.title;
      thumbnail = project.thumbnail;
    }
  }

  const controller = useAnimation();

  useEffect(() => {
    if (!cover.current) return false;
    cover.current.style.backgroundColor = color;
  }, []);

  useEffect(() => {
    clicked && controller.start({ scale: 1.85, y: "-25vh" });
  }, [clicked]);

  return (
    <Link
      to={{ pathname: `project/${id}`, state: { id } }}
      className={`w-full flex justify-start flex-col transition duration-200  h-96 gap-4 ${span} cursor-pointer ${
        clicked
          ? "z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          : "relative"
      }`}
      onClick={() => setClicked(true)}
    >
      <m.div
        animate={controller}
        transition={{
          duration: 3,
          type: "spring",
          delay: 1,
        }}
        className={`group relative overflow-hidden flex-center w-full h-96 bg-white-trans rounded-2xl`}
      >
        <img
          src={pattern}
          alt=""
          className="absolute w-screen h-screen z-1 transition duration-300 opacity-0 group-hover:opacity-100"
        />
        <img src={thumbnail} alt="" className="w-full z-10" />
        <div
          className="w-full h-full absolute top-0 left-0 bottom-0 flex-center group-hover group-hover:scale-y-0 ease-out origin-top z-20 transition duration-300"
          ref={cover}
        >
          <img
            src={logo}
            alt=""
            className="w-20 transition duration-300 group-hover:opacity-0 "
          />
        </div>
      </m.div>
      <h4 className="text-2xl font-osw text-white-100">{title}</h4>
    </Link>
  );
};

export default Project;
