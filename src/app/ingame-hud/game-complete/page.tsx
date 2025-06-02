'use client';

import { useRouter } from 'next/navigation';
import { CircleSmall, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

export default function GameComplete() {
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
                    bg-cover bg-center
                "
            />

            <div className="relative z-10">
                <div className="absolute top-4 left-6 opacity-[0.5]">
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

                <div className="absolute top-6 right-6">
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
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-[220px]">
                    <div className="text-center">
                        <h1 className="text-[53px] font-[Cinzel] text-[#FBCC4BCC] mb-3">
                            MISSION COMPLETED!
                        </h1>

                        <div className="flex items-center justify-center w-full space-x-4">
                            {/* Left line */}
                            <hr className="flex-1 h-px bg-[#FFFDF9] border-0" />

                            {/* Center text */}
                            <span className="font-[Cinzel] text-[21px] text-[#FFFDF9] whitespace-nowrap">
                                AN EYE FOR AN EYE
                            </span>

                            {/* Right line */}
                            <hr className="flex-1 h-px bg-[#FFFDF9] border-0" />
                        </div>

                        <h1 className="text-[53px] font-[Cinzel] text-[#FBCC4BCC] mb-3">
                            500XP
                        </h1>
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


            </div>


            {/* 4. PROGRESS BAR + CIRCLE ICON (bottom-left) */}
            <div className="absolute bottom-8 left-8 flex items-center space-x-4 w-1/2">
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