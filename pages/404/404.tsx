import { NextPage } from 'next';
import styles from './four-hundred-four.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NoPage: NextPage = () => {
  const [active, setActive] = useState('home');
  const router = useRouter();

  return (
    <section className={styles.error}>
      <span className={styles.preTitle}>404 error</span>
      <h1 className={styles.title}>Page Not Found</h1>
      <h4 className={styles.desc}>The resource requested could not be found on this server!</h4>
      <div className={styles.btnBox}>
        <Link href='/'>
          <a className={active === 'home' ? styles.btnHomeActive : styles.btnHome} onClick={() => setActive('home')}>
            Home
          </a>
        </Link>
        <button
          className={active === 'back' ? styles.btnBackActive : styles.btnBack}
          type='button'
          onClick={() => {
            setActive('back');
            router.back();
          }}>
          Back
        </button>
      </div>
    </section>
  );
};

export default NoPage;
