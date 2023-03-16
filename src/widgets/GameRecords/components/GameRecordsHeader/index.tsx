import { IGameRecordHeaderProps } from '../../types/IGameRecordHeaderProps';
import styles from './GameRecordsHeader.module.scss';


const GameRecordsHeader = ({activeName, changeName}: IGameRecordHeaderProps) => {


  return (
    <section className={styles.root}>
      <nav className={styles.nav__container}>
          <h2 onClick={() => changeName('easy')} className={activeName === 'easy' ? styles.active : ''}>Easy</h2>
          <h2 onClick={() => changeName('normal')} className={activeName === 'normal' ? styles.active : ''}>Normal</h2>
          <h2 onClick={() => changeName('hard')} className={activeName === 'hard' ? styles.active : ''}>Hard</h2>
      </nav>
    </section>
  );
};

export  { GameRecordsHeader };