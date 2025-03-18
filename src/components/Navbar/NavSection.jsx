import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";

const NavSection = ({
  items = ["Home", "About", "Services", "Contact"],
  activeItem = 0,
  onItemClick = () => {},
  bgColor = "bg-black",
  textColor = "text-gray-800", 
  hoverColor = "hover:text-indigo-600",
  activeColor = "text-indigo-600",
}) => {
  return (
    <div className="flex items-center justify-between w-full max-w-6xl mx-auto py-4 ">
          <motion.div className="flex items-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}>
        <Image src="/aamosh.png" alt="aamosh" width={100} height={50} className="mr-4 object-contain"
        />
      </motion.div>
      
      <motion.div
        className="bg-white/10 backdrop-blur-md rounded-full shadow-lg px-1 py-1"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav>
          <ul className="flex space-x-2">
            {items.map((item, index) => (
              <motion.li key={index} className="relative">
                <motion.button
                  className={`relative px-6 py-2 rounded-full transition-all duration-300 ${
                    index === activeItem ? activeColor : textColor
                  } ${hoverColor} font-medium text-sm`}
                  onClick={() => onItemClick(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  {index === activeItem && (
                    <motion.div
                      className="absolute inset-0 bg-indigo-100 rounded-full -z-10"
                      layoutId="activeBackground"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </motion.button>
              </motion.li>
            ))}
          </ul>
        </nav>
          </motion.div>
          <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}>
              <Button>Download My CV</Button>
          </motion.div>
    </div>
  );
};

export default NavSection;