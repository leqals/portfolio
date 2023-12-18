import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <div className="hidden md:flex-between w-full my-16">
        <button className="bg-gradient-btn rounded-full py-4 lg:px-28 px-5 border-white-trans text-center font-osw text-base border-4">All</button>
        <button className="bg-gradient-btn rounded-full py-4 lg:px-28 px-5 border-white-trans text-center font-osw text-base border-4">Design</button>
        <button className="bg-gradient-btn rounded-full py-4 lg:px-28 px-5 border-white-trans text-center font-osw text-base border-4">Software</button>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16 wrap">
        <Project span={"md:col-span-2"} id={0} />
        <Project span={"md:col-span-2"} id={1}/>
        <Project span={"md:col-span-1"} id={2} />
        <Project span={"md:col-span-2"} id={3} />
        <Project span={"md:col-span-1"} />
        <Project span={"md:col-span-3"} />
        <Project span={"md:col-span-1"} />
      </div>
    </>
  );
};

export default Projects;
