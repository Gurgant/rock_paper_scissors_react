// import Image from "next/image";
import getConfig from "next/config";
import GameClient from "./GameClient"; // Import client-side component

const { publicRuntimeConfig = {} } = getConfig() || {}; // Extract basePath
const basePath = publicRuntimeConfig.basePath || ""; // Set basePath or empty string if not provided

export const choices = ["Rock", "Paper", "Scissors"] as const;

export const imageSources: Record<
  (typeof choices)[number],
  { src: string; alt: string }
> = {
  Rock: {
    src: `${basePath}/images/resize_images/rock.png`,
    alt: "rock",
  },
  Paper: {
    src: `${basePath}/images/resize_images/paper.png`,
    alt: "paper",
  },
  Scissors: {
    src: `${basePath}/images/resize_images/scissors.png`,
    alt: "scissors",
  },
};

interface GameProps {
  mode: "day" | "night";
}

// Server Component
const Game = ({ mode }: GameProps) => {
  return (
    <div
      className={`relative text-center p-10 rounded-xl shadow-lg max-w-4xl w-11/12 mx-auto mt-20 transition-transform duration-300 ${
        mode === "night" ? "bg-darkgray" : "bg-white text-gray-800"
      }`}
    >
      <h1
        className={`text-4xl font-bold mb-8 transition-colors duration-300 hover:text-blue-500 ${
          mode === "night" ? "text-white" : "text-gray-800"
        }`}
      >
        Rock Paper Scissors Game
      </h1>
      <h2 className="text-2xl text-pink-600 font-bold mb-4">
        Make your selection:
      </h2>
      {/* Delegate game logic to the client-side component */}
      <GameClient mode={mode} />
    </div>
  );
};

export default Game;
