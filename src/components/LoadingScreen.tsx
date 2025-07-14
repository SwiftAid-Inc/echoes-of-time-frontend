
import Image from "next/image";

interface LoadingScreenProps {
  progressLoading: number;
}

export default function LoadingScreen({ progressLoading }: LoadingScreenProps) {


  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/loadingScreen/loadingbackgroud.png"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Content Overlay */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {/* Title Section */}
        <div className="text-center select-none mb-8">
          {/* Tagline */}
          <p className="text-white text-lg md:text-xl text-center font-cinzel mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] tracking-widest">
            Rewrite History. Fix the Future.
          </p>

          {/* Game Title */}
          <h1
            className="text-[2.5rem] md:text-[3.5rem] font-cinzel-decorative font-semibold tracking-[0.5em] text-white uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
            style={{ letterSpacing: "0.15em" }}
          >
            ECHOES
          </h1>
          <h2
            className="text-[1.5rem] md:text-[2.5rem] font-cinzel-decorative font-semibold tracking-[0.3em] text-white uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:-mb-[30px]"
            style={{ letterSpacing: "0.15em" }}
          >
            OF
          </h2>
          <h1
            className="text-[2.5rem] md:text-[10rem] font-cinzel font-extrabold tracking-[0.5em] uppercase bg-gradient-to-b from-[#E0BA00] to-[#863B00] bg-clip-text text-transparent drop-shadow-[0_8px_32px_rgba(0,0,0,0.95)]"
            style={{ letterSpacing: "0.3em", WebkitTextStroke: "1px #863B00" }}
          >
            TIME
          </h1>
        </div>

        {/* Loading Section */}
        <div className="w-full max-w-2xl px-8">
          {/* Loading Bar */}
          <div className="relative h-3 bg-black/50 rounded-full overflow-hidden border-2 border-[#863B00]">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#E0BA00] to-[#863B00] transition-all duration-300 ease-linear"
              style={{ width: `${progressLoading}%` }}
            />
          </div>

          {/* Loading Text */}
          <div className="text-white text-lg md:text-xl text-center mt-4 font-cinzel tracking-widest drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            LOADING... {progressLoading}%
          </div>
        </div>
      </div>
    </div>
  );
}
