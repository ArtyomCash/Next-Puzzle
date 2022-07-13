import { NextPage } from 'next';
import LinkButton from 'components/LinkButton';
import OwnProjectsIcon from 'assets/images/icons/own-projects.svg';
import ownProjectsIg from 'assets/images/temporary/own-projects.png';
import styles from './puzzles.module.scss';
import Image from 'next/image';
import React, { useState } from 'react';

const Puzzles: NextPage = () => {
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
          console.log('currentCard.order111111111', currentCard.order);
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

  /*function dragStartHandler(e: React.DragEvent<HTMLDivElement>, card: any) {
    e.preventDefault();
    console.log('drag', card);
  }
  function dragEndHandler(e: React.DragEvent<HTMLDivElement>, card: any) {
    e.preventDefault();
  }
  function dragOverHandler(e: React.DragEvent<HTMLDivElement>, card: any) {

  }
  function dropHandler(e: React.DragEvent<HTMLDivElement>, card: any) {

    console.log('drop', card);
  }*/

  return (
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
  );
};

export default Puzzles;
