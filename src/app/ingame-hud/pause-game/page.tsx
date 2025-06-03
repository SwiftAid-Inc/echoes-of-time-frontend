'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { CircleSmall } from 'lucide-react';

export default function PauseGame() {
    const router = useRouter();

    const handleResume = () => {
        router.push('/ingame-hud/game-start');
    };

    const handleSettings = () => {
        router.push('/ingame-hud/inscribing-tablet');
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

            {/* Top‐left title/progress (unchanged) */}
            <div className="absolute top-4 left-6 opacity-[0.4]">
                <h1 className="text-[#C89845] font-[Cinzel] text-[18px] my-6 ml-8">
                    AN EYE FOR AN EYE
                </h1>
                <div className="flex items-center ml-8">
                    <div className="w-[23px] h-[23px] rounded-full border border-[#C89845] bg-[#C89845]" />
                    <div className="w-[126px] h-0.5 bg-[#C89845]" />
                    <div className="w-[23px] h-[23px] rounded-full border border-[#C89845] bg-[#C89845]" />
                    <div className="w-[126px] h-0.5 bg-[#C89845]" />
                    <div className="w-[23px] h-[23px] rounded-full border border-[#C89845] bg-[#C89845]" />
                </div>
            </div>

            {/* Top‐right objective box */}
            <div className="absolute top-6 right-6 opacity-[0.4]">
                <div className="bg-transparent p-4 min-w-[280px] border-opacity-50">
                    <h2 className="text-[#FFFEFB] font-[Work Sans] text-[18px] tracking-[2px] mb-3">
                        Objective
                    </h2>
                    <div className="flex items-start gap-3">
                        <CircleSmall className="w-5 h-5 text-white" />
                        <p className="text-[#FFFEFB] text-[12px] leading-relaxed font-[Work Sans] tracking-[2px]">
                            Find and Investigate the ambushes
                        </p>
                    </div>
                </div>
            </div>

            {/* 3. PAUSE MENU now positioned top‐left with margin */}
            <div className="absolute inset-0 flex items-start justify-start px-4 pt-20 mt-20 ml-20">
                <div className="relative flex flex-col w-full max-w-md pl-10">
                    <h1 className="text-[#FFFEFB] font-[Cinzel] text-[24px] mb-6">PAUSE MENU</h1>
                    <div className="flex flex-col space-y-4">
                        <button
                            onClick={handleResume}
                            className="w-full border-[0.5px] p-3 tracking-[1px] bg-[#825200] border-[#825200] text-[#FFFFFF] text-[20px] font-[Work Sans]"
                        >
                            Resume game
                        </button>
                        <button
                            onClick={handleSettings}
                            className="w-full border-[0.5px] p-3 tracking-[1px] border-[#825200] bg-[#825200] text-[#FFFFFF] text-[20px] font-[Work Sans]"
                        >
                            Settings
                        </button>
                        <button
                            className="w-full border-[0.5px] p-3 tracking-[1px] border-[#825200] bg-[#825200] text-[#FFFFFF] text-[20px] font-[Work Sans]"
                        >
                            Quit
                        </button>
                    </div>
                </div>
            </div>

            {/* Character Thinking Image */}
            <div className="absolute top-[27vh] right-[8.1rem] z-20 blur-[3px]">
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

            {/* Spiderman Face (unchanged) */}
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
            <div className="absolute bottom-8 left-8 flex items-center space-x-4 w-1/2 opacity-[0.4]">
                {/* Step Circle */}
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white/70 text-white/90 font-semibold text-sm">
                    5
                </div>
                {/* Progress Bar Container */}
                <div className="w-full max-w-xs bg-transparent rounded-full h-2.5 border border-[#FFA200]">
                    <div className="bg-[#FFA200] h-2.5 rounded-full w-[35%]" />
                </div>
            </div>
        </div>
    );
}
