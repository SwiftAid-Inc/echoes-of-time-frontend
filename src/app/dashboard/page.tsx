'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import NewGame from '../../components/dashboard/StartGame/NewGame';
import SavedGame from '../../components/dashboard/StartGame/SavedGame';
import Inventory from '../../components/dashboard/GameMode/Inventory';
import Marketplace from '../../components/dashboard/GameMode/Marketplace';
import Multiplayer from '../../components/dashboard/GameMode/Multiplayer';

export default function DashboardPage() {
  const [activePage, setActivePage] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeSubPage, setActiveSubPage] = useState<string | null>(null);
  const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null);


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
  };

  const handleSubMenuClick = (parent: string, subItem: string) => {
    if (['Start Game', 'Game Mode'].includes(parent)) {
      setActiveSubPage(subItem);
    }
  };

  return (
    <div className="relative w-screen h-screen bg-transparent overflow-hidden">
      {/* Background */}
   

      {/* Left Gradient Overlay */}
    

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

            {/* Animated Submenu */}
            <AnimatePresence>
              {submenus[item] && activeSubmenu === item && (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    ease: "easeOut",
                    staggerChildren: 0.1
                  }}
                  className="absolute top-0 left-full ml-4 flex flex-col gap-2 z-30"
                >
                  {submenus[item].map((subItem, index) => (
                    <motion.div
                      key={subItem}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.05,
                        ease: "easeOut"
                      }}
                      className="relative p-1 border-2 border-[#57341b] bg-transparent"
                    >
                      <button
                        onClick={() => handleSubMenuClick(item, subItem)}
                        onMouseEnter={() => setHoveredSubItem(subItem)}
                        onMouseLeave={() => setHoveredSubItem(null)}
                        className={`relative text-left px-6 py-3 text-white w-100 border-none bg-opacity-70 border transition-colors duration-200 ${
                          activeSubPage === subItem ? 'border-[#57341b]' : 'bg-transparent'
                        } hover:bg-[#a26e33f6]`}
                      >
                        {subItem}
                        
                        {/* Hover Motion Indicator */}
                        <AnimatePresence>
                          {hoveredSubItem === subItem && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ 
                                duration: 0.2,
                                ease: "easeOut"
                              }}
                              className="absolute right-4 top-1/2 -translate-y-1/2"
                            >
                              <div className="relative w-6 h-6">
                                {/* Outer pulsing ring - extends beyond container */}
                                <motion.div
                                  animate={{ 
                                    scale: [1, 1.4, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                  className="absolute -inset-1 border-2 border-white rounded-full"
                                />
                                {/* Middle pulsing ring */}
                                <motion.div
                                  animate={{ 
                                    scale: [1, 1.2, 1],
                                    opacity: [0.4, 0.7, 0.4]
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.3
                                  }}
                                  className="absolute inset-0.5 border-2 border-white rounded-full"
                                />
                                {/* Inner solid circle */}
                                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Component Rendering with Slide Animation */}
      <AnimatePresence mode="wait">
        {activePage === 'Start Game' && activeSubPage === 'New Game' && (
          <motion.div
            key="newgame"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <NewGame />
          </motion.div>
        )}
        {activePage === 'Start Game' && activeSubPage === 'Saved Game' && (
          <motion.div
            key="savedgame"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <SavedGame />
          </motion.div>
        )}
        {activePage === 'Game Mode' && activeSubPage === 'Inventory' && (
          <motion.div
            key="inventory"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <Inventory />
          </motion.div>
        )}
        {activePage === 'Game Mode' && activeSubPage === 'Marketplace' && (
          <motion.div
            key="marketplace"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <Marketplace />
          </motion.div>
        )}
        {activePage === 'Game Mode' && activeSubPage === 'Multiplayer' && (
          <motion.div
            key="multiplayer"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <Multiplayer />
          </motion.div>
        )}
        {activePage === 'Settings' && (
          <motion.div
            key="settings"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl z-30"
          >
            ⚙️ Settings coming soon...
          </motion.div>
        )}
        {activePage === 'Quit' && (
          <motion.div
            key="quit"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl z-30"
          >
            👋 Are you sure you want to quit?
          </motion.div>
        )}
      </AnimatePresence>

     
    </div>
  );
}