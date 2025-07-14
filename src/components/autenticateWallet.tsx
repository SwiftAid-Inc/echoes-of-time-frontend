"use client";
import Image from "next/image";
import { useState } from "react";
import { Flame, BellDot } from "lucide-react";
import ConnectWalletModal from "@/components/ConnectWalletModal";

const menuItems = ["Start Game", "Game Mode", "Settings", "Quit"];

export default function AuthenticateWalletIntegration() {
  // Use the same state as dashboard for demonstration
  const [progress] = useState(60); // or 40 for exact match
  const [level] = useState(5);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className=" min-h-fit bg-transparent w-full overflow-hidden z-10  ">

      {/* Top Bar */}
      <div className=" w-full flex flex-col sm:flex-row justify-between sm:justify-end items-center px-4 sm:px-8 py-3 sm:py-4  gap-3 sm:gap-6">
        {/* Flame Icon and Number (no background, no button) */}
        <div className="flex items-center gap-2 sm:gap-4 order-2 sm:order-1">
          <div className="flex items-center gap-1 sm:gap-2">
            <Flame
              size={32}
              stroke="#F5CEA9"
              fill="#7F3E0C"
              className="-ml-1 w-7 h-7 sm:w-9 sm:h-9"
            />
            <span className="text-white text-sm sm:text-lg font-medium">
              87,000
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Flame
              size={32}
              stroke="#F5CEA9"
              fill="#7F3E0C"
              className="-ml-1 w-7 h-7 sm:w-9 sm:h-9"
            />
            <span className="text-white text-sm sm:text-lg font-medium">5</span>
          </div>
          {/* Notification Bell */}
          <BellDot
            size={32}
            stroke="#F5CEA9"
            className="ml-2 sm:ml-4 w-7 h-7 sm:w-9 sm:h-9"
          />
        </div>

        {/* Log in Button */}
        <button
          className="bg-[#A05A1C] hover:bg-[#a26e33f6] text-white font-bold w-full sm:w-[243px] h-[41px] px-[16px] sm:px-[20px] py-[10px] rounded shadow transition-colors text-sm sm:text-base order-1 sm:order-2"
          onClick={() => setShowModal(true)}
        >
          Log in with Cartridge
        </button>
      </div>

      {/* Footer Progress Section (Dashboard Style)
      <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 right-4 sm:right-auto z-20 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-white">
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 36 36"
          >
            <path
              className="text-orange-900"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-orange-500"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="40, 100"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-bold text-orange-300">
            {level}
          </div>
        </div>

        <div className="w-full sm:w-64 h-2 bg-orange-900 rounded overflow-hidden">
          <div
            className="h-full bg-orange-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div> */}

      <ConnectWalletModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onConnect={() => setShowModal(false)}
        onGuest={() => setShowModal(false)}
      />
    </div>
  );
}
