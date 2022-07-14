import type { NextPage } from 'next';
import styles from './puzzles.module.scss';
import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import wood_01 from '../../assets/Puzzle/wood/wood_01.jpg';
import wood_02 from '../../assets/Puzzle/wood/wood_02.jpg';
import wood_03 from '../../assets/Puzzle/wood/wood_03.jpg';
import wood_04 from '../../assets/Puzzle/wood/wood_04.jpg';
import wood_05 from '../../assets/Puzzle/wood/wood_05.jpg';
import wood_06 from '../../assets/Puzzle/wood/wood_06.jpg';
import wood_07 from '../../assets/Puzzle/wood/wood_07.jpg';
import wood_08 from '../../assets/Puzzle/wood/wood_08.jpg';
import wood_09 from '../../assets/Puzzle/wood/wood_09.jpg';
import wood_10 from '../../assets/Puzzle/wood/wood_10.jpg';
import wood_11 from '../../assets/Puzzle/wood/wood_11.jpg';
import wood_12 from '../../assets/Puzzle/wood/wood_12.jpg';
import wood_13 from '../../assets/Puzzle/wood/wood_13.jpg';
import wood_14 from '../../assets/Puzzle/wood/wood_14.jpg';
import wood_15 from '../../assets/Puzzle/wood/wood_15.jpg';
import wood_16 from '../../assets/Puzzle/wood/wood_16.jpg';

