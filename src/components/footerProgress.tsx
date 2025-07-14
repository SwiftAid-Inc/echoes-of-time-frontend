"use client"

import React from "react";
import { useState } from "react";
export default function FooterProgress() {
  const [progress, setProgress] = useState(40);
  const [level, setLevel] = useState(5);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletWarning, setWalletWarning] = useState(false);

  const handleMenuClick = (item: string) => {
    setWalletWarning(false);

    if (item === "Game Mode" && !walletConnected) {
      setWalletWarning(true);
    }
  };
  return (
    <section>
      {/* Footer Progress Section */}
      <div className="absolute bottom-10 left-10 z-20 flex items-center gap-4 text-white">
        <div className="relative w-10 h-10">
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
          <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-orange-300">
            {level}
          </div>
        </div>

        <div className="w-64 h-2 bg-orange-900 rounded overflow-hidden">
          <div
            className="h-full bg-orange-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {walletWarning && (
          <div className="text-sm text-white ml-210 max-w-xs">
            ⚠️ Wallet not connected!
          </div>
        )}
      </div>
    </section>
  );
}
