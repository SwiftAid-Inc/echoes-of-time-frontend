'use client';

import { useRouter } from 'next/navigation';
import { CirclePause, CircleSmall} from 'lucide-react';
import Image from 'next/image';


export default function StartGame() {
    const router = useRouter();

     const handlePause = () => {
    router.push('/ingame-hud/pause-game');
  };

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
                <div className="absolute top-6 left-6">
                    <h1 className="text-[#C89845] font-[Cinzel] text-[18px] my-6 ml-8">
                        AN EYE FOR AN EYE
                    </h1>

                    {/* Progress Chain */}
                    <div className="flex items-center ml-8">
                        <div className="w-[23px] h-[23px] rounded-full border border-[#C89845] bg-transparent"></div>
                        <div className="w-[126px] h-0.5 bg-[#C89845]"></div>
                        <div className="w-[23px] h-[23px] rounded-full border border-[#C89845] bg-transparent"></div>
                        <div className="w-[126px] h-0.5 bg-[#C89845]"></div>
                        <div className="w-[23px] h-[23px] rounded-full border border-[#C89845] bg-transparent"></div>
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

            {/* 4. Pause Icon (bottom-right, aligned with progress bar) */}
                  <button
                    onClick={handlePause}
                    className="absolute bottom-8 right-8 flex items-center justify-center"
                    aria-label="Pause Game"
                  >
                    <CirclePause className="w-8 h-8 text-white/90" />
                  </button>


        </div>
    );
}