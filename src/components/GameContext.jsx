import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const NUM_HOLES = 9;
  const [moleIndex, setMoleIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState();

  const generateMole = () => {
    if (!isPlaying) return;
    const newMoleIndex = Math.floor(Math.random() * NUM_HOLES);
    setMoleIndex(newMoleIndex);
  };

  const whackMole = (holeIndex) => {
    if (holeIndex === moleIndex && isPlaying) {
      setScore(score + 1);
      generateMole();
    }
  };

  const handleStartGame = () => {
    setScore(0);
    setIsPlaying(true);
    const firstMoleIndex = Math.floor(Math.random() * NUM_HOLES);
    setMoleIndex(firstMoleIndex);
  };

  const handleGameEnd = (finalScore) => {
    highScore = score;
    setIsPlaying(false);
  };

  const handleRestart = () => {
    setHighScore(score);
    setIsPlaying(false);
  };

  const value = {
    NUM_HOLES,
    moleIndex,
    isPlaying,
    score,
    highScore,
    generateMole,
    whackMole,
    handleStartGame,
    handleGameEnd,
    handleRestart,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);

  if (!context)
    throw Error("useGame must be used within a GameContext Provider");
  return context;
}
