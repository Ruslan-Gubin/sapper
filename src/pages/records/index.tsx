import { GameLayout } from "@/app";
import { GameRecords } from "@/widgets";


const  GameRecordsPage = () => {
  return (
    <GameLayout title='Options' keywords='Game options'>
      <GameRecords />
    </GameLayout>
  );
};

export default GameRecordsPage;