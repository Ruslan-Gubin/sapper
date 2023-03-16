import { FC } from "react";
import Image from "next/image";
import { COLOR__MAP } from "../../libs/constants/colorNumber";
import { sapperIcons } from "../../libs/data/sapperIcons";
import { ISapperFieldProps } from "../../libs/types/ISapperFieldProps";
import { useGameSapperContext } from "../../libs/context/GameSapperContext";

import styles from './SapperField.module.scss';

const SapperField: FC<ISapperFieldProps> = ({ field }) => {
  const { lostId ,handleClickField, handleContextMenu, sizeField } = useGameSapperContext()

  const mapIconsField = {
    privat: '',
    transparent: '',
    flag: sapperIcons.flag,
    question: sapperIcons.question,
    bomb: sapperIcons.bomb,
  }

  return (
    <div onClick={() => handleClickField(field.id)} className={styles.root} style={{color: 'darkblue'}}>
      {field.state !== 'transparent' &&  
      <div style={{height: sizeField}} onContextMenu={(e) => handleContextMenu(e, field.id)} className={styles.field__privat}>
        {field.state !== 'privat'  &&
        <Image onClick={(e) => e.preventDefault()} src={mapIconsField[field.state]} width={30} height={30} alt='state icon' />
      }
      </div>
      }
      {field.state === 'transparent' && 
        <div style={{height: sizeField}} className={field.id === lostId ? `${styles.lost__tranparent} ${styles.field__tranparent}` : styles.field__tranparent} >
          {field.bomb && <Image src={mapIconsField.bomb} width={30} height={30} alt='icon bomb' />}
        {field.neighborsBonb > 0 &&  <span style={{color: COLOR__MAP.get(field.neighborsBonb)}}>{field.neighborsBonb}</span>}
          </div>
      }
      {field.state === mapIconsField[field.state] &&
      <Image src={mapIconsField[field.state]} width={30} height={30} alt='icon field' />
      }
    </div>
  );
};

export { SapperField };