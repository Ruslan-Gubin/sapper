import Link from "next/link";
import { useRouter } from "next/router";
import { ILayoutGameNav } from "../types/LayoutGameNav";
import { navItems } from "../../libs/data/headerNavigations";

import styles from "./LayoutGameNav.module.scss";



const LayoutGameNav = ({}: ILayoutGameNav) => {
  const router = useRouter();

  return (
    <nav className={styles.root}>
      <ul className={styles.links}>
        {navItems.map((link) => (
          <li key={link.path}>
            <Link href={link.path}>
              <h2
                className={
                  router.pathname === link.path
                    ? `${styles.nav__item} ${styles.nav__item_active}`
                    : styles.nav__item
                }
              >
                {link.name}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { LayoutGameNav };
