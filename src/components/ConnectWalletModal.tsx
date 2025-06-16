"use client";
import React from "react";
interface ConnectWalletModalProps {
  open: boolean;
  onClose: () => void;
  onConnect: () => void;
  onGuest: () => void;
}
export default function ConnectWalletModal({
  open,
  onClose,
  onConnect,
  onGuest,
}: ConnectWalletModalProps) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/60"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      {" "}
      <div
        className="flex flex-col items-center w-full max-w-sm px-8"
        onClick={(e) => e.stopPropagation()}
      >
        {" "}
        <div className="relative p-1 border-2 border-[#825200] bg-transparent mb-4 w-[375px] h-[58px] flex items-center justify-center">
          {" "}
          <button
            className="w-full h-full bg-[#825200] hover:bg-[#E0BA00] text-white font-bold rounded text-base tracking-wide shadow border-none outline-none focus:outline-none"
            onClick={onConnect}
          >
            {" "}
            Connect Wallet{" "}
          </button>{" "}
        </div>{" "}
        <button
          className="w-[375px] h-[58px] bg-transparent text-[#F5CEA9] font-bold rounded border-2 border-[#7A5A2F] hover:bg-[#57341b] transition-colors text-base tracking-wide shadow"
          onClick={onGuest}
        >
          {" "}
          Continue as Guest{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}
