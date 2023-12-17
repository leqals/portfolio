import { useState, useEffect } from "react";
import { sigmoid } from "./utils";
import { motion } from "framer-motion";
import { projects as p } from "../util/constants";
import { useQuery, useQueryClient } from "react-query";

export const useScreenMidpoint = () => {
  const [screenMidpoint, setScreenMidpoint] = useState({ x: 0, y: 0 });

  const calculateScreenMidpoint = () => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    setScreenMidpoint({
      x: screenWidth / 2,
      y: screenHeight / 2,
    });
  };

  const updateScreenMidpoint = () => {
    const scrollTop = window.scrollY || window.pageYOffset;

    setScreenMidpoint((prevMidpoint) => ({
      ...prevMidpoint,
      y: scrollTop + window.innerHeight / 2,
    }));
  };

  useEffect(() => {
    calculateScreenMidpoint();
    window.addEventListener("scroll", updateScreenMidpoint);

    return () => {
      window.removeEventListener("scroll", updateScreenMidpoint);
    };
  }, []);

  return screenMidpoint;
};

export const useVisibleHeight = (ref) => {
  const [visibleHeight, setVisibleHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    setVisibleHeight(0);

    const handleScroll = () => {
      const elementTop = ref.current.getBoundingClientRect().top;
      const elementBottom = ref.current.getBoundingClientRect().bottom;
      const screenHeight = window.innerHeight;

      const visiblePixels =
        Math.min(screenHeight, elementBottom) - Math.max(0, elementTop);
      const visiblePercentage = visiblePixels / ref.current.offsetHeight;
      const siged = sigmoid(visiblePercentage) + 0.4;
      setVisibleHeight(siged);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return visibleHeight;
};

export const isInProximity = (ref) => {
  if (!ref.current) return false;

  const { left, right } = ref.current.getBoundingClientRect();
  const screenWidth = window.innerWidth;
  const screenMiddleX = screenWidth / 2 + 30;

  const elementMiddleX = (left + right) / 2;

  return elementMiddleX <= screenMiddleX;
};

export const shiftImages = (refs) => {
  if (!refs || refs.length < 2) return;

  const boxes = refs.map((ref) => ref.current);

  const images = boxes.map((box) => box.querySelector("img"));

  if (images.includes(null) || boxes.includes(null)) return;

  const positions = images.map((img) => img.getBoundingClientRect());

  images.forEach((img, index) => {
    const nextIndex = (index + 1) % images.length;
    const { x, y } = positions[nextIndex];

    img.style.transition = "transform 0.5s ease-in-out";
    img.style.transform = `translate(${x}px)`;

    img.addEventListener(
      "transitionend",
      () => {
        img.style.transition = "";
        img.style.transform = `translate(0, 0)`;
        boxes[nextIndex].appendChild(img);

        // Use Framer Motion to animate the entering image
        if (!img.hasAttribute("data-animated")) {
          img.setAttribute("data-animated", "true");
          motion(img).set({ x }).animate({ x: 0 });
        }
      },
      { once: true }
    );
  });
};


export const projectsData = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.setQueryData("projects", p);
  }, [queryClient]);

  const { data } = useQuery("projects", () => Promise.resolve(p), {
    initialData: p,
  });

  return data
}