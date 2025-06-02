'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { CircleSmall, X } from 'lucide-react';

export default function MainGame() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [showFind, setShowFind] = useState(false);

  const handleContinue = () => {
    router.push('/ingame-hud/level-five');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 1. BACKGROUND IMAGE (full‐screen) */}
      <div
        className="
          absolute inset-0
          bg-[url('/maingame.png')]
          bg-cover bg-center blur-[7px]
        "
      />

      {/* 2. DARKENING OVERLAY */}
      <div className="absolute inset-0 blur-[127px] pointer-events-none" />

      <div className="absolute top-4 left-6 opacity-[0.4]">
                    <h1 className="text-[#C89845] font-[Cinzel] text-[18px] my-6 ml-8">
                        AN EYE FOR AN EYE
                    </h1>

                    {/* Progress Chain */}
                    <div className="flex items-center ml-8">
                        <div className="w-[23px] h-[23px] rounded-full border border-[#C89845] bg-[#C89845]"></div>
                        <div className="w-[126px] h-0.5 bg-[#C89845]"></div>
                        <div className="w-[23px] h-[23px] rounded-full border border-[#C89845] bg-[#C89845]"></div>
                        <div className="w-[126px] h-0.5 bg-[#C89845]"></div>
                        <div className="w-[23px] h-[23px] rounded-full border border-[#C89845] bg-[#C89845]"></div>
                    </div>
                </div>

                <div className="absolute top-6 right-6 opacity-[0.4]">
                    <div className="bg-transparent p-4 min-w-[280px] border-opacity-50">
                        <h2 className="text-[#FFFEFB] font-[Work Sans] text-[18px] tracking-[2px] mb-3">Objective</h2>
                        <div className="flex items-start gap-3">
                            <CircleSmall className="w-5 h-5 text-white" />
                            <p className="text-[#FFFEFB] text-[12px] leading-relaxed font-[Work Sans] tracking-[2px]">
                                Find and Investigate the ambushes
                            </p>
                        </div>
                    </div>
                </div>

      {/* 3. CENTERED MODAL WRAPPER */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="relative flex flex-col w-full max-w-3xl">
          {/** ─────────── STATE A: Original card + “Continue →” ─────────── */}
          {!showFind && (
            <>
              <div className="w-full border-[0.5px] border-amber-500/80 p-4 bg-amber-900/20">
                <h1 className="text-[#FAB677] font-[Cinzel] text-[32px] text-center tracking-wide">
                  TIMELINE BRANCHED!
                </h1>
                <p className="mt-2 text-center text-[18px] text-[#FFF9EF] font-[Work Sans]">
                  You requested for the guardian
                </p>
                <div className="my-6 border-t border-white/40" />

                <p className="text-center text-[19.66px] text-[#FFFFFF] font-[Work Sans] tracking-wide">
                  NEW OBJECTIVE:
                </p>

                {/* Make this heading itself clickable */}
                <h2
                  className="mt-2 text-[18px] font-[Cinzel] text-white text-center cursor-pointer hover:text-amber-300"
                  onClick={() => setShowFind(true)}
                >
                  FIND THE GUARDMAN
                </h2>
              </div>

              {/* “Continue →” button sits immediately below, right-aligned */}
              <div className="flex justify-end mt-2">
                <button
                  onClick={handleContinue}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="flex items-center font-[Work Sans] hover:text-amber-500 text-[#F6F0DF] text-[21px] px-4 py-2 rounded-md"
                >
                  <span>Continue</span>
                  <Image
                    src="/play.png"
                    alt="play"
                    className="ml-1 text-[#A55E1D]"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </>
          )}

          {/** ─────────── STATE B: 3-column view + “Close ×” outside the box ─────────── */}
          {showFind && (
            <>
              {/* Close button sits *outside* the inner card, at the top-right */}
              <div className="flex justify-end mb-2">
                <button
                  onClick={() => setShowFind(false)}
                  className="flex items-center gap-1 text-[#F6F0DF] text-[12px] font-[Work Sans] hover:text-gray-300"
                  aria-label="Close"
                >
                  <X className="text-[#F6F0DF] text-[12px] font-[Work Sans]" /> Close
                </button>

              </div>

              {/* Inner card with 3-column layout */}
              <div className="w-full border-[0.5px] border-amber-500/80 p-14 bg-amber-900/20">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: '"Touch"', desc: 'to interact' },
                    { label: '"Swipe"', desc: 'to move' },
                    { label: '"Tap"', desc: 'to view glowing objects' },
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
      
                      {/* Character Thinking Image */}
                      <div className="absolute top-40 right-33 z-20">
                          <div className="relative">
                              <Image
                                  src="/think.png"
                                  alt="Character using powers"
                                  width={36}
                                  height={17}
                                  className="object-contain"
                              />
      
                          </div>
                      </div>
      
                      {/* Spiderman Face */}
                      <div className="absolute top-100 right-13 z-20">
                          <div className="w-[83px] h-[83px]">
                              <Image
                                  src="/spiderman.png"
                                  alt="Spiderman face"
                                  width={83}
                                  height={83}
                                  className="object-cover"
                              />
                          </div>
                      </div>
      

      {/* 4. PROGRESS BAR + CIRCLE ICON (bottom-left) */}
      
            <div className="absolute bottom-8 left-8 flex items-center space-x-4 w-1/2 opacity-[0.4]">
                {/* Step Circle */}
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white/70 text-white/90 font-semibold text-sm">
                    5
                </div>

                {/* Progress Bar Container */}
                <div className="w-full max-w-xs bg-transparent rounded-full h-2.5 border border-[#FFA200]">
                    <div className="bg-[#FFA200] h-2.5 rounded-full w-[35%]"></div>
                </div>

            </div>
    </div>
  );
}
