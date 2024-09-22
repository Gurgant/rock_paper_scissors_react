// src/app/page.tsx
"use client";

import { useState } from "react";
import ToggleSwitch from "@/components/ToggleSwitch";
import Game from "@/components/Game";

export default function Home() {
  const [mode, setMode] = useState<"day" | "night">("day");

  const handleToggle = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "day" ? "night" : "day";
      document.body.classList.remove(`${prevMode}-mode`);
      document.body.classList.add(`${newMode}-mode`);
      return newMode;
    });
  };

  return (
    <div className="container mx-auto p-6">
      <ToggleSwitch mode={mode} onToggle={handleToggle} />
      <Game mode={mode} />
    </div>
  );
}
