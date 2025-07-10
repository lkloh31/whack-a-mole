import { useGame } from "./GameContext";

export default function Field() {
  const { NUM_HOLES, moleIndex, whackMole } = useGame();

  return (
    <ul className="field">
      {Array.from({ length: NUM_HOLES }).map((_, i) => (
        <li
          key={i}
          className={`hole${i === moleIndex ? " mole" : ""}`}
          onClick={() => whackMole(i)}
        ></li>
      ))}
    </ul>
  );
}
