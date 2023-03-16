import { FC } from 'react';
import { useSelector } from 'react-redux';
import {  selectSapperAction } from '../../libs';
import { useGameSapperContext } from '../../libs/context/GameSapperContext';
import { ISapperBoardProps } from '../../libs/types/ISapperBoard';
import { SapperField } from '../SapperField';

import styles from './SapperBoard.module.scss';


const SapperBoard: FC<ISapperBoardProps> = ({ }) => {
  const { widthBoard, heightBoard, board, sizeField } = useGameSapperContext()
  const {  } = useSelector(selectSapperAction)

  
  return (
    <div className={styles.root}>
      <ul className={styles.game__board} style={{width: widthBoard, height: heightBoard}}>
      {board.map(field => 
        <li key={field.id} className={styles.game__item} style={{width: sizeField - 2, height: sizeField}}>
          <SapperField  field={field} />
        </li>
        )}
      </ul>
    </div>
  );
};

export { SapperBoard };
