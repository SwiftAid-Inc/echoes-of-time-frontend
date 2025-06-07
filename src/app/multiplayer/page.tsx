"use client";

import React from "react";
import Image from "next/image";
import { Star, Trophy } from "lucide-react";
import JoinClan from "../components/ui/joinClan";
import CreateClan from "../components/ui/createClan";
import { AnimatePresence, motion } from "framer-motion";

export default function Page() {
    const tab  = ["Join Clan", "Create Clan"];

  const [activeTab, setActiveTab] = React.useState(tab[0]);
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  React.useEffect(() => {
    // Set the initial active tab based on the current URL
    const currentPath = window.location.pathname;
    if (currentPath.includes("join-clan")) {
      setActiveTab(tab[0]);
    } else if (currentPath.includes("create-clan")) {
      setActiveTab(tab[1]);
    }
  }, []);

  return (
    <div
      className={` w-full h-screen relative`}
      style={{
        backgroundImage: `url('multiplayer/multiplayerBg.svg')`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="w-full h-full bg-[#0B0B0966] absolute inset-0 backdrop-blur-[2px] z-0">

        {/* tab div */}
        <div className="w-full flex px-[40px] items-center">
            <div className="class w-full justify-start py-[4px]">
                <div className="flex w-fit justify-between space-x-6 ">
                    <button onClick={() => handleTabClick(tab[0])} className={`${activeTab === tab[0]? "border-b border-white" : "border-none"} flex items-center justify-center hover:text-white/30 bg-transparent space-x-2 text-white`}>
                        <Image src={"multiplayer/massiveMultiplayer.svg"} width={40} height={40} alt="multiplayer icon" />
                        <span className="text-[18px] font-[400]">Join Clan</span>
                    </button>   
                    <span className="border-r-2 border-white/30 "></span>
                    <button onClick={() => handleTabClick(tab[1])} className={`${activeTab === tab[1]? "border-b border-white" : "border-none"} flex items-center justify-center hover:text-white/30 bg-transparent space-x-2 text-white`}>
                        <Image src={"multiplayer/massiveMultiplayer.svg"} width={40} height={40} alt="multiplayer icon" />
                        <span className="text-[18px] font-[400] ">Create Clan</span>
                    </button> 
                </div>
            </div>
            <div className="flex gap-[24px] px-[5px]">
                <div className="flex gap-[5px] items-center">
                        <span className="text-[#FFE2AF] font-[WorkSans] font-[600] text-[14px]">87,000</span>
                    <Star color="white" size={25} fill="white"/>
                </div>
                <div className="flex gap-[5px] items-center">
                        <span className="text-[#FFE2AF] font-[WorkSans] font-[600] text-[14px]">500</span>
                    <Trophy color="white" size={25} fill="white"/>
                </div>
            </div>
        </div>

        <div className="w-full flex mt-5 justify-center ">
  <AnimatePresence mode="wait">
    {activeTab === tab[0] ? (
      <motion.div
        key="join"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="absolute w-full"
      >
        <JoinClan />
      </motion.div>
    ) : (
      <motion.div
        key="create"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="absolute w-full"
      >
        <CreateClan />
      </motion.div>
    )}
  </AnimatePresence>
</div>

      </div>
    </div>
  );
}
