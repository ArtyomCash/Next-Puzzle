import type { NextPage } from 'next';
import styles from './services.module.scss';
import Head from 'next/head';
import { serviceData } from 'data_for_pages/servicesDataArray';
import { buttonArray } from 'data_for_pages/buttonNavMenuServices';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { buttons } from 'data_for_pages/typeServices';

const Services: NextPage = () => {
  const router = useRouter();

  const smoothScroll = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      // window.scrollBy(0, el.getBoundingClientRect().top - 100);
      const top = el.getBoundingClientRect().top;
      window.scrollBy({ top, behavior: 'smooth' });
    }
  };

  const [buttonActive, setButtonActive] = useState(0);

  const handleClick = (button: buttons, indexButton: number) => {
    smoothScroll(`${button.id}`);
    setButtonActive(indexButton);
  };

  const [scrollYNumber, setScrollYNumber] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollYNumber(scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const animation = () => {
    return (scrollYNumber >= 200 && scrollYNumber <= 800) ||
      (scrollYNumber >= 1100 && scrollYNumber <= 1600) ||
      (scrollYNumber >= 2200 && scrollYNumber <= 2800) ||
      (scrollYNumber >= 3000 && scrollYNumber <= 3500) ||
      (scrollYNumber >= 4400 && scrollYNumber <= 4900) ||
      (scrollYNumber >= 5600 && scrollYNumber <= 6100) ||
      (scrollYNumber >= 6400 && scrollYNumber <= 6900) ||
      (scrollYNumber >= 7700 && scrollYNumber <= 8200) ||
      (scrollYNumber >= 8800 && scrollYNumber <= 9400)
      ? styles.titleBoxActive
      : styles.titleBox;
  };

  const selectedItemMenuScroll = (button: buttons) => {
    return (scrollYNumber >= 200 && scrollYNumber <= 1000 && button.yPx >= 200 && button.yPx <= 1000) ||
      (scrollYNumber >= 1100 && scrollYNumber <= 2200 && button.yPx >= 1100 && button.yPx <= 2200) ||
      (scrollYNumber >= 2300 && scrollYNumber <= 2900 && button.yPx >= 2300 && button.yPx <= 2900) ||
      (scrollYNumber >= 3000 && scrollYNumber <= 4300 && button.yPx >= 3000 && button.yPx <= 4300) ||
      (scrollYNumber >= 4400 && scrollYNumber <= 5500 && button.yPx >= 4400 && button.yPx <= 5500) ||
      (scrollYNumber >= 5600 && scrollYNumber <= 6300 && button.yPx >= 5600 && button.yPx <= 6300) ||
      (scrollYNumber >= 6400 && scrollYNumber <= 7600 && button.yPx >= 6400 && button.yPx <= 7600) ||
      (scrollYNumber >= 7700 && scrollYNumber <= 8700 && button.yPx >= 7700 && button.yPx <= 8700) ||
      (scrollYNumber >= 8800 && scrollYNumber <= 10500 && button.yPx >= 8800 && button.yPx <= 10500)
      ? styles.buttonNavActive
      : styles.buttonNav;
  };

  return (
    <section id='up' className={styles.services}>
      <Head>
        <title>Flexyti Our services</title>
        <meta name='Description of flexyti Our services' content='Content of flexyti Our services' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.servicesWrapper}>
        <h2 className={styles.subTitlePage}>Flexyti company</h2>
        <h1 className={styles.titlePage}>Our services</h1>
        <div className={styles.pageContainer}>
          <div>
            {serviceData.map((item, index) => (
              <figure id={item.id} className={styles.aboutUsContainer} key={`index_${index}`}>
                <div className={styles.imgFigure}>
                  <Image width={544} height={240} src={item.img} alt='Business analysis' />
                </div>
                <figcaption className={animation()}>{item.title}</figcaption>
                <ul>
                  {item.paragraphBlock.map((paragraph, indexParagraph) => (
                    <li className={styles.description} key={`indexParagraph_${indexParagraph}`}>
                      {paragraph.paragraph}
                    </li>
                  ))}
                </ul>
                <ul className={styles.ulBox}>
                  {item.itemDescr.map((itemD, itemDescrIndex) => (
                    <li
                      className={item.itemDescr.length > 10 ? styles.liDescMoreThanTen : styles.liDescription}
                      key={`itemDescrIndex_${itemDescrIndex}`}>
                      <span className={styles.numberLiItem}>{itemDescrIndex + 1}.</span>
                      <span className={styles.liSpanFirst}>{itemD.liDescrFirst}</span>
                      <span>{itemD.liNumberSpan}</span>
                    </li>
                  ))}
                </ul>
                <p className={styles.description}>{item.secondDescr}</p>
                <ul className={styles.ulBox}>
                  {item.secondItemDescr.map((itemD, secondItemDescrIndex) => (
                    <li
                      className={styles.liDescription}
                      style={itemD.liNumSecond !== '' ? { display: 'flex' } : { display: 'none' }}
                      key={`secondItemDescrIndex_${secondItemDescrIndex}`}>
                      <span className={styles.numberLiItem}>{secondItemDescrIndex + 1}.</span>
                      <span className={styles.liSpanFirst}>{itemD.liNumSecond}</span>
                      <span>{itemD.liNumberSpan}</span>
                    </li>
                  ))}
                </ul>
              </figure>
            ))}
          </div>
          <div className={scrollYNumber >= 450 ? styles.buttonBoxActiveScroll : styles.buttonBox}>
            {buttonArray.map((button, indexButton) => (
              <button
                className={selectedItemMenuScroll(button)}
                type='button'
                key={`indexButton_${indexButton}`}
                onClick={() => handleClick(button, indexButton)}>
                <span className={buttonActive === indexButton ? styles.active : styles.underLine} />
                {button.buttonNav}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.btnBox}>
          <button className={styles.btnBackActive} type='button' onClick={() => router.back()}>
            Back
          </button>
          <button className={styles.btnBackActive} type='button' onClick={() => smoothScroll('up')}>
            Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
