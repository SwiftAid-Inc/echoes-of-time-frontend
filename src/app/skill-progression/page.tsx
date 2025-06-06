"use client";

import { motion } from "motion/react";
import SkillProgreassBar from "@/app/skill-progression/Skill-ProgreassBar";
import SkillTree from "@/app/skill-progression/SkillTree";

const variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  // initial={{ opacity: 0, y: -20 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 0.5, ease: "easeOut" }}
};

function page() {
  return (
    <div className="bg-[#100a00] h-screen ">
      <SkillProgreassBar
        currentPoint={2000}
        totalPoint={3000}
        level={5}
        starsCount={20000}
        trophyCount={200}
      />

      <main className="flex flex-col md:flex-row md:items-start space-x-2  items-center justify-between w-[calc(100%-50px)] mx-auto mt-10 space-y-10">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="md:space-y-8 font-medium md:flex-col justify-center flex flex-wrap gap-y-2 gap-x-6"
        >
          <div className="text-[#FFFFFF] text-[17px]">
            <span>HISTORICAL</span>
          </div>
          <div className="text-gray-400 text-[17px] hover:text-white cursor-pointer">
            <span> DIPLOMACY</span>
          </div>
          <div className="text-gray-400 text-[17px] hover:text-white cursor-pointer">
            <span>PROBLEM SOLVING</span>
          </div>
        </motion.div>

        <SkillTree />

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className=" rounded-lg p-4 max-w-xs"
        >
          <h3 className="text-white font-semibold mb-4 border-b pb-1 border-progressbar border-opacity-20">
            Historical
          </h3>
          <p className="text-gray-300 text-sm">
            Unlock hidden stories, dialogue branches to be used in completing
            the mission.
          </p>
        </motion.div>
      </main>
    </div>
  );
}

export default page;
