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
        <h2 className="text-2xl font-bold mb-6 text-white text-center border-b pb-3 border-[#655334]">
          Information
        </h2>

        <p className="text-[#8A8A8A]">
          Select the artifact you choose to sell.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-white text-center border-b pb-3 border-[#655334]">
        Information
      </h2>

      <h3 className="text-3xl font-bold  mb-2">{artifact.name}</h3>
      <p className="text-[#FFDEA1] mb-4">ERA: {artifact.era}</p>

      <p className=" mb-6">{artifact.description}</p>

      <div className="flex justify-between mb-8">
        <div>
          <p className=" mb-2">VALUE</p>
          <p className="text-xl font-bold text-white">${artifact.value}</p>
        </div>
        <div>
          <p className=" mb-2">STOCK</p>
          <div className="bg-[#a55e1dcc] rounded-full px-4 py-1 text-center font-bold text-white">
            {artifact.stock}
          </div>
        </div>
      </div>

      <button
        onClick={onBuyItem}
        className="w-full bg-[#a55e1dcc] text-white py-4 rounded font-bold hover:bg-[#ff9d42cc] transition-colors shadow-lg cursor-pointer"
      >
        Buy Item (${artifact.value})
      </button>
    </div>
  );
}
