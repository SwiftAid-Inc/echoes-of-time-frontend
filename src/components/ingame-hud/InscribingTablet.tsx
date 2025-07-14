"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CircleSmall, X } from "lucide-react";

export default function InscribingTablet() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/ingame-hud/level-five");
  };

  return (
    <div className="bg-transparent absolute inset-0 backdrop-blur-sm h-screen">
      <div className=" flex items-center relative z-10 h-full  justify-center px-4">
        <div className="relative flex  flex-col w-full max-w-[973.50390625px]">
          <div className="w-full border-[0.1px] rounded-sm border-[#F9F9F9] p-8 bg-[#5E2D08CC] flex items-start space-x-6">
            <Image
              src="/inscribing.png"
              alt="Inscribing Tablet"
              width={205}
              height={205}
              className="flex-shrink-0"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-[#FFFFFF] font-[Cinzel] text-[28px] font-[700] tracking-wide">
                INSCRIBING TABLET
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
        <div className="absolute bottom-8 right-8 flex flex-col text-left">
          <p className="text-[#FFE4B5] font-[Work Sans] text-[16px] tracking-[1px] mb-4 text-left">
            Select one option below
          </p>
          <div className="flex flex-col space-y-4">
            <button className="w-[460px] border-[0.1px] p-3 tracking-[1px] bg-transparent border-[#656565] text-[#FFE4B5] text-[20px] font-[Work Sans] rounded-lg text-left pl-6 hover:bg-white/10">
              Decode text
            </button>
            <button className="w-[460px] border-[0.1px] p-3 tracking-[1px] bg-transparent border-[#656565] text-[#FFE4B5] text-[20px] font-[Work Sans] rounded-lg text-left pl-6 hover:bg-white/10">
              Keep in inventory
            </button>
            <button className="w-[460px] border-[0.1px] p-3 tracking-[1px] bg-transparent border-[#656565] text-[#FFE4B5] text-[20px] font-[Work Sans] rounded-lg text-left pl-6 hover:bg-white/10">
              Come back later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
