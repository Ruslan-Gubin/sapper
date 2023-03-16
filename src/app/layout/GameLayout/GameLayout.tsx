import Head from "next/head";
import styles from './GameLayout.module.scss';

import { LayoutGameHeader } from '@/widgets';

interface IGameLayoutProps {
  children: React.ReactNode;
  title: string;
  keywords: string;
}

const GameLayout = ({ children, title, keywords }: IGameLayoutProps) => {
  return (
    <>
    <Head>
        <title>{title ? title : "Game sapper"}</title>
        <meta name="description" content="Game sapper" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          charSet="utf-8"
        />
        <meta name="keywords" content={keywords} />
      </Head>
        <LayoutGameHeader />
      <main>
        {children}
      </main>
      <footer>
        
      </footer>
      
    </>
  );
};

export { GameLayout };