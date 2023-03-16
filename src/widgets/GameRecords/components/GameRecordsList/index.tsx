import { FC } from "react";
import { formatterTime } from "@/features/GameSapper/libs/utils/timeFormat";
import { IGameRecordsListProps } from "../../types/IGameRecordsListProps";

import styles from "./GameRecordsList.module.scss";

const GameRecordsList: FC<IGameRecordsListProps> = ({ records }) => {
  return (
    <ul className={styles.root}>
      {records.map((item, index) => (
        <li className={styles.record} key={index}>
          <span>{index + 1}.</span>
          <em> {item.complexity} </em> ___
          <i> {formatterTime.format(item.time)}</i>
        </li>
      ))}
    </ul>
  );
};

export { GameRecordsList };
