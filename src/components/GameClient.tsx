"use client";

import React, { useState } from "react";
import Image from "next/image";
import { choices, imageSources } from "./Game";

interface GameClientProps {
  mode: "day" | "night";
}

const GameClient: React.FC<GameClientProps> = ({ mode }) => {
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [score, setScore] = useState({ player: 0, computer: 0 });

  const playGame = (playerSelection: string) => {
    const computerSelection =
      choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(playerSelection);
    setComputerChoice(computerSelection);

    const outcome = getResult(playerSelection, computerSelection);
    setResult(outcome);

    if (outcome === "You Win!") {
      setScore({ ...score, player: score.player + 1 });
    } else if (outcome === "You Lose!") {
      setScore({ ...score, computer: score.computer + 1 });
    }
  };

  const getResult = (player: string, computer: string): string => {
    if (player === computer) {
      return "It's a Tie!";
    }
    if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper")
    ) {
      return "You Win!";
    }
    return "You Lose!";
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setScore({ player: 0, computer: 0 });
  };

  return (
    <div>
      <div className="flex justify-around mt-8 gap-5">
        {choices.map((choice) => (
          <div
            key={choice}
            className="selection"
            onClick={() => playGame(choice)}
          >
            <Image
              src={imageSources[choice].src}
              alt={imageSources[choice].alt}
              width={150}
              height={150}
              className={`rounded-full w-36 h-36 object-cover transition-transform duration-200 cursor-pointer border-transparent border-4 hover:scale-110 ${
                choice === "Rock"
                  ? "hover:border-pink-600 hover:shadow-pink-600 hover:shadow-lg active:scale-95 active:border-pink-400 active:shadow-pink-400"
                  : choice === "Paper"
                  ? "hover:border-blue-500 hover:shadow-blue-500 hover:shadow-lg active:scale-95 active:border-blue-300 active:shadow-blue-300"
                  : "hover:border-yellow-300 hover:shadow-yellow-300 hover:shadow-lg active:scale-95 active:border-yellow-200 active:shadow-yellow-200"
              }`}
            />
          </div>
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div>
          <div
            className={`mt-8 p-6 rounded-lg shadow-md text-center transition-colors duration-300 ${
              mode === "night"
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            <h2 className="text-2xl">Choices Done</h2>
            <p>
              Player Choice:{" "}
              <span
                className={`${
                  playerChoice === "Rock"
                    ? "text-pink-600"
                    : playerChoice === "Paper"
                    ? "text-blue-500"
                    : "text-yellow-300"
                }`}
              >
                {playerChoice}
              </span>
            </p>
            <p>
              Computer Choice:{" "}
              <span
                className={`${
                  computerChoice === "Rock"
                    ? "text-pink-600"
                    : computerChoice === "Paper"
                    ? "text-blue-500"
                    : "text-yellow-300"
                }`}
              >
                {computerChoice}
              </span>
            </p>
          </div>
          <div
            className={`mt-8 p-6 rounded-lg shadow-md text-center transition-colors duration-300 ${
              mode === "night"
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            <h2
              className={`text-2xl ${
                result === "You Win!"
                  ? "text-green-500"
                  : result === "You Lose!"
                  ? "text-red-500"
                  : "text-yellow-500"
              }`}
            >
              {result}
            </h2>
            <h3>
              Player Score:{" "}
              <span className="text-green-500">{score.player}</span>
            </h3>
            <h3>
              Computer Score:{" "}
              <span className="text-red-500">{score.computer}</span>
            </h3>
          </div>
        </div>
      )}

      <br />
      <br />
      <button
        className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-md transition-transform duration-300 mt-4 hover:scale-105"
        onClick={resetGame}
      >
        Reset
      </button>
    </div>
  );
};

export default GameClient;
