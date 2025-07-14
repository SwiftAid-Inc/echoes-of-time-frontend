"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CircleSmall, X } from "lucide-react";

export default function GuardianTemple() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/ingame-hud/level-five");
  };

  return (
    <div className="h-screen w-full relative bg-[#3519004D]/30 ">
      <div className="flex flex-col items-center h-full gap-15 justify-center px-2 absolute inset-0 backdrop-blur-sm">
        <div className="relative flex flex-col w-full max-w-[918px]">
          <div className="w-full border-[0.1px] rounded-sm border-amber-500/80 p-4 bg-[#5E2D08CC]/80 flex items-start space-x-6">
            <div className="flex flex-col justify-center">
              <h1 className="text-[#FFFFFF] font-[Cinzel] text-[28px]   font-[700] tracking-wide">
                GUARDIAN OF THE TEMPLE
              </h1>
              <p className="mt-2 text-[21px] font-[400] text-[#FFDEC5] font-[Work Sans] tracking-[1px]">
                It is important that we keep our foothold in Siwa, or else they
                will have our heads. I love you with all of my ka; however, no
                amount of offerings or prayer can replace the will of a warrior.
                Through battle we speak to the gods.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end ">
          <div className="flex min-w-[460px] gap-[16px] flex-col">
            {/* Progress Bar Container */}
            <div className="w-full max-w-xs bg-transparent rounded-full h-2.5 border border-[#FFA200] mb-2">
              <div className="bg-[#FFA200] h-2.5 rounded-full w-[35%]"></div>
            </div>

            <div className="flex w-full flex-col space-y-4">
              <button className="border-[0.1px] p-1 tracking-[1px] bg-transparent border-[#656565] text-[#FFA200] text-[21px] font-[400] font-[DM Sans] rounded-lg text-left px-6 hover:bg-white/10">
                Then I'll tell you you've nothing <br />
                <span className="text-[#EBDEBC]"> inside your skull. </span>
              </button>
              <button className="border-[0.1px] p-1 tracking-[1px] bg-transparent border-[#656565] text-[#FFA200] text-[21px] font-[DM Sans] rounded-lg text-left px-6 hover:bg-white/10">
                Then I'll make a fine goblet from out <br />
                <span className="text-[#EBDEBC]"> of your skull. </span>
              </button>
              <button className="border-[0.1px] p-1 tracking-[1px] bg-transparent border-[#656565] text-[#EBDEBC] text-[21px] font-[DM Sans] rounded-lg text-left px-6 hover:bg-white/10">
                Say that again.
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[300px] md:w-[500px] lg:w-[700px]">
        <Image
          src="/guardian.svg"
          alt="man face"
          width={700}
          height={700}
          className="object-contain absolute left-0 bottom-0"
        />
      </div>
    </div>
  );
}
