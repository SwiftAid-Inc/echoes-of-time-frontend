'use client';
import React from "react";

type ButtonProps = {
  backgroundColor?: string;
  topic: string;
  participant: string;
  locationTime: string;
  handleClick?: () => void;
};

function Button({ backgroundColor = "#4A2F06", topic, participant, locationTime ,handleClick}: ButtonProps) { 
  return (
    <div
    onClick={handleClick}
      className={` w-full rounded-[8px] border-[0.21px] bg-transparent border-[#e29511] hover:bg-[${backgroundColor}] p-[8px] `}
         onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor = backgroundColor;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent";
      }}
    >
      <div className="flex justify-between  items-center">
        <h1 className="font-[800] text-[18px] text-white">
          {topic}
        </h1>
        <h3 className="text-[#F6DDB2] text-[12px] font-[600]">{locationTime}</h3>
      </div>
      <div className="flex gap-[16px] text-white items-center space-x-3">
        <span className="text-[12px] font-[400]">participant:</span>
        <span className="text-[16px] font-[600]">{participant}</span>
      </div>
    </div>
  );
}

export default Button;
