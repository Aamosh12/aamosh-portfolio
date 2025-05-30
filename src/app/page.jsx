"use client";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import HeroSection from "@/components/Hero";
import NavSection from "@/components/Navbar/NavSection";
import React, { useState } from "react";

const Home = () => {
  const [activeNavItem, setActiveNavItem] = useState(0);

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  const words = [
    {
      text: "Hey,",
    },
    {
      text: "I'm",
    },
    {
      text: "Aamosh",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Maharjan.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div>
      <AnimatedBackground gradientFrom="blue-600" gradientTo="purple-800">
        <div className="flex flex-col min-h-screen">
          {/* Navigation Section */}
          <div className="pt-1">
            <NavSection
              items={["Home", "About", "Projects", "Contact"]}
              activeItem={activeNavItem}
              onItemClick={handleNavItemClick}
              textColor="text-gray-800"
            />
          </div>

          {/* Hero Section */}
          <HeroSection words={words} />
        </div>
      </AnimatedBackground>
      <div>
      </div>
    </div>
  );
};

export default Home;
