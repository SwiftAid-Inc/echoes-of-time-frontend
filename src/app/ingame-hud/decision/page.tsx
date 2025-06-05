'use client';

import { useRouter } from 'next/navigation';
import { CircleSmall, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

export default function Decision() {
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
                    bg-[url('/decision.png')]
                    bg-cover bg-center opacity-[0.5]
                "
            />

            <div className="relative z-10">

                {/* FINAL STAGE overlay (absolutely positioned) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-[220px]">
                    <div className="text-center">
                        <p className="text-[14px] font-[Cinzel] text-[#FFFFFF] mb-3 tracking-[2px]">
                           NEW LOCATION CREATED
                        </p>
                        <h1 className="text-[40px] font-[Cinzel] text-[#FBCC4BCC] mb-3 tracking-[2px]">
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
                </div>
 {/* Tap to Begin Button */}
                <button
                    onClick={handleContinue}
                    className="absolute top-70 right-195 translate-y-30 flex items-center gap-2 px-3 py-2 bg-transparent hover:opacity-80"
                >
                    <Image
                        src="/tap.png"
                        alt="tap"
                        width={40}
                        height={40}
                        className='text-white font-bold'
                    />
                    <span className="text-[12px] text-white tracking-[2px] font-[Work Sans] font-bold">
                        <i>Tap to begin</i>
                    </span>
                </button>

            </div>

        </div>
    );
}