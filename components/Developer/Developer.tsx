import { NextPage } from 'next';
import Image from 'next/image';
import styles from './developer.module.scss';

import AlexImg from '../../assets/images/temporary/ALG.png';

const aboutUsData = [
  {
    name: 'Alex Gusev',
    position: 'seo',
    image: AlexImg.src,
  },
  {
    name: 'Alex Gusev',
    position: 'seo',
    image: AlexImg.src,
  },
  {
    name: 'Alex Gusev',
    position: 'seo',
    image: AlexImg.src,
  },
  {
    name: 'Alex Gusev',
    position: 'seo',
    image: AlexImg.src,
  },
  {
    name: 'Alex Gusev',
    position: 'seo',
    image: AlexImg.src,
  },
  {
    name: 'Alex Gusev',
    position: 'seo',
    image: AlexImg.src,
  },
  {
    name: 'Alex Gusev',
    position: 'seo',
    image: AlexImg.src,
  },
  {
    name: 'Alex Gusev',
    position: 'seo',
    image: AlexImg.src,
  },
];

const Developer: NextPage = () => {
  return (
    <>
      {aboutUsData.map((item, index) => (
        <figure className={styles.item} key={index}>
          <div className={styles.image}>
            <Image height={88} width={80} src={item.image} alt={item.name} />
          </div>
          <figcaption className={styles.name}>{item.name}</figcaption>
          <p className={styles.position}>{item.position}</p>
        </figure>
      ))}
    </>
  );
};

export default Developer;
