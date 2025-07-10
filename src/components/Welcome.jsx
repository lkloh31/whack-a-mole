import { useGame } from "./GameContext";
import Score from "./Score";

export default function Welcome() {
  const { handleStartGame } = useGame();
  return (
    <>
      <section className="welcome">
        <p>Welcome to Whack a Mole!</p>
        <p>Whack a mole to earn points.</p>
        <p>How many can you get?</p>
        <button onClick={() => handleStartGame()}>Play</button>
      </section>
      <section className="highscores">
        <h2>High Scores</h2>
        <Score></Score>
      </section>
    </>
  );
}
