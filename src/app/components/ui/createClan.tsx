"use client";

import { ChevronDown, ChevronUp, Check } from "lucide-react";
import React from "react";

export default function CreateClan() {
  const [clanType, setClanType] = React.useState("Anyone can Join");
        const [skills, setSkills] = React.useState(0)
    const incrementSkills  = () => {
        setSkills(skills + 1)
    }
    const decrementSkills = () => {
        if (skills > 0) {
            setSkills(skills - 1)
        }
    }
  // Clan types array
  const clanTypes = ["Anyone can Join", "Invite Only", "Request to Join"];

  interface HandleNextClanType {
    (currentType: string): string;
  }
  const handleNextClanType: HandleNextClanType = (currentType) => {
    const currentIndex = clanTypes.indexOf(currentType);
    const nextIndex = (currentIndex + 1) % clanTypes.length;
    return clanTypes[nextIndex];
  };
  const handlePrevClanType: HandleNextClanType = (currentType) => {
    const currentIndex = clanTypes.indexOf(currentType);
    const prevIndex = (currentIndex - 1 + clanTypes.length) % clanTypes.length;
    return clanTypes[prevIndex];
  };

  // Update clanType when up/down buttons are clicked
  const handleUpClick = () => {
    setClanType(handlePrevClanType(clanType));
  };

  const handleDownClick = () => {
    setClanType(handleNextClanType(clanType));
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full max-w-[616px] bg-[#3F372733] py-[10px] px-[42px]">
        <div className="flex flex-col gap-[29px] tracking-widest">
          <h1 className="text-[24px] font-[700] text-white">CREATE ROOM</h1>
          <div className="flex items-center gap-[8px]">
            <label
              className="text-[18px] font-[600] text-white flex flex-none"
              htmlFor="name"
            >
              Clan Name:
            </label>
            <input
              type="text"
              id="name"
              className="outline-none border text-white p-[5px] text-[14px] border-white/60 h-[38px] rounded-[10px] w-full"
            />
          </div>
          <div className="flex items-center gap-[8px]">
            <label
              className="text-[18px] font-[600] text-white flex flex-none"
              htmlFor="name"
            >
              Description:
            </label>
            <textarea
              id="name"
              className="outline-none border text-white p-[5px] text-[14px] border-white/60 h-[88px] rounded-[10px] w-full"
            />
          </div>
          <div className="flex gap-[8px] items-center ">
            <label
              className="text-[18px] font-[600] text-white flex flex-none"
              htmlFor="name"
            >
              Clan Type:
            </label>
            <div className="outline-none border flex items-center justify-center border-white/60 h-[38px] bg-[#F5CEA9]  min-w-2/5">
              <span className="text-[16px] font-[700] text-[#361A00] ">
                {clanType}
              </span>
            </div>
            <div className="w-fit flex flex-col p-[5px] items-center justify-center">
              <button className="hover:cursor-pointer" onClick={handleUpClick}>
                <ChevronUp color="white" size={30} fill="white" />
              </button>
              <button
                className="hover:cursor-pointer"
                onClick={handleDownClick}
              >
                <ChevronDown color="white" size={30} fill="white" />
              </button>
            </div>
          </div>
          <div className="flex gap-[8px] items-center ">
            <label
              className="text-[18px] font-[600] text-white flex flex-none"
              htmlFor="name"
            >
              Skills:
            </label>
            <div className="outline-none border flex items-center justify-center border-white/60 h-[38px] bg-[#F5CEA9]">
              <span className="text-[16px] font-[700] text-[#361A00] px-[10px] py-[5px]">
                {skills}
              </span>
            </div>
            <div className="w-fit flex flex-col p-[5px] items-center justify-center">
              <button className="hover:cursor-pointer" onClick={incrementSkills}>
                <ChevronUp color="white" size={30} fill="white" />
              </button>
              <button
                className="hover:cursor-pointer"
                onClick={decrementSkills}
              >
                <ChevronDown color="white" size={30} fill="white" />
              </button>
            </div>
          </div>
          <div className="w-full flex justify-end mt-3">
            <button className="space-x-2 flex items-center font-bold bg-[#A55E1D] hover:bg-[#A55E1D33] p-[10px] rounded-[5px]" >
              <Check color="white" size={30} />
              <span className="text-[16px] font-[600] text-white">
                Create Clan (5000XP)
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
