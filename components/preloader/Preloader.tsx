import type { NextPage } from 'next';
import styles from './preloader.module.scss';
import Head from 'next/head';
import logoTipe from '../../assets/Preloader/flti_logo.png';
import Image from 'next/image';

const Preloader: NextPage = () => {
  return (
    <section className={styles.preloader}>
      <Head>
        <title>Flexyti About Us</title>
        <meta name='Description of flexyti About us' content='Content of flexyti About us' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Image className={styles.logo} src={logoTipe.src} alt='' width={80} height={56} />
      <span className={styles.lineReload} />
      <p className={styles.description}>15% loading</p>
    </section>
  );
};

export default Preloader;
