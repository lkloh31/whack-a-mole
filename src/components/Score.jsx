import { useGame } from "./GameContext";

export default function Score() {
  const { highScore } = useGame();

  return (
    <>
      <ul>
        {highScore === 0 ? (
          <p>None yet... Play the game!</p>
        ) : (
          <li>{highScore}</li>
        )}
      </ul>
    </>
  );
}
