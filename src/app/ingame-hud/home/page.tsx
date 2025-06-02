'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TempleOfGazia() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleContinue = () => {
    router.push('/ingame-hud/main-game');
  };
  const handleSkip = () => {
    router.push('/');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      <div
        className="
          absolute inset-0 
          bg-[url('/pregame.png')] 
          bg-cover bg-center
        "
      ></div>

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

      <div
        className="
          absolute inset-0 
          bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_50%,_rgba(0,0,0,0.5)_100%)] 
          pointer-events-none
        "
      ></div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-between min-h-screen px-8 md:px-16 py-8">

        <div className="mt-10">
          <h1 className="text-[#FFE3B2] text-[48px] mb-4 tracking-wider font-[Cinzel]">
            THE TEMPLE <br/> OF GAZIA
          </h1>
          <p className="text-[#C7C7C7CC] text-[21px] font-[Work Sans] tracking-wide">
            AD 196 – EGYPT
          </p>
        </div>

        <div className="max-w-2xl mb-16 mt-10">
          <p className="text-[#FFFFFF] text-[21px] leading-relaxed font-[Work Sans]">
            It is important that we keep our foothold in Siwa, or else they will have our heads.
            I love you with all of my ka; however, no amount of offerings or prayer can replace
            the will of a warrior. Through battle we speak to the gods.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-end">
          <button
            onClick={handleSkip}
            className="
              text-[#FFFFFF] text-[21px] 
              hover:scale-105
            "
          >
            Skip
          </button>

          <button
            onClick={handleContinue}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-[#FFFFFF] text-[21px] hover:scale-105"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
