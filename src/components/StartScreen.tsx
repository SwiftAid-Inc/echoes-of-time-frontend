"use client";

import Image from "next/image";

export default function StartScreen() {
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
        {/* Tagline */}
        <p className="text-white text-lg md:text-xl text-center font-cinzel mb-12 tracking-widest">
          Rewrite History. Fix the Future.
        </p>

        {/* Game Title */}
        <div className="text-center select-none">
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

        {/* Start Button */}
        <div className="flex justify-center items-center space-x-2 mt-16">
          <span className="text-white text-lg md:text-xl font-semibold tracking-widest uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            PRESS
          </span>
          <span className="bg-white text-black px-4 py-1 rounded-md text-lg md:text-xl font-bold tracking-widest shadow-md mx-1">
            START
          </span>
          <span className="text-white text-lg md:text-xl font-semibold tracking-widest uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            TO START
          </span>
        </div>
      </div>
    </div>
  );
}
