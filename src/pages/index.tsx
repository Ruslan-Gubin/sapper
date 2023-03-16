import { GameLayout } from "@/app";
import { GameSapper } from "@/features";

import styles from "../app/styles/pages/GamePage.module.scss";

export default function GamePage() {
  return (
    <GameLayout title="Game" keywords="Game sapper">
      <GameSapper />
    </GameLayout>
  );
}

