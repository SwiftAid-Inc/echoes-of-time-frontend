import React from "react";
import Button from "./cti/Button";
import { Logs } from "lucide-react";

export default function JoinClan() {
  const clans = [
    {
      id: 1,
      topic: "Ancient Egypt",
      participant: "1/6",
      locationTime: "Ancient Egypt",
    },
    {
      id: 2,
      topic: "Medieval Europe",
      participant: "2/6",
      locationTime: "Medieval Europe",
    },
    {
      id: 3,
      topic: "Renaissance Italy",
      participant: "3/6",
      locationTime: "Renaissance Italy",
    },
    {
      id: 4,
      topic: "Feudal Japan",
      participant: "4/6",
      locationTime: "Feudal Japan",
    },
    {
      id: 5,
      topic: "Viking Age",
      participant: "2/6",
      locationTime: "Viking Age",
    },
    {
      id: 6,
      topic: "Industrial Revolution",
      participant: "5/6",
      locationTime: "Industrial Revolution",
    },
    {
      id: 7,
      topic: "Ancient Greece",
      participant: "3/6",
      locationTime: "Ancient Greece",
    },
    {
      id: 8,
      topic: "Prehistoric Era",
      participant: "1/6",
      locationTime: "Prehistoric Era",
    },
  ];

  const data = clans.map((clan) => ({
    id: clan.id,
    topic: clan.topic,
    participant: clan.participant,
    locationTime: clan.locationTime,
  }));
  const handleClanClick = (clanId: number) => {};
  return (
    <div className="w-full max-w-[965px] flex flex-col md:flex-row h-full max-h-[468px]">
      <div className="w-full">
        {/* search and filter */}
        <div className="w-full flex items-center p-[10px] gap-[40px]">
          <input
            className="w-full border-[0.25] p-[5px] rounded-[8px] gap-[10px] border-[#404040] placeholder:text-[12px] opacity-40 placeholder:font-[400]"
            type="text"
            placeholder="Search Clan"
          />
          <button className="flex space-x-5 items-center">
            <span className="text-[14px] font-[600] text-white">Filter</span>
            <Logs color="white" size={30} />
          </button>
        </div>

        {/* clan list */}
        <div className="w-full pr-8 pb-6 overflow-y-scroll">
          <div className="w-full border-[0.2px] border-[#838383] flex flex-col gap-[13px] p-[8px]">
            {clans.map((clan) => (
              <Button
                key={clan.id}
                topic={clan.topic}
                participant={clan.participant}
                locationTime={clan.locationTime}
              />
            ))}
          </div>
        </div>
      </div>

      {/* clan details */}
      <div className="w-full pl-8">
        <div className="border-[0.2px] border-[#e29511] h-full p-[8px] flex flex-col rounded-[8px] gap-[15px]">
          <div
            className={` w-full rounded-[8px] bg-transparent hover:bg-[#A55E1D33] p-[8px] `}
          >
            <div className="flex justify-between  items-center">
              <h1 className="font-[800] text-[18px] text-white">
                {data[0].topic}
              </h1>
              <h3 className="text-[#F6DDB2] text-[12px] font-[600]">
                {data[0].locationTime}
              </h3>
            </div>
            <div className="flex gap-[16px] items-center space-x-3">
              <span className="text-[12px] font-[400]">participant:</span>
              <span className="text-[16px] text-[#FFA200] font-[600]">
                {data[0].participant}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
