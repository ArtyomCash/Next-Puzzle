import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './projects.module.scss';
import Head from 'next/head';
import { useRouter } from 'next/router';
import timo from 'assets/Projects/timo.jpg';
import timo2 from 'assets/Projects/timo2.png';
import ProjectWhatWeHave from '../../components/ProjectWhatWeHave';

type IDataTim = {
  title: string;
  subTitle: string;
};

const dataTimeArray: IDataTim[] = [
  { title: '2013-2016', subTitle: 'Partnership period' },
  { title: 'USA-Ukraine', subTitle: 'Location' },
  { title: 'BF "TIMO"', subTitle: 'Customer name' },
  { title: '8', subTitle: 'Team size' },
];

const Projects: NextPage = () => {
  const router = useRouter();

  const smoothScroll = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      const top = el.getBoundingClientRect().top;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div id='up' className={styles.project}>
      <Head>
        <title>Flexyti About Us</title>
        <meta name='Description of flexyti About us' content='Content of flexyti About us' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className={styles.projectWrapper}>
        <div className={styles.projectContainer}>
          <article className={styles.figureTimo}>
            <div className={styles.titleBox}>
              <span className={styles.contentLabel}>Projects</span>
              <h1 className={styles.title}>Project TIMO</h1>
            </div>
            <div className={styles.projectImg}>
              <Image src={timo.src} layout='fill' objectFit='cover' alt='Project Name' />
            </div>
          </article>
        </div>
      </section>
      <article className={styles.teamData}>
        <div className={styles.teamContainer}>
          {dataTimeArray.map((item, index) => (
            <div className={styles.teamBox} key={index}>
              <h2 className={styles.titleTeam}>{item.title}</h2>
              <span className={styles.subTitleTeam}>{item.subTitle}</span>
            </div>
          ))}
        </div>
      </article>
      <article className={styles.businessBox}>
        <h2 className={styles.businessTitle}>Business Aims for Projects</h2>
        <p className={styles.descr}>
          Комплексный проект в сфере образования Украины. В рамках выполнения стояла задача сбора и парсинга огромного
          массива данных школьных выпускных тестов. Необходимо было производить сбор и сложный анализ этих данных - как
          актуальных, на момент разработки, так и исторических (начиная с 2008 г). В результате работы системы должно
          осуществляться предоставление статистической и аналитической информации для различных категорий пользователей
          в сфере образования. Также в рамках веб-сайта должна работать система обучения и подготовки к выпускным
          тестам, а также возможность проверить свой собственный рейтинг на основании исторических данных и понять в
          какой университет возможно поступление с полученными балами в результате тестирования, а также баллами
          аттестата. Т. е. система должны быть предназначена и для профессионалов в области образования, а также для
          учеников, абитуриентов и их родителей
        </p>
      </article>
      <article className={styles.technology}>
        <div className={styles.technologyWrapper}>
          <div className={styles.technologyContainer}>
            <h2 className={styles.businessTitle}>Tehnologies</h2>
            <div className={styles.tehnBox}>
              <p className={styles.php}>PHP</p>
              <p className={styles.posGres}>PosGres</p>
              <p className={styles.js}>JS</p>
              <p className={styles.drupal}>Drupal CMS</p>
            </div>
          </div>
          <div className={styles.technologyImgBox}>
            <Image width={844} height={520} src={timo2.src} alt='Project Name' />
          </div>
        </div>
      </article>
      <article className={styles.businessBox}>
        <h2 className={styles.businessTitle}>How it was Done</h2>
        <p className={styles.descr}>
          Данный проект был реализован в сотрудничестве с USAID. Мы использовали парсинг нескольих государственных БД
          для предоставления аналитической информации и построения рейтингов учебных заведений на основании данных за
          2008-2015 гг. Также был использован ИИ для анализа данных по результатам внешнего независимого тестирования.
          Использование данного подхода позволило строить многокритериальные рейтинги, которые позволяют выявлять
          учебные заведения, проводящие подготовку на том или ином уровне, отслеживать их динамику и давать комплексную
          информацию для специалистов в области образования для принятия эффективных управленческих решений. Благодаря
          данному проекту получать такую аналитическую информацию с использованием множества критериев и сложных
          алгортимов стало возможным с помощью нескольких кликов, и точность этой информации оказывается очень высокой,
          благодаря алгоритмам, разработанным ведущими специалистами в данной отрасли, а также использованию ИИ. Кроме
          того, нами были реализованы дополнительные сервисы по обучению и тестированию, что сделало данный проект
          интересным широкому кругу пользователей
        </p>
      </article>
      <ProjectWhatWeHave />
      <article className={styles.businessBox}>
        <h2 className={styles.businessTitle}>Benefits\Results</h2>
        <p className={styles.descr}>
          Проект использовался пользователями Украины на различных уровнях и был полностью реализован технически, а
          также запущен в эксплуатацию и передан заказчику - БФ ТИМО. Служит комплексной информационной средой в сфере
          образования Украины. Используется пользователями для работы с аналитической информацией, позволяет получать
          данные в несколько кликов. В разы сократилось время доступа к информации и была оптимизирована струкутра
          государственных органов в области образовательной статистики. Обычные пользователи получили возможность
          простым и удобным способом получать информацию и подбирать нужные учебные заведения, а также бесплатно
          получать образовательные услуги в области подготовки к тестированию
        </p>
      </article>
      <article className={styles.clientReview}>
        <h2 className={styles.titleReview}>Client Review</h2>
        <p className={styles.descrReview}>
          Application Programming Interface (API) is a core and important part of the application.API allows two
          components of the system to communicate with one another. The first step is to design each endpoint.{' '}
        </p>
        <p className={styles.subTitleReview}>Alex Gusev, CEO</p>
        <div className={styles.btnBox}>
          <button className={styles.btnBackActive} type='button' onClick={() => router.back()}>
            Back
          </button>
          <button className={styles.btnBackActive} type='button' onClick={() => smoothScroll('up')}>
            Up
          </button>
        </div>
      </article>
    </div>
  );
};

export default Projects;
