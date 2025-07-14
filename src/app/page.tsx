"use client";

import LoadingScreen from "@/components/LoadingScreen";
import StartScreen from "@/components/StartScreen";
import HowItBegan from "@/components/HowItBegan";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [currentScreen, setCurrentScreen] = useState("loading");
  const router = useRouter(); 

  useEffect(() => {
    // Handle loading screen progress and auto-advance to start screen
    if (currentScreen === "loading") {
      const duration = 5000; 
      const interval = 50; 
      const steps = duration / interval;
      const increment = 100 / steps;
      let currentProgress = 0;

      const timer = setInterval(() => {
        currentProgress += increment;
        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(timer);
          setCurrentScreen("start"); 
        }
        setProgress(Math.min(Math.round(currentProgress), 100));
      }, interval);

      return () => clearInterval(timer);
    }
  }, [currentScreen]);

  useEffect(() => {
    interface KeyDownEvent {
      key: string;
    }

    type ScreenType = "loading" | "start" | "how it began";

    const handleKeyDown = (e: KeyDownEvent) => {
      if (e.key === "Enter") {
      if (currentScreen === "start") {
        setCurrentScreen("how it began");
      }
        else if (currentScreen === "how it began") {
          router.push("/dashboard"); 
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentScreen, router]);

  return (
    <>
      {currentScreen === "loading" && <LoadingScreen progressLoading={progress} />}
      {currentScreen === "start" && <StartScreen />}
      {currentScreen === "how it began" && <HowItBegan />}
    </>
  );
}