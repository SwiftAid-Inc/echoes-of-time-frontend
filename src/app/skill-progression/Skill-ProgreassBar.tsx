"use client";

import type { ProgressBarProps } from "@/types";
import { Star, Trophy } from "lucide-react";
import { motion } from "motion/react";
import { div } from "motion/react-client";

function SkillProgreassBar({
  currentPoint,
  totalPoint,
  level,
  starsCount,
  trophyCount,
}: ProgressBarProps) {
  const progressPercentage = Math.min((currentPoint / totalPoint) * 100, 100);
  return (
    <div className="py-2 h-[116px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex justify-between space-y-3 fixed top-0 z-40 w-full flex-col md:flex-row py-2 px-6 bg-[#00000066] items-center "
      >
        {/* progress point */}
        <div className="space-y-2 w-full md:w-fit">
          <div className="h-2 overflow-hidden w-full md:w-[168px] bg-[#0F070] border border-progressbar rounded-full">
            <div
              className="bg-progressbar h-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="text-sm text-progressbar">
            {currentPoint}/<span className="text-white">{totalPoint}</span> XP
          </div>
        </div>

        {/* current Level */}
        <div className="md:text-[16px] text-sm">
          <span>Current Level: </span>
          <span className="text-[#FFD896]"> LEVEL {level}</span>
        </div>

        {/* stats */}

        <div className="flex items-center gap-4 md:gap-20 md:text-[16px] text-sm">
          <div className="flex items-center md:gap-3 gap-2 ">
            <span className="text-[#FFD896]">
              {starsCount.toLocaleString()}
            </span>
            <Star className="fill-white w-5 h-5" />
          </div>
          <div className="flex items-center md:gap-3 gap-2 ">
            <span className="text-[#FFD896]">{trophyCount}</span>
            <Trophy className="fill-white w-5 h-5" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SkillProgreassBar;
