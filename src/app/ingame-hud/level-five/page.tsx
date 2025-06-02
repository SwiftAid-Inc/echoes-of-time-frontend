'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LevelFive() {
    const router = useRouter();
    const handleContinue = () => {
        router.push('/ingame-hud/game-start');
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="
          absolute inset-0
          bg-[url('/level5.png')]
          bg-cover bg-center
        "
            />

            {/* Content Overlay */}
            <div className="relative flex flex-col items-center justify-center mt-14 text-center px-8">
                {/* Level 5 Title */}
                <h1 className="text-[#FFA200] font-[Cinzel] text-[40px] mb-4 tracking-wider">
                    LEVEL 5
                </h1>

                {/* Subtitle */}
                <h2 className="text-[24px] text-[#FFFFFF] mb-16 font-Work Sans">
                    An Eye for an Eye
                </h2>

                {/* Stage Section */}
                <div className="mb-8">
                    <h3 className="text-[24px] font-[Cinzel] text-[#FAC76D] mb-4 tracking-wide">
                        STAGE 1
                    </h3>
                    <p className="text-[#FFFFFF] text-[21px] font-[Work Sans] tracking-[2px]">
                        Find and Investigate the ambushes
                    </p>
                </div>

                {/* Tap to Begin Button */}
                <button
                    onClick={handleContinue}
                    className="absolute bottom-0 right-60 translate-y-30 flex items-center gap-2 px-3 py-2 bg-transparent hover:opacity-80"
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