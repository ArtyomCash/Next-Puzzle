import type { NextPage } from 'next';
import styles from './cases.module.scss';
import Head from 'next/head';
// import HomeIndustriesBlock from 'components/HomeComponents/HomeIndustriesBlock';
// import HomeStoriesBlock from 'components/Stories';

import Project1 from '../../assets/Projects/online-doctor.png';
import Project2 from '../../assets/Projects/eco-driving.png';
import Project3 from '../../assets/Projects/go-doctor.png';
import Project4 from '../../assets/Projects/muscle-motion.png';

import { v4 as uuid } from 'uuid';
import Image from 'next/image';
import LinkButton from 'components/LinkButton';

const projectsImagesMock = [
  { img: Project1.src, title: 'Eco Driving', width: 448, height: 263 },
  { img: Project2.src, title: 'Online Doctor', width: 448, height: 263 },
  { img: Project3.src, title: 'Go Doctor', width: 448, height: 263 },
  { img: Project4.src, title: 'Eco Driving', width: 928, height: 543 },
  { img: Project1.src, title: 'Muscle Motion', width: 448, height: 263 },
  { img: Project2.src, title: 'Muscle Motion', width: 649, height: 380 },
  { img: Project3.src, title: 'Go Doctor', width: 448, height: 263 },
  { img: Project4.src, title: 'Eco Driving', width: 448, height: 263 },
  { img: Project1.src, title: 'Eco Driving', width: 928, height: 543 },
  { img: Project2.src, title: 'Online Doctor', width: 448, height: 263 },
  { img: Project3.src, title: 'Go Doctor', width: 448, height: 263 },
  { img: Project4.src, title: 'Muscle Motion', width: 448, height: 263 },
];

const Cases: NextPage = () => {
  return (
    <div id='up' className={styles.cases}>
      <Head>
        <title>Flexyti Projescts</title>
        <meta name='Description of flexyti Our Projects' content='Content of flexyti Our Projects' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.header}>
        <div className={styles.headerBox}>
          <p className={styles.preTitle}>Flexyti company</p>
          <h1 className={styles.headerTitle}>Our Projects</h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <nav className={styles.selector}>
            <button className={`${styles.selectorItem} ${styles.selectorItemCurent}`}>All</button>
            <button className={styles.selectorItem}>Own Startups</button>
            <button className={styles.selectorItem}>Apps</button>
            <button className={styles.selectorItem}>Cms</button>
            <button className={styles.selectorItem}>Dashboard</button>
          </nav>
          <div className={styles.projects}>
            {projectsImagesMock.map((projectImg) => (
              <figure
                key={uuid()}
                className={
                  projectImg.width == 928
                    ? `${styles.projectsItem} ${styles.projectsItemWide}`
                    : `${styles.projectsItem}`
                }>
                <Image src={projectImg.img} alt='Project Name' width={projectImg.width} height={projectImg.height} />
              </figure>
            ))}
          </div>
          <div className={styles.loadmoreBox}>
            <LinkButton href='/projects' dark name='Load More' />
          </div>
        </div>
        {/*<HomeIndustriesBlock />*/}
      </div>
      <div className={styles.bottomBlockWrap}>
        {/*<HomeStoriesBlock />*/}
      </div>
    </div>
  );
};

export default Cases;
