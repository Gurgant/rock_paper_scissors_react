"use client";

import Image from "next/image";

interface ToggleSwitchProps {
  mode: "day" | "night";
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ mode, onToggle }) => {
  return (
    <label className="relative inline-block w-32 h-16">
      <div
        className={`absolute inset-0 rounded-full transition-all duration-500 bg-gray-900 ${
          mode === "night"
            ? "border-2 border-pink-400"
            : "border-2 border-blue-400"
        }`}
      ></div>

      {/* Smaller slider */}
      <span
        className={`absolute w-12 h-12 rounded-full transition-all duration-500 ${
          mode === "night"
            ? "bg-gray-900 translate-x-16"
            : "bg-gray-900 translate-x-0"
        } z-10 top-2 left-2`}
      ></span>

      {/* Sun Image */}
      <span
        className={`absolute transition-all duration-[600ms] ${
          mode === "night"
            ? "left-[9rem] opacity-0 delay-200"
            : "left-[4.0rem] opacity-100"
        } z-20`}
      >
        <Image
          src="/images/sun.png"
          alt="sun"
          width={60}
          height={60}
          quality={100}
          className="w-[65px] h-[65px] object-cover rounded-full"
        />
      </span>

      {/* Moon Image */}
      <span
        className={`absolute transition-all duration-[600ms]  ${
          mode === "night"
            ? "left-[0.01rem] opacity-100"
            : "-left-[3.5rem] opacity-0 delay-200"
        } z-20`}
      >
        <Image
          src="/images/moon.png"
          alt="moon"
          width={60}
          height={60}
          quality={100}
          className="w-[65px] h-[65px] object-cover rounded-full"
        />
      </span>

      <input
        type="checkbox"
        checked={mode === "night"}
        onChange={onToggle}
        className="hidden"
      />
    </label>
  );
};

export default ToggleSwitch;
