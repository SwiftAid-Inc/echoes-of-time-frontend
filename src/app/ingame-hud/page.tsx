import React from "react";
import Image from "next/image";
import { CircleSmall } from "lucide-react";
import GameOver from "@/components/ingame-hud/gameOver";
import GameComplete from "@/components/ingame-hud/gameComplete";
import PauseGame from "../../components/ingame-hud/pauseScreen";
import MainGame from "../../components/ingame-hud/mainGame";
import Level from "@/components/ingame-hud/level";
import InscribingTablet from "@/components/ingame-hud/InscribingTablet";
import GuardianTemple from "@/components/ingame-hud/guardianTemple";
import TempleOfGazia from "@/components/ingame-hud/home";

export default function IngameHud() {
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

        {/* <GameOver /> */}
        {/* <GameComplete XP={1000} /> */}
        {/* <PauseGame /> */}
        {/* <MainGame /> */}

        {/* <Level /> */}
        {/* <InscribingTablet /> */}
        {/* <GuardianTemple /> */}
        <TempleOfGazia />
        {/* Character Thinking Image */}
        <div className="absolute top-[27vh] right-[8.1rem] z-20">
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
        <div className="absolute top-[69vh] right-[3rem] z-20">
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
    </div>
  );
}
