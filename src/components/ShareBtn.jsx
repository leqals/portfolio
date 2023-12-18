import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaPinterest } from "react-icons/fa";
import { MdShare } from "react-icons/md";
import { motion as m } from "framer-motion";

const ShareBtn = ({ title }) => {
  const [showPopup, setShowPopup] = useState(false);
  const url = window.location.href;

  const popupVariants = {
    hidden: {
      opacity: 0,
      y: '100%',
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const copyUrl = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  const facebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank"
    );
  };

  const XShare = () => {
    window.open(`https://twitter.com/share?url=${url}&text=${title}`, "_blank");
  };

  const Pinterest = () => {
    window.open(
      `https://pinterest.com/pin/create/button/?url=&media=${url}`,
      "_blank"
    );
  };

  const LinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
      "_blank"
    );
  };

  return (
    <div className="w-full flex-between gap-8">
      <button
        className="flex-center flex-grow w-[12rem] h-40 rounded-full outline-none group bg-gradient border-white-trans border-[3px] transition duration-300 hover:border-[#A2F3F3]"
        onClick={() => copyUrl()}
      >
        <MdShare className="text-white-trans group-hover:text-[#A2F3F3] transition duration-300 text-5xl text-center whitespace-nowrap" />
      </button>

      {showPopup && (
        <m.div
          variants={popupVariants}
          initial="hidden"
          animate={showPopup ? "visible" : "hidden"}
          transition={{ duration: 0.2 }}
          exit='hidden'
          whileHover={{ scale: 1.1 }} // Animation on hover
          whileTap={{ scale: 0.9 }} // Animation on click
          className="absolute center-fixed whitespace-nowrap bg-gradient border-[3px] border-white-trans rounded-full p-6 text-base content "
        >
          <p>URL has been copied!</p>
        </m.div>
      )}

      <div className="flex-between w-full h-40 rounded-full p-6 outline-none bg-white-trans  gap-24">
        <button
          className="flex-center flex-grow w-40 h-full rounded-full outline-none group bg-gradient border-white-trans border-[3px] transition duration-300 hover:border-[#A2F3F3]"
          onClick={() => LinkedIn()}
        >
          <FaLinkedin className="text-white-trans group-hover:text-[#A2F3F3] transition duration-300 text-5xl text-center whitespace-nowrap" />
        </button>
        <button
          className="flex-center flex-grow w-40 h-full rounded-full outline-none group bg-gradient border-white-trans border-[3px] transition duration-300 hover:border-[#A2F3F3]"
          onClick={() => facebookShare()}
        >
          <FaFacebook className="text-white-trans group-hover:text-[#A2F3F3] transition duration-300 text-5xl text-center whitespace-nowrap" />
        </button>
        <button
          className="flex-center flex-grow w-40 h-full rounded-full outline-none group bg-gradient border-white-trans border-[3px] transition duration-300 hover:border-[#A2F3F3]"
          onClick={() => Pinterest()}
        >
          <FaPinterest className="text-white-trans group-hover:text-[#A2F3F3] transition duration-300 text-5xl text-center whitespace-nowrap" />
        </button>
        <button
          className="flex-center flex-grow w-40 h-full rounded-full outline-none group bg-gradient border-white-trans border-[3px] transition duration-300 hover:border-[#A2F3F3]"
          onClick={() => XShare()}
        >
          <BsTwitterX className="text-white-trans group-hover:text-[#A2F3F3] transition duration-300 text-5xl text-center whitespace-nowrap" />
        </button>
      </div>
    </div>
  );
};

export default ShareBtn;
