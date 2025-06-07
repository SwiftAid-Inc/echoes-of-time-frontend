import React from "react";
import Button from "./cti/Button";
import { Check, Logs } from "lucide-react";
import { title } from "process";
import { AnimatePresence, motion } from "framer-motion";


export default function JoinClan() {
  const clans = [
    {
      id: 1,
      topic: "Ancient Egypt",
      participant: "1/6",
      locationTime: "Ancient Egypt",
      subLevel: [
        {
          title: "Pyramids of Giza",
          xp: "2,000XP",
          desc: "Explore the pyramids and uncover their secrets.",
        },
      ],
    },
    {
      id: 2,
      topic: "Medieval Europe",
      participant: "2/6",
      locationTime: "Medieval Europe",
      subLevel: [
        {
          title: "Knights' Tournament",
          xp: "1,500XP",
          desc: "Compete in a medieval jousting tournament.",
        },
      ],
    },
    {
      id: 3,
      topic: "Renaissance Italy",
      participant: "3/6",
      locationTime: "Renaissance Italy",
      subLevel: [
        {
          title: "Artistic Masterpieces",
          xp: "3,000XP",
          desc: "Create your own masterpiece inspired by Renaissance artists.",
        },
      ],
    },
    {
      id: 4,
      topic: "Feudal Japan",
      participant: "4/6",
      locationTime: "Feudal Japan",
      subLevel: [
        {
          title: "Samurai Training",
          xp: "2,800XP",
          desc: "Train as a samurai and learn the way of the sword.",
        },
      ],
    },
    {
      id: 5,
      topic: "Viking Age",
      participant: "2/6",
      locationTime: "Viking Age",
      subLevel: [
        {
          title: "Raid and Conquer",
          xp: "3,500XP",
          desc: "Join a Viking raid and conquer new lands.",
        },
      ],
    },
    {
      id: 6,
      topic: "Industrial Revolution",
      participant: "5/6",
      locationTime: "Industrial Revolution",
      subLevel: [
        {
          title: "Factory Life",
          xp: "2,200XP",
          desc: "Experience the challenges of working in an industrial factory.",
        },
      ],
    },
    {
      id: 7,
      topic: "Ancient Greece",
      participant: "3/6",
      locationTime: "Ancient Greece",
      subLevel: [
        {
          title: "Olympic Games",
          xp: "2,500XP",
          desc: "Participate in the ancient Olympic Games and compete for glory.",
        },
      ],
    },
    {
      id: 8,
      topic: "Prehistoric Era",
      participant: "1/6",
      locationTime: "Prehistoric Era",
      subLevel: [
        {
          title: "Cave Paintings",
          xp: "1,200XP",
          desc: "Create your own cave paintings and tell a story.",
        },
      ],
    },
  ];

  // Remove data and clanSubLevels, and use the full clan object for activeClan
  const [activeClan, setActiveClan] = React.useState(clans[0]);

  const handleClanClick = (clanId: number) => {
    const selected = clans.find((clan) => clan.id === clanId);
    if (selected) {
      setActiveClan(selected);
    }
  };

  return (


  <div className="w-full flex items-center justify-center"> 
   <div className="w-full max-w-[965px] flex flex-col justify-center md:flex-row h-full max-h-[468px]">
      <div className="w-full ">
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
                handleClick={() => handleClanClick(clan.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* clan details */}
      <div className="w-full pl-8">
       {/* clan details */}
<div className="w-full pl-8 relative min-h-[400px]">
  <AnimatePresence mode="wait">
    <motion.div
      key={activeClan.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="absolute w-full"
    >
      <div className="border-[0.2px] border-[#e29511] h-fit p-[8px] flex flex-col rounded-[8px] gap-[15px]">
        <div className="w-full rounded-[8px] bg-transparent hover:bg-[#A55E1D33] p-[8px]">
          <div className="flex justify-between  items-center">
            <h1 className="font-[800] text-[18px] text-white">
              {activeClan.topic}
            </h1>
            <h3 className="text-[#F6DDB2] text-[12px] font-[600]">
              {activeClan.locationTime}
            </h3>
          </div>
          <div className="flex gap-[16px] items-center space-x-3">
            <span className="text-[12px] text-white font-[400]">
              participant:
            </span>
            <span className="text-[16px] text-[#FFA200] font-[600]">
              {activeClan.participant}
            </span>
          </div>
        </div>

        {activeClan.subLevel.map((level, index) => (
          <div
            key={index}
            className="w-full rounded-[8px] bg-transparent hover:bg-[#A55E1D33] p-[8px]"
          >
            <div className="flex justify-between items-center">
              <h1 className="font-[800] text-[18px] text-white">
                {level.title}
              </h1>
              <h3 className="text-[#FFFFFF] text-[14px] font-[600]">
                {level.xp}
              </h3>
            </div>
            <div className="flex gap-[16px] items-center text-[14px] font-[400] text-white">
              <input type="radio" name="" id={`radio-${index}`} />
              <label htmlFor={`radio-${index}`}>{level.desc}</label>
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-[7px]">
          <h1 className="text-[16px] font-[600] text-white border-b border-white/40 p-[10px]">
            Listing Datails
          </h1>
          <ul className="flex flex-col gap-[10px] text-[14px] font-[400] text-white/80 list-disc pl-[20px]">
            <li>Level 5 above</li>
            <li>Multiple game task</li>
            <li>500XP and above</li>
          </ul>
        </div>

        <div className="flex justify-start pl-3">
          <button className="space-x-2 flex items-center font-bold hover:bg-[#A55E1D33] p-[10px] rounded-[5px]">
            <Check color="white" size={30} />
            <span className="text-[16px] font-[600] text-white">Join</span>
          </button>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
</div>

      </div>
    </div>

   </div>
     );
}
