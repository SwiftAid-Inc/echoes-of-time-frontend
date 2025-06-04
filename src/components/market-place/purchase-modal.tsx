"use client";

import type { ArtifactType } from "./marketplace-screen";
import { ThumbsUp } from "lucide-react";

interface PurchaseModalProps {
  state: "idle" | "processing" | "success";
  artifact: ArtifactType | null;
  onClose: () => void;
  onViewItem: () => void;
}

export default function PurchaseModal({
  state,
  artifact,
  onClose,
  onViewItem,
}: PurchaseModalProps) {
  return (
    <div
      className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={(e) => {
        // Only close when showing success message, not during processing
        if (state === "success") {
          onClose();
        }
      }}
    >
      <div
        className="relative w-full max-w-lg"
        onClick={(e) => e.stopPropagation()} // Prevent clicks on modal from closing it
      >
        <div className="border border-[#825200CC] bg-[#2A1B02]/95 backdrop-blur-md p-8 rounded-lg shadow-2xl">
          {state === "processing" && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-[#B78846] mb-6"></div>
              <p className="text-center text-base uppercase tracking-wider text-[#F0DCBF] font-medium">
                "PROCESSING YOUR PURCHASE ON THE BLOCKCHAIN..."
              </p>
            </div>
          )}

          {state === "success" && (
            <div className="flex flex-col items-center justify-center py-10">
              <ThumbsUp className="h-10 w-10 text-[#B78846] mb-6" />
              <p className="text-center mb-2 text-[#F0DCBF]">
                You have successfully purchased
              </p>
              <p className="text-center font-bold mb-10  text-xl">
                "{artifact?.name}"
              </p>

              <div className="flex gap-2 w-full">
                <button
                  onClick={onViewItem}
                  className="flex-[3] bg-[#A55E1DCC] text-white py-4 rounded-md font-bold hover:bg-[#ff9d42cc]  transition-colors shadow-lg cursor-pointer"
                >
                  View Item
                </button>
                <button
                  onClick={onClose}
                  className="flex-[1] border border-[#B78846] text-[#B78846] py-4 rounded-md font-bold hover:bg-[#3F2F15] transition-colors cursor-pointer"
                >
                  Share
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
