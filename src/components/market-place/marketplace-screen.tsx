"use client";

import { useState } from "react";
import { ShoppingCart, DollarSign } from "lucide-react";
import ArtifactGrid from "./artifact-grid";
import ArtifactInfo from "./artifact-info";
import PurchaseModal from "./purchase-modal";
import Image from "next/image";

export type ArtifactType = {
  id: string;
  name: string;
  era: string;
  description: string;
  value: number;
  stock: number;
  image?: string;
};

export default function MarketplaceScreen() {
  const [activeTab, setActiveTab] = useState<"buy" | "sell">("buy");
  const [selectedArtifact, setSelectedArtifact] = useState<ArtifactType | null>(
    null
  );
  const [purchaseState, setPurchaseState] = useState<
    "idle" | "processing" | "success"
  >("idle");
  const [showModal, setShowModal] = useState(false);

  const handleTabChange = (tab: "buy" | "sell") => {
    setActiveTab(tab);
    setSelectedArtifact(null);
  };

  const handleSelectArtifact = (artifact: ArtifactType) => {
    setSelectedArtifact(artifact);
  };

  const handleBuyItem = () => {
    setShowModal(true);
    setPurchaseState("processing");

    // Simulate blockchain processing
    setTimeout(() => {
      setPurchaseState("success");
    }, 2000);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setPurchaseState("idle");
  };

  const handleViewItem = () => {
    setShowModal(false);
    setPurchaseState("idle");
    // Additional logic for viewing the item could go here
  };

  return (
    <div>
      <div className="flex  text-white">
        <button
          className={`px-8 py-4 font-medium flex items-center cursor-pointer ${
            activeTab === "buy" ? "text-white" : "text-[#4D4D4D]"
          }`}
          onClick={() => handleTabChange("buy")}
        >
          <Image
            src="/massiveMultiplayer.png"
            alt="Buy icon"
            width={40}
            height={40}
            className="mr-2"
          />
          Buy Artifacts
        </button>

        <div className="w-px bg-[#1A1A1A]"></div>

        <button
          className={`px-8 py-4 font-medium flex items-center cursor-pointer ${
            activeTab === "sell" ? "text-white" : "text-[#4D4D4D]"
          }`}
          onClick={() => handleTabChange("sell")}
        >
          <Image
            src="/doublePlayer.png"
            alt="Sell icon"
            width={40}
            height={40}
            className="mr-2 "
          />
          Sell Artifacts
        </button>

        <div className="ml-auto flex items-center space-x-8 px-6">
          <div className="flex items-center">
            <span className="text-[#FFE2AF] font-bold">87000</span>
            <Image
              src="/star-icon.png"
              alt="Gold icon"
              width={30}
              height={30}
              className="ml-2"
            />
          </div>
          <div className="flex items-center">
            <span className="text-[#FFE2AF] font-bold">500</span>
            <Image
              src="/cup-icon.png"
              alt="Silver icon"
              width={30}
              height={30}
              className="ml-2"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <ArtifactGrid
            onSelectArtifact={handleSelectArtifact}
            selectedArtifact={selectedArtifact}
          />
        </div>
        <div>
          <ArtifactInfo artifact={selectedArtifact} onBuyItem={handleBuyItem} />
        </div>
      </div>

      {showModal && (
        <PurchaseModal
          state={purchaseState}
          artifact={selectedArtifact}
          onClose={handleCloseModal}
          onViewItem={handleViewItem}
        />
      )}
    </div>
  );
}
