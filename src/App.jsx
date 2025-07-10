import { useGame } from "./components/GameContext";
import Welcome from "./components/welcome";
import Game from "./components/Game";

export default function App() {
  const { isPlaying } = useGame();
  return (
    <>
      <h1>Whack a Mole</h1>
      {!isPlaying ? <Welcome /> : <Game />}
    </>
  );
}
