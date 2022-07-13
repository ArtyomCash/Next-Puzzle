import { NextPage } from 'next';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import mainImg from 'assets/Projects/ioit.png';
import styles from './project-we-have.module.scss';
import Image from 'next/image';

const mockData = [
  {
    label: 'Бизнес анализ',
    dscr: 'With experienced FlexIT professionals, you are guaranteed to get high-quality software development services provided on time and without fail.',
    imgSrc: mainImg.src,
  },
  {
    label: 'Pабота с большими объемами данных',
    dscr: 'With experienced FlexIT professionals, you are guaranteed to get high-quality software development services provided on time and without fail.',
    imgSrc: mainImg.src,
  },
  {
    label: 'Использование сложны алгортимов',
    dscr: 'With experienced FlexIT professionals, you are guaranteed to get high-quality software development services provided on time and without fail.',
    imgSrc: mainImg.src,
  },
  {
    label: 'Применение ИИ',
    dscr: 'With experienced FlexIT professionals, you are guaranteed to get high-quality software development services provided on time and without fail.',
    imgSrc: mainImg.src,
  },
  {
    label: 'Создание системы и подсистем',
    dscr: 'With experienced FlexIT professionals, you are guaranteed to get high-quality software development services provided on time and without fail.',
    imgSrc: mainImg.src,
  },
  {
    label: 'Контент-менеджмент ',
    dscr: 'With experienced FlexIT professionals, you are guaranteed to get high-quality software development services provided on time and without fail.',
    imgSrc: mainImg.src,
  },
  {
    label: 'СЕО-оптимизация',
    dscr: 'With experienced FlexIT professionals, you are guaranteed to get high-quality software development services provided on time and without fail.',
    imgSrc: mainImg.src,
  },
  {
    label: 'Поддержка и доработка проекта',
    dscr: 'With experienced FlexIT professionals, you are guaranteed to get high-quality software development services provided on time and without fail.',
    imgSrc: mainImg.src,
  },
];

const ProjectWhatWeHave: NextPage = () => {
  const [indexItem, setIndexItem] = useState(0);

  return (
    <article className={styles.wrapper}>
      <div className={styles.howItWorksContent}>
        <ul className={styles.rightBlock}>
          {mockData.map((item, index) => (
            <li
              key={uuid()}
              className={`${styles.rightBlockItem} ${index === indexItem && styles.rightBlockItemActive}`}>
              <Image src={item.imgSrc} alt={`${item.label} image`} layout='fill' width={640} height={640} />
            </li>
          ))}
        </ul>
        <div>
          <h2 className={styles.title}>What We Have Done</h2>
          <ul className={styles.opportunitiesItem}>
            {mockData.map((item, index) => (
              <li key={uuid()} className={`${styles.item} ${index === indexItem && styles.itemActive}`}>
                <button type='button' className={styles.itemBtn} onClick={() => setIndexItem(index)}>
                  <span className={styles.itemBtnHead}>
                    <span className={styles.itemBtnHeadNumber}>{index + 1}</span>
                    <span className={styles.itemBtnHeadLabel}>{item.label}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ProjectWhatWeHave;
