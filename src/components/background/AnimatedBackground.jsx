//AnimatedBackground.jsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = ({
  children,
  gradientFrom = 'indigo-500',
  gradientTo = 'purple-700',
  circles = [
    {
      size: 'w-96 h-96',
      color: 'bg-pink-400',
      animation: {
        x: [0, 300, -200, 100, -50, 200, 0],
        y: [0, -200, 300, -100, 200, -150, 0],
        scale: [1, 1.2, 0.9, 1.1, 0.8, 1.2, 1],
      },
      duration: 80,
    },
    {
      size: 'w-64 h-64',
      color: 'bg-yellow-300',
      animation: {
        x: [100, -200, 300, -100, 200, -300, 100],
        y: [50, 200, -100, 300, -200, 100, 50],
        scale: [1, 0.8, 1.3, 0.9, 1.2, 0.7, 1],
      },
      duration: 80,
    },
    {
      size: 'w-80 h-80',
      color: 'bg-blue-400',
      animation: {
        x: [-100, 200, -300, 150, -250, 100, -100],
        y: [-50, -250, 50, 200, -150, 300, -50],
        scale: [1, 1.1, 0.8, 1.2, 0.9, 1.3, 1],
      },
      duration: 80,
    },
  ],
}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background container */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${gradientFrom} to-${gradientTo}`}>
        {/* Animated circles */}
        {circles.map((circle, index) => (
          <motion.div
            key={index}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${circle.size} rounded-full ${circle.color} opacity-30 blur-xl`}
            animate={{
              x: circle.animation.x,
              y: circle.animation.y,
              scale: circle.animation.scale,
            }}
            transition={{
              duration: circle.duration,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;