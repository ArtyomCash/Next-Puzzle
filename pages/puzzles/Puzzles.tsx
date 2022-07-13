import type { NextPage } from 'next';
import styles from './puzzles.module.scss';
import Head from 'next/head';
import { useState } from 'react';

const Puzzles: NextPage = () => {
  // массив досок
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: 'Сделать',
      items: [
        { id: 1, title: 'Пойти в магазин' },
        { id: 2, title: 'выкинуть мусор' },
        { id: 3, title: 'Покушать' },
      ],
    },
    {
      id: 2,
      title: 'Проверить',
      items: [
        { id: 4, title: 'Код ревью' },
        { id: 5, title: 'Задача на факториал' },
        { id: 6, title: 'Задача на фибоначи' },
      ],
    },
    {
      id: 3,
      title: 'Сделано',
      items: [
        { id: 7, title: 'Снять видео' },
        { id: 8, title: 'Смонтировать' },
        { id: 9, title: 'Отрендоорить' },
      ],
    },
  ]);

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);


  const dragOverHandler = (e: any, board: any, item: any) => {
    e.preventDefault();
    if (e.target.className == 'puzzles_item__WeSE_') { // поиск по классу не надёжный добавить id
        e.target.style.boxShadow = '0 4px 3px gray';
    }
  };

  const dragLeaveHandler = (e: any) => {
    e.target.style.boxShadow = 'none'
  };

  const dragStartHandler =(e: any) => {

  };

  const dragEndHandler =(e: any) => {
    e.target.style.boxShadow = 'none'
  };
  const dropHandler =(e: any, board: any, item: any) => {
    e.preventDefault()
  };

  return (
    <div id='up' className={styles.cases}>
      <Head>
        <title>Puzzles</title>
        <meta name='Description of flexyti Our Projects' content='Content of flexyti Our Projects' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.app}>
        {boards.map((board, boardsIndex) => (
          <div className={styles.board} key={`boardsIndex_${boardsIndex}`}>
            <div className={styles.boardTitle}>{board.title}</div>
            {board.items.map((item, itemItem) => (
              <div
                onDragOver={(e) => dragOverHandler(e, board, item)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragStart={(e) => dragStartHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropHandler(e, board, item)}
                // className={styles.todo}
                draggable={true}
                key={`itemItem${itemItem}`}
                className={styles.item}>
                {item.title}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Puzzles;
