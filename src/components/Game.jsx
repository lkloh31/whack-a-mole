import Field from "./field";
import { useGame } from "./GameContext";

export default function Game() {
  const { handleRestart, score } = useGame();
  return (
    <>
      <div className="scoreBoard">
        <p>Score: {score}</p>
        <p>Time: timeLeft</p>
        <button onClick={() => handleRestart()}>Restart</button>
      </div>
      <Field />
    </>
  );
}
