import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './puzzle-card.module.scss';
import Head from 'next/head';
import { aboutUsScores } from '../../data_for_pages/aboutUsData';
import VideoImg from 'assets/About_As/aboutVideo.png';
import AboutImg from 'assets/About_As/about.png';
// import HomeStoriesBlock from 'components/Stories';
import Developer from 'components/Developer';
import React, {useState} from "react";

const PuzzleCard: NextPage = () => {
  type card = {
    id: number;
    order: number;
    img: string;
    text: string;
    class: string;
  };

  const cardArray: card[] = [
    { id: 1, order: 1, img: '1', text: 'пазл 1', class: 'red' },
    { id: 2, order: 2, img: '2', text: 'пазл 2', class: 'yellow' },
    { id: 3, order: 3, img: '3', text: 'пазл 3', class: 'green' },
    { id: 4, order: 4, img: '4', text: 'пазл 4', class: 'blue' },
  ];

  const [cardList, setCardList] = useState(cardArray);

  // запоминаем взятую карточку
  const [currentCard, setCurrentCard] = useState(null);

  // e.preventDefault(); - отключает действие браузера по умолчанию
  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, card: any) => {
    console.log('drag', card);
    setCurrentCard(card);
  };
  const dragEndHandler = (e: any) => {
    e.target.style.background = 'white';
  };
  const dragOverHandler = (e: any) => {
    e.preventDefault();
    e.target.style.background = 'lightgray';
  };
  const dropHandler = (e: any, card: any) => {
    e.preventDefault();
    // меняем их местами - меняем исходный массив
    setCardList(
        cardList.map((c) => {
          // если id массива = карточки в которую мы закидываем, а она находиться снизу, тогда присваеваем порядок той карточки которую мы держим
          if (c.id === card.id) {
            // return { ...c, order: currentCard.order };
            return { ...c, order: currentCard.order };
          }
          // if (c.id === currentCard.id) {
          if (c.id === currentCard.id) {
            return { ...c, order: card.order };
          }
          return c;
        })
    );
    e.target.style.background = 'white';
    console.log('drop', card);
  };

  const sortCards = (a: any, b: any) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };
  return (
    <div id='up' className={styles.about}>
      <Head>
        <title>Flexyti About Us</title>
        <meta name='Description of flexyti About us' content='Content of flexyti About us' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <article className={styles.wrap}>
        {cardList.sort(sortCards).map((card, index) => (
            <div
                // взяли карточку
                onDragStart={(e) => dragStartHandler(e, card)}
                // вышли за пределы другой карточки
                onDragLeave={(e) => dragEndHandler(e)}
                // отпустили перемещение
                onDragEnd={(e) => dragEndHandler(e)}
                // если находимся над каким то объектом
                onDragOver={(e) => dragOverHandler(e)}
                // отпустили карточку и должно произойти действие
                onDrop={(e) => dropHandler(e, card)}
                className={styles.card}
                key={index}
                draggable={true}>
              {card.text}
            </div>
        ))}
        {/*<div className={styles.imgBox}>
        <Image src={ownProjectsIg.src} alt='Own Projects' width={624} height={420} objectFit='cover' />
      </div>*/}
      </article>
    </div>
  );
};

export default PuzzleCard;
