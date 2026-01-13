import React from 'react';
import { motion } from 'framer-motion';

const SolarEnergyFlow = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
      <svg className="w-full h-full">
        {/* Defining the glowing energy gradient */}
        <defs>
          <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Energy Beam paths from right (panels) to left (text) */}
        {[1, 2, 3, 4].map((i) => (
          <motion.path
            key={i}
            d={`M ${800 + i * 50} ${200 + i * 100} Q 600 ${150 + i * 50}, 100 ${300 + i * 20}`}
            stroke="url(#energyGradient)"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1], 
              opacity: [0, 0.8, 0],
              strokeDashoffset: [0, -100] 
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default SolarEnergyFlow;