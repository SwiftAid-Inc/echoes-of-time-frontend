"use client";

import Image from "next/image";

export default function HowItBegan() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/loadingScreen/loadingbackgroud2.png"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-4xl px-4">
        {/* Scroll Container */}
        <div className="relative w-full max-w-3xl mx-auto aspect-[16/9]">
          {/* Background Scroll Image */}
          <Image
            src="/loadingScreen/group.png"
            alt="Ancient Scroll"
            fill
            className="object-contain"
            priority
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="px-20 py-12 space-y-4">
              <p className="text-[#000000CC] font-extrabold md:text-3xl max-sm:top-[20px] font-cinzel leading-relaxed top-[50px] absolute left-[140px] max-sm:left-[80px]">
                HOW IT ALL BEGAN...
              </p>
            </div>
          </div>

          {/* Continue Button */}
        </div>
      </div>
      <div className="absolute bottom-0 right-6 text-white text-sm md:text-base tracking-wider">
        TAP A TO CONTINUE...
      </div>
    </div>
  );
}
