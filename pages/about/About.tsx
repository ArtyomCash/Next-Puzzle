import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './about-us.module.scss';
import Head from 'next/head';
import { aboutUsScores } from '../../data_for_pages/aboutUsData';
import VideoImg from 'assets/About_As/aboutVideo.png';
import AboutImg from 'assets/About_As/about.png';
// import HomeStoriesBlock from 'components/Stories';
import Developer from 'components/Developer';

const About: NextPage = () => {
  return (
    <div id='up' className={styles.about}>
      <Head>
        <title>Flexyti About Us</title>
        <meta name='Description of flexyti About us' content='Content of flexyti About us' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.header}>
        <div className={styles.headerBox}>
          <p className={styles.preTitle}>Flexyti</p>
          <h1 className={styles.headerTitle}>About us</h1>
          <figure className={styles.aboutVideoBox}>
            <Image height={380} width={740} src={VideoImg} alt='Video' />
          </figure>
        </div>
      </div>
      <div className={styles.wrapper}>
        <section className={styles.scores}>
          <div className={styles.scoresBox}>
            {aboutUsScores.map((item, index) => (
              <p className={styles.scoresItem} key={index}>
                <span className={styles.scoresLabel}>{item.score}</span>
                <span className={styles.scoresDesc}>{item.label}</span>
              </p>
            ))}
          </div>
        </section>

        <div className={styles.box}>
          <h2 className={styles.title}>Who we Are</h2>
          <div className={styles.content}>
            <p>
              Мы объединяем ИТ с вещами из реальной жизни. Наша экспертиза - это кастомная разработка software&hardware
              в том числе для задач IOT во многих проявлениях : системы автоматизации и управления (от SmartHome до
              систем масштаба предприятия), системы логистики, GPS и мобильного мониторинга для целей бизнеса, системы
              е-коммерс и системы доставки, интеграция с медицинскими устройствами и устройствами для спорта. Мы решаем
              Ваши самые различные прикладные задачи для целей бизнеса с помощью ИТ-решений и нашего опыта в различных
              индустриях{' '}
            </p>
          </div>
        </div>

        <div className={styles.aboutDesc}>
          <div className={styles.aboutDescText}>
            <h2 className={styles.title}>What we Do</h2>
            <div className={styles.content}>
              <p>
                Flexyti is a team of experienced specialists that is able to provide consumers with a unique format of
                cooperation. We are not a standard IT-agency that most clients aspire to avoid.
              </p>
              <p>
                ITcode is a dedicated team of professionals with one-of-a-kind approach to the matter. We strike the
                perfect balance of freelance and leading IT-agencies, having focused on the minimal bureaucracy and
                perfect results.
              </p>
            </div>
          </div>
          <figure className={styles.aboutDescImg}>
            <Image height={400} width={580} src={AboutImg} alt='Our team' />
          </figure>
        </div>

        <div className={styles.box}>
          <h2 className={styles.title}>What we Deliver</h2>
          <div className={styles.content}>
            <p>
              Мы готовы предоставлять комплексные решения, которые имеют максимальную ценность для бизнеса. Начиная с
              бизнес-анализа Вашего запроса и заканчивая процедурами QA - все предоставляемые нами услуги направлены на
              реализацию в срок и с высоким качеством Вашего проекта, дающего максимальный business value для Вашего
              бизнеса.{' '}
            </p>

            <p>
              Мы всегда готовы предложить самое лучше решение на любом этапе проекта, как с точки зрения
              функционирования и предлагаемых опций реализации, так и с точки зрения оптимальных инвестиций and the best
              deliver time. Наша команда понимает и разделяет ценности клиентов, и мы в компании Flexyti всегда помним -
              что мы не просто программируем - мы разрабатываем бизнес-решение, призванное решить у наших клиентов
              конкретные задачи - оптимизировать либо развить существующие процессы, запустить новый стартап или
              расширить существующий функционал. И ценность данного продукта - именно в его завершенности, ведь даже
              есть продукт готов на 99%, но не работает как нужно - то и business value у него нет. Мы всегда помним об
              этом.{' '}
            </p>

            <p>
              Именно над тем, чтобы предоставить Вам завершенные продукты мы и работаем в компании Flexyti - с
              оптимальным балансом затрат, качественно и в срок, предоставляя широкий спектр ИТ решений в рамках одной
              компании, и решая как простые, так и очень сложные технологические задачи, опираясь на нашу более чем
              10-летнюю экспертизу.
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <h2 className={styles.title}>Our Team</h2>
          <div className={styles.content}>
            <p>
              Мы объединили вместе высококлассных специалистов, создающих значимые вещи. Мы работаем как единая команда
              на всех этапах реализации Вашего проекта
            </p>
          </div>
        </div>
        <section className={styles.team}>
          <Developer />
        </section>
      </div>
      <div className={styles.bottomBlockWrap}>
        {/*<HomeStoriesBlock />*/}
      </div>
    </div>
  );
};

export default About;
