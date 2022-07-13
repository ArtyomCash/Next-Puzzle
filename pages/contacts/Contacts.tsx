import type { NextPage } from 'next';
import styles from './contacts.module.scss';
import Head from 'next/head';
import ContactIcon from 'assets/images/icons/contact-icon.svg';
import PhoneIcon from 'assets/images/icons/phone-icon.svg';
import EnvelopeIcon from 'assets/images/icons/envelope-icon.svg';
import HomeStoriesBlock from 'components/Stories';
import ContactForm from 'components/ContactForm';

const Contacts: NextPage = () => {
  return (
    <>
      <section className={styles.contacts}>
        <Head>
          <title>Contacts</title>
          <meta name='Description of flexyti Industries' content='Content of flexyti Industries' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <section className={styles.wrapper}>
          <p className={styles.subTitle}>Flexyti company</p>
          <h1 className={styles.title}>Contact Page</h1>
        </section>
        <div className={styles.box}>
          <div className={styles.content}>
            <div className={styles.formBox}>
              <ContactForm />
            </div>
            <div className={styles.container}>
              <div className={styles.icon}>
                <ContactIcon />
              </div>
              <p className={styles.label}>Contacts</p>
              <p className={styles.support}>
                <EnvelopeIcon />
                <a className={styles.supportLink} href='tel:+380503326358'>
                  +38 050 332 63 58
                </a>
              </p>
              <p className={styles.support}>
                <PhoneIcon />
                <a className={styles.supportLink} href='tel:+380509826188'>
                  +38 050 982 61 88
                </a>
              </p>
              <p className={styles.support}>
                <PhoneIcon />
                <a className={styles.supportLink} href='mailto:info@flexyti.com'>
                  info@flexyti.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.bottomBlockWrap}>
        <HomeStoriesBlock />
      </div>
    </>
  );
};

export default Contacts;
