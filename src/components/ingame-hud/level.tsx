"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Level() {
  const router = useRouter();
  const [isLoadingContinue, setIsLoadingContinue] = useState(false);

  const handleContinue = () => {
    if (isLoadingContinue) return;
    setIsLoadingContinue(true);
    router.push("/ingame-hud/game-start");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="
          absolute inset-0
          bg-[url('/level5.png')]
          bg-cover bg-center
        "
      />

      {/* Content Overlay */}
      <div className="relative flex flex-col items-center justify-center mt-14 text-center px-8">
        {/* Level 5 Title */}
        <h1 className="text-[#FFA200] font-[Cinzel] text-[45px] font-[600] mb-4 tracking-wider">
          LEVEL 5
        </h1>

        {/* Subtitle */}
        <h2 className="text-[24px] text-[#FFFFFF] font-[500] mb-16 font-[Work Sans]">
          An Eye for an Eye
        </h2>

        {/* Stage Section */}
        <div className="mb-8">
          <h3 className="text-[24px] font-[Cinzel] text-[#FAC76D] font-[600] mb-4 tracking-wide">
            STAGE 1
          </h3>
          <p className="text-[#FFFFFF] text-[21px] font-[400] font-[Work Sans] tracking-[2px]">
            Find and Investigate the ambushes
          </p>
        </div>

        {/* Tap to Begin Button */}
        <div className="w-1/2 flex">
          <button
            onClick={handleContinue}
            className=" flex items-center ml-30 gap-2 px-3 py-2 bg-transparent hover:opacity-80"
          >
            <Image
              src="/tap.svg"
              alt="tap"
              width={50}
              height={50}
              className="text-white stroke-3 font-bold"
            />
            <span className="text-[18px] text-white tracking-[2px] font-[Work Sans] font-bold">
              <i>Tap to begin</i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
