import { useGameSapperContext } from "../../libs/context/GameSapperContext";
import { formatterTime } from "../../libs/utils/timeFormat";

import styles from './SapperInfoGame.module.scss';

const SapperInfoGame = () => {
  const { timeGame, handleNewGame, gameProgress, flagCount } = useGameSapperContext()

  return (
    <section className={styles.root}>
      <div className={styles.game__info_container}>

      <span className={styles.flagCount}>Flag: {flagCount}</span>
      <button onClick={handleNewGame} className={styles.btn__newGame}>New Game</button>
      <span className={styles.time}>Time: {formatterTime.format(timeGame)}</span>
      </div>
      {gameProgress.result === 'win' && 
      <h2 className={styles.victory}>Victory !!!</h2>
      }  
      {gameProgress.result === 'loss' && 
      <h2 className={styles.loss}>You Loss</h2>
      } 
    </section>
  );
};

export  { SapperInfoGame };