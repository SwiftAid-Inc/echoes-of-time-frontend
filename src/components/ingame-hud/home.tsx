'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TempleOfGazia() {
  const router = useRouter();
  const [isLoadingSkip, setIsLoadingSkip] = useState(false);
  const [isLoadingContinue, setIsLoadingContinue] = useState(false);

  const handleContinue = () => {
    if (isLoadingContinue) return;
    setIsLoadingContinue(true);
    router.push('/ingame-hud/main-game');
  };

  const handleSkip = () => {
    if (isLoadingSkip) return;
    setIsLoadingSkip(true);
    router.push('/');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="
          absolute inset-0 
          bg-[url('/pregame.png')] 
          bg-cover bg-center
        "
      ></div>

      {/* Gradient overlay */}
      <div
        className="
          absolute inset-0 
          w-full h-full 
          bg-gradient-to-r 
            from-[#1D1001E5] 
            via-[#1D1001E5] via-[40%] 
            to-[#1D100105] 
          pointer-events-none
        "
      ></div>

      {/* Radial vignette */}
      <div
        className="
          absolute inset-0 
          bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_50%,_rgba(0,0,0,0.5)_100%)] 
          pointer-events-none
        "
      ></div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-between min-h-screen px-8 md:px-16 py-8">
        {/* Title */}
        <div className="mt-10">
          <h1 className="text-[#FFE3B2] text-[53px] font-[700] mb-4 tracking-wider font-[Cinzel]">
            THE TEMPLE <br /> OF GAZIA
          </h1>
          <p className="text-[#C7C7C7CC] text-[25px] font-[600] font-[Work Sans] tracking-wide">
            AD 196 – EGYPT
          </p>
        </div>

        {/* Paragraph */}
        <div className="max-w-2xl mb-16 mt-10">
          <p className="text-[#FFFFFF] text-[25px] font-[400] leading-relaxed font-[Work Sans]">
            It is important that we keep our foothold in Siwa, or else they will have our
            heads. I love you with all of my ka; however, no amount of offerings or prayer can
            replace the will of a warrior. Through battle we speak to the gods.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-end">
          <button
            onClick={handleSkip}
            disabled={isLoadingSkip}
            className="
              flex items-center 
              text-[#FFFFFF] text-[21px] 
              hover:scale-105 
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {/* If loading, show spinner; otherwise show “Skip” text */}
            {isLoadingSkip ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-t-white border-white border-opacity-60 rounded-full animate-spin"></div>
                <span>Loading...</span>
              </div>
            ) : (
              <span>Skip</span>
            )}
          </button>

          <button
            onClick={handleContinue}
            onMouseEnter={() => !isLoadingContinue && null}
            onMouseLeave={() => !isLoadingContinue && null}
            disabled={isLoadingContinue}
            className="
              flex items-center 
              text-[#FFFFFF] text-[21px] 
              hover:scale-105 
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {isLoadingContinue ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-t-white border-white border-opacity-60 rounded-full animate-spin"></div>
                <span>Loading...</span>
              </div>
            ) : (
              <span>Continue</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
