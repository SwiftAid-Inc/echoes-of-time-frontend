"use client";

import type { ArtifactType } from "./marketplace-screen";

interface ArtifactInfoProps {
  artifact: ArtifactType | null;
  onBuyItem: () => void;
}

export default function ArtifactInfo({
  artifact,
  onBuyItem,
}: ArtifactInfoProps) {
  if (!artifact) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-white">Information</h2>
        <p className="text-[#8A8A8A]">
          Select the artifact you choose to sell.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-white">Information</h2>

      <h3 className="text-3xl font-bold text-[#B78846] mb-2">
        {artifact.name}
      </h3>
      <p className="text-[#8A8A8A] mb-4">ERA: {artifact.era}</p>

      <p className="text-[#CCCCCC] mb-6">{artifact.description}</p>

      <div className="flex justify-between mb-8">
        <div>
          <p className="text-[#8A8A8A] mb-2">VALUE</p>
          <p className="text-xl font-bold text-white">${artifact.value}</p>
        </div>
        <div>
          <p className="text-[#8A8A8A] mb-2">STOCK</p>
          <div className="bg-[#B78846] rounded-full px-4 py-1 text-center font-bold text-white">
            {artifact.stock}
          </div>
        </div>
      </div>

      <button
        onClick={onBuyItem}
        className="w-full bg-[#B78846] text-white py-4 rounded font-bold hover:bg-[#A67A3D] transition-colors shadow-lg"
      >
        Buy Item (${artifact.value})
      </button>
    </div>
  );
}
