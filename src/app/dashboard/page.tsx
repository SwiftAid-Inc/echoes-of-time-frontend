'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import NewGame from './components/dashboard/StartGame/NewGame';
import SavedGame from './components/dashboard/StartGame/SavedGame';
import Inventory from './components/dashboard/GameMode/Inventory';
import Marketplace from './components/dashboard/GameMode/Marketplace';
import Multiplayer from './components/dashboard/GameMode/Multiplayer';

export default function DashboardPage() {
  const router = useRouter();
  const [activePage, setActivePage] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeSubPage, setActiveSubPage] = useState<string | null>(null);

  const [progress, setProgress] = useState(40);
  const [level, setLevel] = useState(5);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletWarning, setWalletWarning] = useState(false);

  const menuItems = ['Start Game', 'Game Mode', 'Settings', 'Quit'];

  const submenus: Record<string, string[]> = {
    'Start Game': ['New Game', 'Saved Game'],
    'Game Mode': ['Inventory', 'Marketplace', 'Multiplayer'],
  };

  const handleMenuClick = (item: string) => {
    setWalletWarning(false);

    if (item === 'Game Mode' && !walletConnected) {
      setWalletWarning(true);
    }

    setActivePage(item);
    setActiveSubmenu(['Start Game', 'Game Mode'].includes(item) ? item : null);
    setActiveSubPage(null);

    if (item === 'Settings') {
      router.push('/dashboard/components/settings');
    } else if (item === 'Quit') {
      router.push('/dashboard/components/quit');
    }
  };

  const handleSubMenuClick = (parent: string, subItem: string) => {
    if (['Start Game', 'Game Mode'].includes(parent)) {
      setActiveSubPage(subItem);
    }
  };

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Background */}
      <Image
        src="/bg.jpg"
        layout="fill"
        objectFit="cover"
        alt="Dashboard background"
        className="z-0"
      />

      {/* Left Gradient Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="w-[80%] h-full bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
      </div>

      {/* Top Right HUD */}
      <div className="absolute top-6 right-10 z-20 flex items-center gap-6 text-white">
        <div className="flex items-center gap-1 px-2 py-1 rounded">
          <span>🔥</span>
          <span>87,000</span>
        </div>
        <div className="flex items-center gap-2 px-2 py-1 rounded">
          <span>🏆</span>
          <span>{level}</span>
        </div>
        <button
          className="bg-[#8B4513] px-4 py-1 rounded text-white text-sm hover:bg-[#9b6f4f]"
          onClick={() => {
            setWalletConnected(true);
            setWalletWarning(false);
          }}
        >
          {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
        </button>
      </div>

      {/* Menu */}
      <div className="absolute top-1/4 left-16 z-20 flex flex-col gap-4">
        {menuItems.map((item) => (
          <div
            key={item}
            className="relative p-1 border-2 border-[#57341b] bg-transparent"
          >
            <button
              onClick={() => handleMenuClick(item)}
              className={`w-100 text-left px-6 py-3 text-white bg-[#57341b] bg-opacity-70 border ${
                activePage === item ? 'border-none bg-[#a26e33f6]' : 'border-transparent'
              } hover:bg-[#a26e33f6]`}
            >
              {item}
            </button>

            {/* Submenu */}
            {submenus[item] && activeSubmenu === item && (
              <div className="absolute top-0 left-full ml-4 flex flex-col gap-2 z-30">
                {submenus[item].map((subItem) => (
                  <div key={subItem} className="p-1 border-2 border-[#57341b] bg-transparent">
                    <button
                      onClick={() => handleSubMenuClick(item, subItem)}
                      className={`text-left px-6 py-3 text-white w-100 border-none bg-opacity-70 border ${
                        activeSubPage === subItem ? 'bg-[#a26e33f6]' : ''
                      } hover:bg-[#a26e33f6]`}
                    >
                      {subItem}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Component Rendering */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        {activePage === 'Start Game' && activeSubPage === 'New Game' && <NewGame />}
        {activePage === 'Start Game' && activeSubPage === 'Saved Game' && <SavedGame />}
        {activePage === 'Game Mode' && activeSubPage === 'Inventory' && <Inventory />}
        {activePage === 'Game Mode' && activeSubPage === 'Marketplace' && <Marketplace />}
        {activePage === 'Game Mode' && activeSubPage === 'Multiplayer' && <Multiplayer />}
      </div>

      {/* Footer Progress Section */}
      <div className="absolute bottom-10 left-10 z-20 flex items-center gap-4 text-white">
        <div className="relative w-10 h-10">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
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
              strokeDasharray={`${progress}, 100`}
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-orange-300">
            {level}
          </div>
        </div>

        <div className="w-64 h-2 bg-orange-900 rounded overflow-hidden">
          <div className="h-full bg-orange-500" style={{ width: `${progress}%` }}></div>
        </div>

        {walletWarning && (
          <div className="text-sm text-white ml-210 max-w-xs">
            ⚠️ Wallet not connected!
          </div>
        )}
      </div>
    </div>
  );
}
