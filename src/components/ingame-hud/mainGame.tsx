"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CircleSmall, X } from "lucide-react";

export default function MainGame() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [showFind, setShowFind] = useState(false);
  const [isLoadingContinue, setIsLoadingContinue] = useState(false);

  const handleContinue = () => {
    if (isLoadingContinue) return;
    setIsLoadingContinue(true);
    router.push("/ingame-hud/level-five");
  };

  return (
    <div className=" h-screen flex items-center justify-center px-4 absolute inset-0 backdrop-blur-sm">
      <div className="relative flex flex-col w-full max-w-[855.45703125px] min-h-[263.83203125px  ] z-10">
        {!showFind && (
          <>
            <div className="w-full border-[0.5px] border-[#FFA200] relative z-10 p-4 bg-[#572B0866]/60 ">
              <h1 className="text-[#FAB677] font-[Cinzel] text-[32px] font-[700] text-center tracking-wide">
                TIMELINE BRANCHED!
              </h1>
              <p className="mt-2 text-center text-[18px] font-[500] text-[#FFF9EF] font-[Work Sans]">
                You requested for the guardian
              </p>
              <div className="my-6 border-t border-white/40" />

              <p className="text-center font-[500] text-[19.66px] text-[#FFFFFF] font-[Work Sans] tracking-wide">
                NEW OBJECTIVE:
              </p>

              <h2
                className="mt-2 text-[18px] font-[Cinzel] font-[500] text-white text-center cursor-pointer hover:text-amber-300"
                onClick={() => setShowFind(true)}
              >
                FIND THE GUARDMAN
              </h2>
            </div>

            <div className="flex justify-end mt-2">
              <button
                onClick={handleContinue}
                disabled={isLoadingContinue}
                className="
                    flex items-center 
                    font-[Work Sans] hover:text-amber-500 
                    text-[#F6F0DF] text-[21px] 
                    px-4 py-2 rounded-md 
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
              >
                {isLoadingContinue ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-t-white border-white border-opacity-60 rounded-full animate-spin"></div>
                    <span>Loading...</span>
                  </div>
                ) : (
                  <>
                    <span>Continue</span>
                    <Image
                      src="/play.png"
                      alt="play"
                      className="ml-1 text-[#A55E1D]"
                      width={20}
                      height={20}
                    />
                  </>
                )}
              </button>
            </div>
          </>
        )}

        {showFind && (
          <>
            {/* Close button sits *outside* the inner card, at the top-right */}
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setShowFind(false)}
                className="flex items-center gap-1 text-[#F6F0DF] text-[12px] font-[Work Sans] hover:text-gray-300"
                aria-label="Close"
              >
                <X className="text-[#F6F0DF] text-[12px] font-[Work Sans]" />{" "}
                Close
              </button>
            </div>

            {/* Inner card with 3-column layout */}
            <div className="w-full border-[0.5px] border-amber-500/80 p-14 bg-amber-900/20">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: '"Touch"', desc: "to interact" },
                  { label: '"Swipe"', desc: "to move" },
                  { label: '"Tap"', desc: "to view glowing objects" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-start h-full text-center"
                  >
                    <Image
                      src="/touch.png"
                      alt="touch"
                      className="text-[#A55E1D]"
                      width={20}
                      height={20}
                    />
                    <p className="text-[#FFF9EF] font-[Inter] text-[17px] mt-4 leading-snug">
                      <i>
                        {item.label}
                        <br />
                        <span className="text-light">{item.desc}</span>
                      </i>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
