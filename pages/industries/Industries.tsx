import type { NextPage } from 'next';
import styles from './industries.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import IOTintegration from 'assets/Industries/IOTintegration.jpg';
import chip from 'assets/Industries/chip.jpg';
import energySaving from 'assets/Industries/energy_saving_solutions.jpg';
import electroinic from 'assets/Industries/electroinic_components.jpg';
import healthcare from 'assets/Industries/healthcare.jpg';
import automotive from 'assets/Industries/automotive_2.jpg';
import eLearning from 'assets/Industries/e-learning.jpg';
import delivery from 'assets/Industries/delivery.jpg';
import eCommerce from 'assets/Industries/e-commerce_2.jpg';
import fintech from 'assets/Industries/fintech.jpg';
import HomeStoriesBlock from '../../components/Stories';

const Industries: NextPage = () => {
  const otherImgArray = [
    { img: energySaving.src, title: 'Energy saving solutions', btn: 'read more' },
    { img: electroinic.src, title: 'Energy saving solutions', btn: 'read more' },
    { img: healthcare.src, title: 'Energy saving solutions', btn: 'read more' },
    { img: automotive.src, title: 'Energy saving solutions', btn: 'read more' },
    { img: eLearning.src, title: 'Energy saving solutions', btn: 'read more' },
    { img: delivery.src, title: 'Energy saving solutions', btn: 'read more' },
    { img: eCommerce.src, title: 'Energy saving solutions', btn: 'read more' },
    { img: fintech.src, title: 'Energy saving solutions', btn: 'read more' },
  ];

  return (
    <>
      <div className={styles.industries}>
        <Head>
          <title>Industries</title>
          <meta name='Description of flexyti Industries' content='Content of flexyti Industries' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className={styles.header}>
          <div className={styles.headerBox}>
            <p className={styles.preTitle}>Industries</p>
            <h1 className={styles.headerTitle}>IOT integration</h1>
            <figure className={styles.aboutVideoBox}>
              <Image height={380} width={740} src={IOTintegration} alt='IOTintegration' />
            </figure>
          </div>
        </div>
      </div>
      <article className={styles.whoWeAreWrapper}>
        <h2 className={styles.titleWho}>Who we Are</h2>
        <p className={styles.description}>
          Мы объединяем ИТ с вещами из реальной жизни. Наша экспертиза - это кастомная разработка software&hardware в
          том числе для задач IOT во многих проявлениях : системы автоматизации и управления (от SmartHome до систем
          масштаба предприятия), системы логистики, GPS и мобильного мониторинга для целей бизнеса, системы е-коммерс и
          системы доставки, интеграция с медицинскими устройствами и устройствами для спорта. Мы решаем Ваши самые
          различные прикладные задачи для целей бизнеса с помощью ИТ-решений и нашего опыта в различных индустриях
        </p>
        <p className={styles.description}>
          Мы готовы предоставлять комплексные решения, которые имеют максимальную ценность для бизнеса. Начиная с
          бизнес-анализа Вашего запроса и заканчивая процедурами QA - все предоставляемые нами услуги направлены на
          реализацию в срок и с высоким качеством Вашего проекта, дающего максимальный business value для Вашего
          бизнеса.
        </p>
        <div className={styles.img}>
          <Image width={736} height={380} src={chip.src} alt='chip' />
        </div>
        <p className={styles.description}>
          Мы всегда готовы предложить самое лучше решение на любом этапе проекта, как с точки зрения функционирования и
          предлагаемых опций реализации, так и с точки зрения оптимальных инвестиций and the best deliver time. Наша
          команда понимает и разделяет ценности клиентов, и мы в компании Flexyti всегда помним - что мы не просто
          программируем - мы разрабатываем бизнес-решение, призванное решить у наших клиентов конкретные задачи -
          оптимизировать либо развить существующие процессы, запустить новый стартап или расширить существующий
          функционал. И ценность данного продукта - именно в его завершенности, ведь даже есть продукт готов на 99%, но
          не работает как нужно - то и business value у него нет. Мы всегда помним об этом.
        </p>
        <p className={styles.description}>
          Именно над тем, чтобы предоставить Вам завершенные продукты мы и работаем в компании Flexyti - с оптимальным
          балансом затрат, качественно и в срок, предоставляя широкий спектр ИТ решений в рамках одной компании, и решая
          как простые, так и очень сложные технологические задачи, опираясь на нашу более чем 10-летнюю экспертизу.
        </p>
        <h2 className={styles.titleWho}>Other Industries</h2>
      </article>
      <section className={styles.otherWrapper}>
        {otherImgArray.map((other, index) => (
          <div className={styles.otherImgBox} key={index}>
            <div className={styles.otherImg}>
              <Image width={209} height={380} src={other.img} alt='chip' />
            </div>
            <h2 className={styles.subTitleOther}>Energy saving solutions</h2>
            <button className={styles.otherBtn} type='button'>
              read more
            </button>
          </div>
        ))}
      </section>
      <div className={styles.successStoriesBox}>
        <HomeStoriesBlock />
      </div>
    </>
  );
};

export default Industries;
