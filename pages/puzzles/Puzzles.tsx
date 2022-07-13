import type { NextPage } from 'next';
import styles from './puzzles.module.scss';
import Head from 'next/head';

import { v4 as uuid } from 'uuid';
import Image from 'next/image';
import LinkButton from 'components/LinkButton';

const Puzzles: NextPage = () => {
  return (
    <div id='up' className={styles.cases}>
      <Head>
        <title>Flexyti Projescts</title>
        <meta name='Description of flexyti Our Projects' content='Content of flexyti Our Projects' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
        <div>
            hi
        </div>
        {/*<HomeStoriesBlock />*/}
    </div>
  );
};

export default Puzzles;
