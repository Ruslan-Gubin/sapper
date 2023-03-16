import { selectSapperAction } from "@/features";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GameRecordsHeader } from "./components/GameRecordsHeader";
import { GameRecordsList } from "./components/GameRecordsList";
import { GameRecordsNoContent } from "./components/GameRecordsNoContent";

import styles from "./styles/GameRecords.module.scss";

const GameRecords = () => {
  const { resultTable } = useSelector(selectSapperAction);
  const [complexityName, setComplexityName] = useState<
    "easy" | "normal" | "hard"
  >("easy");
  const [records, setRecords] = useState<
    { time: number; complexity: string }[]
  >([]);

  useEffect(() => {
    setRecords(() =>
      resultTable
        .filter((item) => item.complexity === complexityName)
        .sort((a, b) => a.time - b.time)
    );
  }, [complexityName, resultTable]);

  const changeNameHandle = (value: "easy" | "normal" | "hard") => {
    setComplexityName(value);
  };

  return (
    <section className={styles.root}>
      <GameRecordsHeader
        changeName={changeNameHandle}
        activeName={complexityName}
      />
      {records.length ? (
        <GameRecordsList records={records} />
      ) : (
        <GameRecordsNoContent />
      )}
    </section>
  );
};

export { GameRecords };
