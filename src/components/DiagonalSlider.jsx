import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const DiagonalSlider = () => {
  const [scrollItems, setScrollItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    /* Add more scroll items as needed */
  ]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8 },
    });
  }, [currentItemIndex, controls]);

  const handleScroll = (e) => {
    e.preventDefault();

    console.log(e)

    const deltaY = e.deltaY;

    if (deltaY > 0 && currentItemIndex < scrollItems.length - 1) {
      controls.start({
        opacity: 0,
        scale: 0.5,
        x: '-100vw',
        y: '-100vh',
        transition: { duration: 0.8 },
      });
      setTimeout(() => {
        setCurrentItemIndex((prevIndex) => prevIndex + 1);
      }, 700);
    } else if (deltaY < 0 && currentItemIndex > 0) {
      controls.start({
        opacity: 0,
        scale: 0.5,
        x: '100vw',
        y: '100vh',
        transition: { duration: 0.8 },
      });
      setTimeout(() => {
        setCurrentItemIndex((prevIndex) => prevIndex - 1);
      }, 700);
    }
  };

  return (
    <div
      className="h-screen overflow-hidden"
      onScroll={(e) => {
        handleScroll(e);
      }}
    >
      <AnimatePresence mode='waitF'>
        {scrollItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center h-full"
            style={{ position: 'absolute', width: '100%', height: '100%', zIndex: index === currentItemIndex ? 1 : 0 }}
            initial={{ opacity: index === currentItemIndex ? 1 : 0, scale: index === currentItemIndex ? 1 : 0.5, x: 0, y: 0 }}
            animate={controls}
            exit={{ opacity: 0, scale: 0.5, x: index < currentItemIndex ? '-100vw' : '100vw', y: index < currentItemIndex ? '-100vh' : '100vh', transition: { duration: 0.8 } }}
          >
            <div className="w-screen h-screen flex items-center justify-center text-4xl font-bold">
              {item}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default DiagonalSlider;
