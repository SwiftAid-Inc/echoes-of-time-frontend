"use client";

import { useRouter } from "next/navigation";
import { CircleSmall, MoreHorizontal } from "lucide-react";
import Image from "next/image";

interface GameCompleteProps {
  XP: number;
}

export default function GameComplete({ XP = 500 }: GameCompleteProps) {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/next-page");
  };

  return (
      <div className="relative z-10">
        {/* FINAL STAGE overlay (absolutely positioned) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-[220px]">
          <div className="text-center">
            <h1 className="text-[53px] font-[Cinzel] text-[#FBCC4BCC] mb-3">
              MISSION COMPLETED!
            </h1>

            <div className="flex items-center justify-center w-full space-x-4">
              {/* Left line */}
              <hr className="flex-1 h-px bg-[#FFFDF9] border-0" />

              {/* Center text */}
              <span className="font-[Cinzel] text-[21px] text-[#FFFDF9] whitespace-nowrap">
                AN EYE FOR AN EYE
              </span>

              {/* Right line */}
              <hr className="flex-1 h-px bg-[#FFFDF9] border-0" />
            </div>

            <h1 className="text-[53px] font-[Cinzel] text-[#FBCC4BCC] mb-3">
              {XP}
            </h1>
          </div>
        </div>
      </div>
  );
}
