import { LayoutGameNav } from "./components";

import styles from './styles/LayoutGameHeader.module.scss';

const LayoutGameHeader = () => {
  return (
    <header className={styles.root}>
      <LayoutGameNav />
    </header>
  );
};

export { LayoutGameHeader };