const Puzzles: NextPage = () => {
  /*  type itemsArray = {
    id: number;
    title: string;
    img: string;
  }
  
  type imgWood = {
    id: number;
    title: string;
    img: string;
    items: itemsArray;
  }*/

  const arrayImg = [
    {
      id: 1,
      title: 'Начало',
      // img: wood_01.src,
      items: [
        { id: 1, title: 'Пойти в магазин', img: wood_01.src },
        { id: 2, title: 'выкинуть мусор', img: wood_02.src },
        { id: 3, title: 'Покушать', img: wood_03.src },
        { id: 4, title: 'Код ревью', img: wood_04.src },
        { id: 5, title: 'Задача на факториал', img: wood_05.src },
        { id: 6, title: 'Задача на фибоначи', img: wood_06.src },
        { id: 7, title: 'Снять видео', img: wood_07.src },
        { id: 8, title: 'Смонтировать', img: wood_08.src },
        { id: 9, title: 'Отрендоорить', img: wood_09.src },
        { id: 10, title: 'Отрендоорить', img: wood_10.src },
        { id: 11, title: 'Отрендоорить', img: wood_11.src },
        { id: 12, title: 'Отрендоорить', img: wood_12.src },
        { id: 13, title: 'Отрендоорить', img: wood_13.src },
        { id: 14, title: 'Отрендоорить', img: wood_14.src },
        { id: 15, title: 'Отрендоорить', img: wood_15.src },
        { id: 16, title: 'Отрендоорить', img: wood_16.src },
      ],
    },
    {
      id: 2,
      title: '',
      // img: wood_02.src,
      items: [],
    },
    {
      id: 3,
      title: '',
      // img: wood_03.src,
      items: [],
    },
    {
      id: 4,
      title: '',
      // img: wood_03.src,
      items: [],
    },
    {
      id: 5,
      title: '',
      // img: wood_03.src,
      items: [],
    },
    {
      id: 6,
      title: '',
      // img: wood_03.src,
      items: [],
    },
    {
      id: 7,
      title: '',
      // img: wood_03.src,
      items: [],
    },
    {
      id: 8,
      title: '',
      // img: wood_03.src,
      items: [],
    },
    {
      id: 9,
      title: '',
      // img: wood_03.src,
      items: [],
    },
    {
      id: 10,
      title: '',
      // img: wood_03.src,
      items: [],
    },
    {
      id: 11,
      title: '',
      // img: wood_03.src,
      items: [],
    },
    {
      id: 12,
      title: '',
      // img: wood_03.src,
      items: [],
    },
    {
      id: 13,
      title: '',
      // img: wood_03.src,
      items: [],
    },
    {
      id: 14,
      title: '',
      // img: wood_03.src,
      items: [],
    },
    {
      id: 15,
      title: '',
      // img: wood_03.src,
      items: [],
    },
    {
      id: 16,
      title: '',
      // img: wood_03.src,
      items: [],
    },
    {
      id: 17,
      title: '',
      // img: wood_03.src,
      items: [],
    },
  ];
  // массив досок
  const [boards, setBoards] = useState(arrayImg);

  // состояние для текущей доски и для текущего состояния
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const dragOverHandler = (e: any) => {
    e.preventDefault();
    if (e.target.className == 'puzzles_item__WeSE_') {
      // поиск по классу не надёжный добавить id
      e.target.style.boxShadow = '0 4px 3px gray';
    }
  };

  const dragLeaveHandler = (e: any) => {
    e.target.style.boxShadow = 'none';
  };

  const dragStartHandler = (e: any, board: any, item: any) => {
    setCurrentBoard(board);
    setCurrentItem(item);
    console.log('drag', board);
  };

  const dragEndHandler = (e: any) => {
    e.target.style.boxShadow = 'none';
  };
  const dropHandler = (e: any, board: any, item: any) => {
    e.preventDefault();
    // получаем индекс в массиве у текущей карточки
    const currentIndex = currentBoard.items.indexOf(currentItem);
    // удаляем элемент с текущей доски
    currentBoard.items.splice(currentIndex, 1);
    // удаляем индекс элемента над которым держим карточку
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem); //currentItem - вставляем карточку после удалённых элементов
    // setBoards - вызываем функцию для того чтобы изменить состояние
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
    e.target.style.boxShadow = 'none';
  };

  const dropCardHandler = (e: any, board: any) => {
    // добавляем задачу в новую доску
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    // удаляем элемент с текущей доски
    currentBoard.items.splice(currentIndex, 1);

    // функция состояния
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
    e.target.style.boxShadow = 'none';
    console.log('drop', board);
  };

  return (
    <div id='up' className={styles.cases}>
      <Head>
        <title>Puzzles</title>
        <meta name='Description of flexyti Our Projects' content='Content of flexyti Our Projects' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className={styles.wrapper}>
        <div className={styles.app}>
          {boards.map((board, boardsIndex) => (
            <>
              <div
                className={boardsIndex === 0 ? styles.boardWrapper : styles.board}
                key={`boardsIndex_${boardsIndex}`}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropCardHandler(e, board)}>
                <div className={styles.boardTitle}>{board.title}</div>
                {board.items.map((item, itemItem) => (
                  <div
                    onDragOver={(e) => dragOverHandler(e)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    onDragStart={(e) => dragStartHandler(e, board, item)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDrop={(e) => dropHandler(e, board, item)}
                    draggable={true}
                    key={`itemItem${itemItem}`}
                    className={styles.item}>
                    <div className={styles.imgFigure}>
                      <Image width={200} height={200} src={item.img} alt='Business analysis' />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
        <div className={styles.desktop}>
          {boards.map((board, boardsIndex) => (
            <>
              <div
                className={boardsIndex === 0 ? styles.boardWrapperSecond : styles.boardSecond}
                key={`boardsIndex_${boardsIndex}`}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropCardHandler(e, board)}>
                <div className={styles.boardTitle}>{board.title}</div>
                {board.items.map((item, itemItem) => (
                  <div
                    onDragOver={(e) => dragOverHandler(e)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    onDragStart={(e) => dragStartHandler(e, board, item)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDrop={(e) => dropHandler(e, board, item)}
                    draggable={true}
                    key={`itemItem${itemItem}`}
                    className={styles.item}>
                    <div className={styles.imgFigure}>
                      <Image width={200} height={200} src={item.img} alt='Business analysis' />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Puzzles;
