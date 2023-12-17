import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link as Li, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Sidebar from "./SideBar";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="hidden lg:flex-center relative w-full">
        <div className="w-full flex-between">
          <div className="text-base flex justify-around gap-6 py-6 px-10 border-4 rounded-full border-white-trans">
            <a
              href=""
              className="flex-center gap- transition duration-3002 text-white-100 font-rob font-normal hover:text-white-200 hover:font-medium"
            >
              <span className="">LinkedIn</span>
              <span className="">
                <FiArrowUpRight />{" "}
              </span>
            </a>
            <a
              href=""
              className="flex-center gap- transition duration-3002 text-white-100 font-rob font-normal hover:text-white-200 hover:font-medium"
            >
              <span className="">Instagram</span>
              <span className="">
                <FiArrowUpRight />{" "}
              </span>
            </a>
            <a
              href=""
              className="flex-center gap-2 transition duration-300 text-white-100 font-rob font-normal hover:text-white-200 hover:font-medium"
            >
              <span className="">Discord</span>
              <span className="">
                <FiArrowUpRight />{" "}
              </span>
            </a>
          </div>
          <Link to="/home">
            <div className="flex-center gap-3">
              <img src={Logo} alt="" className="w-10" />
              <span className="headline text-xl text-white-200">Dev.Silas</span>
            </div>
          </Link>
          <div className="text-base flex justify-around gap-6 py-6 px-10 border-4 rounded-full border-white-trans ">
            <Li
              spy={true}
              smooth={true}
              to="projects"
              className="flex-center gap-2 transition duration-300 text-white-100 font-rob font-normal hover:text-white-200 hover:font-medium"
            >
              <span className="">Projects</span>
            </Li>
            <Li
              spy={true}
              smooth={true}
              to="about"
              className="flex-center gap-2 transition duration-300 text-white-100 font-rob font-normal hover:text-white-200 hover:font-medium"
            >
              <span className="">About</span>
            </Li>
            <Li
              spy={true}
              smooth={true}
              to="./home/contact"
              className="flex-center gap-2 transition duration-300 text-white-100 font-rob font-normal hover:text-white-200 hover:font-medium"
            >
              <span className="">Contact</span>
            </Li>
          </div>
        </div>
      </div>

      <button onClick={() => toggleSidebar()} className="lg:hidden">
        Toggle Sidebar
      </button>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={() => toggleSidebar()} />
      {/* Rest of your content */}
    </>
  );
};

export default NavBar;
