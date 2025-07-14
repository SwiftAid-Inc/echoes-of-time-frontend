"use client";

import { useRouter } from "next/navigation";
import { CircleSmall, MoreHorizontal } from "lucide-react";
import Image from "next/image";

export default function Decision() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/next-page");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="
                    absolute inset-0
                    bg-[url('/decision.png')]
                    bg-cover bg-center 
                "
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
      </div>
      <div className=" z-10 ">
        {/* FINAL STAGE overlay (absolutely positioned) */}
        <div className="absolute  inset-0 flex flex-col items-center justify-between max-h-[660px] pointer-events-none ">
          <div className="text-center mt-30 ">
            <p className="text-[17px] font-[Cinzel] text-[#FFFFFF] mb-3 tracking-[2px]">
              NEW LOCATION CREATED
            </p>
            <h1 className="text-[50px] font-[500] font-[Cinzel] text-[#FFDFA7] mb-3 tracking-[2px]">
              THE MOUNTAIN OF GIZA!
            </h1>

            <div className="flex items-center justify-center w-full space-x-4">
              {/* Left line */}
              <hr className="flex-1 h-px bg-[#FFFDF9] border-0" />

              {/* Center text */}
              <span className="font-[Cinzel] text-[21px] text-[#FFFDF9] whitespace-nowrap tracking-[2px]">
                FIND THE GUARDMAN
              </span>

              {/* Right line */}
              <hr className="flex-1 h-px bg-[#FFFDF9] border-0" />
            </div>
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
    </div>
  );
}
