'use client';

import { useRouter } from 'next/navigation';
import { CircleSmall, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

export default function GameOver() {
    const router = useRouter();

    const handleContinue = () => {
        router.push('/next-page');
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="
                    absolute inset-0
                    bg-[url('/maingame.png')]
                    bg-cover bg-center blur-[7px]
                "
            />

            <div className="relative z-10">
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

                {/* FINAL STAGE overlay (absolutely positioned) */}
                <div className="absolute inset-0 flex items-center justify-center mt-[320px]">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-[51px] font-[Cinzel] text-[#FBCC4BCC]">
              GAME OVER!
            </h1>

            {/* Single HR, centered and fixed width */}
            <div className="w-64">
              <hr className="h-px bg-[#FBCC4BCC] border-0" />
            </div>

            <div className="flex flex-col items-center space-y-3">
              

              <button
                onClick={handleContinue}
                className="flex items-center bg-transparent px-4 py-2"
              >
                <span className="inline-flex w-[31px] h-[31px] items-center justify-center rounded-full bg-white text-black text-lg font-bold mr-2">
                  A
                </span>
                <span className="text-[16px] font-[Cinzel] text-white tracking-[2px]">
                  Reload Last Save
                </span>
              </button>
              
              <button
                onClick={handleContinue}
                className="flex items-center bg-transparent px-4 py-2"
              >
                <span className="inline-flex w-[31px] h-[31px] items-center justify-center rounded-full bg-white text-black text-lg font-bold mr-2">
                  B
                </span>
                <span className="text-[16px] font-[Cinzel] text-white tracking-[2px]">
                  Go To Main Menu
                </span>
              </button>

            </div>
          </div>
        </div>



                {/* Character Thinking Image */}
                <div className="absolute top-[27vh] right-[8.1rem] z-20 blur-[4px]">
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
                <div className="absolute top-[69vh] right-[3rem] z-20 blur-[4px]">
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