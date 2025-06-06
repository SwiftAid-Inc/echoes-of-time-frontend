import type React from "react";
import Navigation from "./navigation";

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen relative text-white flex flex-col">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/marketPlace-bg.jpg')",
        }}
      />

      {/* Dark Overlay for Content Visibility */}
      <div className="fixed inset-0 bg-black/85" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
      </div>
    </div>
  );
}
