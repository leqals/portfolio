import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const navItems = ["Home", "About", "Services", "Contact"]; // Your navigation items

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.5 }}
          className="fixed top-0 right-0 h-full w-64 bg-gray-900 text-white p-4"
        >
          <button onClick={closeSidebar} className="text-white">
            Close
          </button>
          <ul>
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: index * 0.1,
                }}
                className="py-2"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Sidebar;
