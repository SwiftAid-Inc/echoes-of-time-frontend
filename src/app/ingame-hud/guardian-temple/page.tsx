'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { CircleSmall, X } from 'lucide-react';

export default function GuardianTemple() {
    const router = useRouter();

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
            <div className="absolute inset-0 flex mt-[-90px] items-center justify-center px-2">
                <div className="relative flex flex-col w-full max-w-3xl">
                    <div className="w-full border-[0.1px] rounded-sm border-amber-500/80 p-4 bg-[#5E2D08CC] flex items-start space-x-6">

                        <div className="flex flex-col justify-center">
                            <h1 className="text-[#FFFFFF] font-[Cinzel] text-[28px] tracking-wide">
                                GUARDIAN OF THE TEMPLE
                            </h1>
                            <p className="mt-2 text-[18px] text-[#FFDEC5] font-[Work Sans] tracking-[1px]">
                                It is important that we keep our foothold in Siwa, or else they will have our heads. I love you with all of my ka; however, no amount of offerings or prayer can replace the will of a warrior. Through battle we speak to the gods.
                            </p>
                        </div>
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
            <div className="absolute top-[69vh] right-[3rem] z-20 blur-[3px]">
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



            <div className="absolute bottom-0 z-1 left-8 flex items-center space-x-4 w-1/2">
                {/* Step Circle */}
                <Image
                    src="/man.png"
                    alt="man face"
                    width={358}
                    height={358}
                    className="object-contain"
                />

            </div>


            <div
                className="absolute bottom-8 right-8 flex flex-col text-left"
            >


                {/* Progress Bar Container */}
                <div className="w-full max-w-xs bg-transparent rounded-full h-2.5 border border-[#FFA200] mb-2">
                    <div className="bg-[#FFA200] h-2.5 rounded-full w-[35%]"></div>
                </div>

                <div className="flex flex-col space-y-4">
                    <button className="border-[0.1px] p-1 tracking-[1px] bg-transparent border-[#656565] text-[#FFA200] text-[16px] font-[Work Sans] rounded-lg text-left px-6 hover:bg-white/10">
                        Then I'll tell you you've nothing <br />
                        <span className='text-[#EBDEBC]'> inside your skull. </span>
                    </button>
                    <button className="border-[0.1px] p-1 tracking-[1px] bg-transparent border-[#656565] text-[#FFA200] text-[16px] font-[Work Sans] rounded-lg text-left px-6 hover:bg-white/10">
                        Then I'll make a fine goblet from out <br />
                        <span className='text-[#EBDEBC]'> of your skull. </span>
                    </button>
                    <button className="border-[0.1px] p-1 tracking-[1px] bg-transparent border-[#656565] text-[#EBDEBC] text-[16px] font-[Work Sans] rounded-lg text-left px-6 hover:bg-white/10">
                        Say that again.
                    </button>
                </div>
            </div>

        </div>
    );
}
