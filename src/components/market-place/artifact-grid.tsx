"use client";
import Image from "next/image";
import type { ArtifactType } from "./marketplace-screen";

interface ArtifactGridProps {
  onSelectArtifact: (artifact: ArtifactType) => void;
  selectedArtifact: ArtifactType | null;
}

// Create multiple sample artifacts for demonstration
const sampleArtifacts: ArtifactType[] = [
  {
    id: "1",
    name: "Stone of Besia",
    era: "EGYPT",
    description: "This item is used to fill in or complete an puzzle lost.",
    value: 20,
    stock: 16,
    image: "/cart-item.png",
  },
  {
    id: "2",
    name: "Golden Scarab",
    era: "EGYPT",
    description:
      "A mystical scarab beetle made of pure gold, used in ancient rituals.",
    value: 45,
    stock: 8,
    image: "/cart-item.png",
  },
  {
    id: "3",
    name: "Crystal Orb",
    era: "ATLANTIS",
    description: "A mysterious crystal orb that glows with inner light.",
    value: 75,
    stock: 3,
    image: "/cart-item.png",
  },
  {
    id: "4",
    name: "Ancient Scroll",
    era: "ROME",
    description: "A well-preserved scroll containing ancient knowledge.",
    value: 30,
    stock: 12,
    image: "/cart-item.png",
  },
  {
    id: "5",
    name: "Jade Mask",
    era: "MAYA",
    description: "A ceremonial mask carved from precious jade stone.",
    value: 60,
    stock: 5,
    image: "/cart-item.png",
  },
];

export default function ArtifactGrid({
  onSelectArtifact,
  selectedArtifact,
}: ArtifactGridProps) {
  // Create a grid of 20 items (5x4) with some artifacts and some empty slots
  const gridItems = Array(20)
    .fill(null)
    .map((_, index) => {
      // Use sample artifacts for the first 5 items
      if (index < sampleArtifacts.length) {
        return sampleArtifacts[index];
      }
      return {
        id: `empty-${index}`,
        name: "",
        era: "",
        description: "",
        value: 0,
        stock: 0,
      };
    });

  return (
    <div>
      <div className="flex justify-center mb-6">
        <button className="px-6 py-2 text-white">Filter</button>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {gridItems.map((item, index) => (
          <div
            key={item.id}
            className={`aspect-square border ${
              selectedArtifact?.id === item.id
                ? "border-[#B78846]"
                : "border-[#1A1A1A]"
            } cursor-pointer hover:border-[#B78846]/50 transition-colors p-2`} // Added p-2 for padding
            onClick={() => item.name && onSelectArtifact(item)}
          >
            {item.image && (
              <div className="w-full h-full relative">
                <Image
                  src={item.image}
                  alt={item.name || "Artifact image"}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
