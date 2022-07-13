import AppContext from './AppContext';
import { NextPage, GetServerSideProps } from 'next';
import useSWR from 'swr';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
import Preloader from '../preloader';
import styles from './wrapper-props.module.scss';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PageModel } from 'assets/CMStypes';
import  Header from '../Header';

const getPageBySlug = (slug: string, pages: PageModel[]) => {
  const found = pages.filter((page) => page.slug === slug);
  return found.shift();
};

/*export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:7331/pages');
  const pages = await res.json();

  return {
    props: {
      pages,
      header: pages[1],
      homePage: pages[2],
      aboutUs: getPageBySlug('about-us', pages),
      resources: pages[4],
      contact: pages[5],
      homePageTriblock: pages[6],
      footer: pages[5],
      aboutAsBoard: pages[8],
      aboutAsStaff: pages[9],
    },
  };
};*/

const WrapperProps: NextPage = ({ children }) => {
  const { data } = useSWR('pages', getPageBySlug);

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setLoading(true);
    });
    router.events.on('routeChangeComplete', () => {
      setLoading(false);
    });
  }, []);

  return (
    <AppContext.Provider value={data}>
    {/*<AppContext.Provider value={}>*/}
      <div className={styles.wrapperProps}>
        <div style={!loading ? { display: 'block' } : { display: 'none' }} className={styles.box}>
          <Header />
          <main className={styles.main}>{children}</main>
          {/*<Footer />*/}
        </div>
        {loading && <Preloader />}
      </div>
    </AppContext.Provider>
  );
};

export default WrapperProps;
