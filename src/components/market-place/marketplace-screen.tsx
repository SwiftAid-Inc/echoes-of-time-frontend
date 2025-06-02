"use client";

import { useState } from "react";
import { ShoppingCart, DollarSign } from "lucide-react";
import ArtifactGrid from "./artifact-grid";
import ArtifactInfo from "./artifact-info";
import PurchaseModal from "./purchase-modal";

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
      <div className="flex border-b border-[#1A1A1A]">
        <button
          className={`px-8 py-4 font-medium flex items-center gap-2 ${
            activeTab === "buy" ? "text-white" : "text-[#4D4D4D]"
          }`}
          onClick={() => handleTabChange("buy")}
        >
          <ShoppingCart className="h-4 w-4" />
          Buy Artifacts
        </button>
        <button
          className={`px-8 py-4 font-medium flex items-center gap-2 ${
            activeTab === "sell" ? "text-white" : "text-[#4D4D4D]"
          }`}
          onClick={() => handleTabChange("sell")}
        >
          <DollarSign className="h-4 w-4" />
          Sell Artifacts
        </button>

        <div className="ml-auto flex items-center space-x-8 px-6">
          <div className="text-[#B78846] font-bold">87000</div>
          <div className="text-white font-bold">500</div>
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
