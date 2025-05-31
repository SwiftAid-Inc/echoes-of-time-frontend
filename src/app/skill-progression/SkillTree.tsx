"use client";

import { motion } from "motion/react";

import { Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  visible: (i: number) => ({
    transition: {
      delayChildren: i * 0.5,
      staggerChildren: 0.3,
    },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.1,
    },
  }),
};

const lineVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: (i: number) => ({
    opacity: 1,
    height: "1.5rem",
    transition: {
      delay: i * 0.2,
      duration: 0.3,
    },
  }),
};

export default function SkillTree() {
  const levelGroups = [3, 5, 4];

  return (
    <div className="flex gap-4 items-start relative">
      {levelGroups.map((levelCount, groupIndex) => (
        <motion.div
          key={groupIndex}
          className="flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          custom={groupIndex}
        >
          {Array.from({ length: levelCount }).map((_, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center"
              variants={itemVariants}
              custom={index}
            >
              <motion.div
                className="relative w-[74px] h-[74px] rounded-full z-10 shadow-lg ring-2 ring-[#895200]
                after:content-[''] after:absolute after:top-1/2 after:left-1/2 
                after:-translate-x-1/2 after:-translate-y-1/2 
                after:rounded-full after:w-[65px] after:h-[65px] after:bg-[#895200]"
              />
              {index < levelCount - 1 && (
                <motion.div
                  className="w-[2px] h-6 bg-progressbar opacity-20"
                  variants={lineVariants}
                  custom={index}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
