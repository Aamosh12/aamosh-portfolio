"use client"
import AnimatedBackground from '@/components/background/AnimatedBackground';
import NavSection from '@/components/Navbar/NavSection';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { TextAnimate } from '@/components/magicui/text-animate';

const Home = () => {
  const [activeNavItem, setActiveNavItem] = useState(0);
  
  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  const words = [
    {
      text: "Hey,"
    },
    {
      text: "I'm"
    }, 
    {
      text: "Aamosh",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Maharjan",
      className: "text-blue-500 dark:text-blue-500",
    }
  ]
  return (
    <AnimatedBackground
      gradientFrom="blue-600"
      gradientTo="purple-800"
    >
      <div className="flex flex-col min-h-screen">
        {/* Navigation Section */}
        <div className="pt-1">
          <NavSection
            items={['Home', 'About', 'Projects', 'Contact']}
            activeItem={activeNavItem}
            onItemClick={handleNavItemClick}
            textColor="text-gray-800"
          />
        </div>
        
        {/* Hero Section */}
        <div className="flex items-center justify-center flex-grow">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4 py-12 max-w-4xl mx-auto"
          >
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center gap-2">
              <TypewriterEffectSmooth words={words} /> 
            </div>

            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
            
              <TextAnimate animation="blurInUp" by='character' >
              Developer and QA enthusiast crafting seamless digital experiences. 
              </TextAnimate>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedBackground>
  );
};

export default Home;