"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, ArrowLeft } from "lucide-react";

const navItems = [
  { name: "Mission", href: "#", active: false },
  { name: "Artifacts", href: "#", active: false },
  { name: "Marketplace", href: "#", active: true },
  { name: "Skills", href: "#", active: false },
  { name: "Multiplayer", href: "#", active: false },
  { name: "Maps", href: "#", active: false },
];

export default function Navigation() {
  const [notifications, setNotifications] = useState(0);

  return (
    <nav className="border-b border-[#655334] px-12 py-6 flex justify-between items-center backdrop-blur-sm bg-[#0F0700]">
      <div className="flex items-center gap-6">
        <Link
          href="#"
          className="text-[#B78846] font-bold text-lg flex items-center gap-2"
        >
          <div className="flex items-center justify-center w-6 h-6">
            <ArrowLeft className="h-5 w-5 text-[#B78846]" />
          </div>
          BACK
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-12">
        <div className="flex items-center gap-4">
          <div className="bg-white text-black text-xs px-2 py-1 rounded font-bold">
            L1
          </div>
          <Link
            href={navItems[0].href}
            className={`${
              navItems[0].active ? "text-white" : "text-[#8A8A8A]"
            } hover:text-white transition-colors font-medium`}
          >
            {navItems[0].name}
          </Link>
        </div>

        {navItems.slice(1, -1).map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`${
              item.active ? "text-white" : "text-[#8A8A8A]"
            } hover:text-white transition-colors font-medium`}
          >
            {item.name}
          </Link>
        ))}

        <div className="flex items-center gap-4">
          <Link
            href={navItems[navItems.length - 1].href}
            className={`${
              navItems[navItems.length - 1].active
                ? "text-white"
                : "text-[#8A8A8A]"
            } hover:text-white transition-colors font-medium`}
          >
            {navItems[navItems.length - 1].name}
          </Link>
          <div className="bg-white text-black text-xs px-2 py-1 rounded font-bold">
            R1
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Bell className="h-6 w-6 text-white" />
          <span className="absolute rounded-full flex items-center justify-center font-bold text-xs text-white bg-[#FFC867] h-5 w-5 -top-2 -right-2">
            0
          </span>
        </div>
      </div>
    </nav>
  );
}
