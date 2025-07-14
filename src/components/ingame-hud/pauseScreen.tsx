"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { CircleSmall } from "lucide-react";

export default function PauseGame() {
  const router = useRouter();

  const handleResume = () => {
    router.push("/ingame-hud/game-start");
  };

  const handleSettings = () => {
    router.push("/ingame-hud/inscribing-tablet");
  };

  return (
    <div className="w-full bg-[#20100299]/60 border border-transparent h-screen absolute inset-0 backdrop-blur-sm">
      <div className=" flex items-start justify-start px-4 pt-20 mt-20 ml-20 relative z-10">
        <div className="relative flex flex-col w-full max-w-md pl-10">
          <h1 className="text-[#FFFEFB] font-[Cinzel] text-[35px] font-[700] mb-6">
            PAUSE MENU
          </h1>
          <div className="flex flex-col gap-8 mt-3">
            <button
              onClick={handleResume}
              className="w-full outline-4 outline-offset-4 outline-[#825200]/50  p-4 tracking-[1px] bg-[#825200]/50 text-[#FFFFFF] text-[22px] font-[500] font-[Work Sans]"
            >
              Resume game
            </button>
            <button
              onClick={handleSettings}
              className="w-full  outline-4 outline-offset-4 outline-[#825200]/50  p-4 tracking-[1px] bg-[#825200]/50 text-[#FFFFFF] text-[22px] font-[500] font-[Work Sans]"
            >
              Settings
            </button>
            <button className="w-full outline-4 outline-offset-4 outline-[#825200]/50   p-4 tracking-[1px] bg-[#825200]/50 text-[#FFFFFF] text-[22px] font-[500] font-[Work Sans]">
              Quit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
