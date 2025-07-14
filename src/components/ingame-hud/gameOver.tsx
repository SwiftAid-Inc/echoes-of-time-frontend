"use client";

import { useRouter } from "next/navigation";
import { CircleSmall, MoreHorizontal } from "lucide-react";
import Image from "next/image";

export default function GameOver() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/next-page");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className=" bg-gradient-to-b from-[#511C00]/50 via-[#1F1301E5]/50 to-[#511C00]/50 h-screen"
      />

      <div className="">
        {/* FINAL STAGE overlay (absolutely positioned) */}
        <div className="absolute inset-0  flex items-center justify-center ">
          <div className="flex flex-col  lg:w-4/6 items-center text-center space-y-4">
            <h1 className="text-[51px] font-[Cinzel] font-[600] text-[#FBCC4BCC]">
              GAME OVER!
            </h1>
            <div className="w-full bg-gradient-to-r from-white/10 via-white to-white/10 h-[2px]"></div>

            <div className="flex flex-col items-center space-y-3">
              <button
                onClick={handleContinue}
                className="flex items-center bg-transparent px-4 py-2 hover:cursor-pointer"
              >
                <span className="inline-flex w-[31px] h-[31px]  items-center justify-center rounded-full bg-white text-black text-lg font-bold mr-2">
                  A
                </span>
                <span className="text-[16px] font-[500] font-[Cinzel] text-white tracking-[2px]">
                  Reload Last Save
                </span>
              </button>

              <button
                onClick={handleContinue}
                className="flex items-center bg-transparent px-4 py-2 hover:cursor-pointer"
              >
                <span className="inline-flex w-[31px] h-[31px] items-center justify-center rounded-full bg-white text-black text-lg font-bold mr-2">
                  B
                </span>
                <span className="text-[16px] font-[500] font-[Cinzel] text-white tracking-[2px]">
                  Go To Main Menu
                </span>
              </button>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}
