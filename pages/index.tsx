import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.scss';
import Puzzles from 'components/HomeComponents/PuzzlesHomePage';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Puzzles</title>
        <meta name='Description of flexyti' content='Content of flexyti' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.contentWrap}>
        <Puzzles />
      </div>
    </>
  );
};

export default Home;
