import type { NextPage } from 'next';
import styles from './one-object-puzzle.module.scss';
import React, { useState } from 'react';
import Head from 'next/head';
import wood_01 from '../../assets/Puzzle/wood/wood_01.jpg';
import wood_15 from '../../assets/Puzzle/wood/wood_15.jpg';
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
import wood_16 from '../../assets/Puzzle/wood/wood_16.jpg';
import Image from 'next/image';

const puzzleSet = [
  {
    id: 0,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [
      { id: 1, title: 'Пойти в магазин', img: wood_01.src },
      { id: 15, title: 'Отрендоорить', img: wood_15.src },
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
      { id: 16, title: 'Отрендоорить', img: wood_16.src },
    ],
    madePuzzles: [],
  },
  {
    id: 1,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [],
    madePuzzles: [],
  },
  {
    id: 2,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [],
    madePuzzles: [],
  },
  {
    id: 3,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [],
    madePuzzles: [],
  },
  {
    id: 4,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [],
    madePuzzles: [],
  },
  {
    id: 5,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [],
    madePuzzles: [],
  },
  {
    id: 6,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [],
    madePuzzles: [],
  },
  {
    id: 7,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [],
    madePuzzles: [],
  },
  {
    id: 8,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [],
    madePuzzles: [],
  },
  {
    id: 9,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [],
    madePuzzles: [],
  },
  {
    id: 10,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [],
    madePuzzles: [],
  },
  {
    id: 11,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [],
    madePuzzles: [],
  },
  {
    id: 12,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [],
    madePuzzles: [],
  },
  {
    id: 13,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [],
    madePuzzles: [],
  },
  {
    id: 14,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [],
    madePuzzles: [],
  },
  {
    id: 15,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [],
    madePuzzles: [],
  },
  {
    id: 16,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [],
    madePuzzles: [],
  },
  {
    id: 17,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [],
    madePuzzles: [],
  },
];

const OneObjectPuzzle: NextPage = () => {
  // массив досок
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: 'Сделать',
      items: [
        { id: 1, title: '1   Пойти в магазин' },
        { id: 2, title: '2   выкинуть мусор' },
        { id: 3, title: '3   Покушать' },
      ],
    },
    {
      id: 2,
      title: 'Проверить',
      items: [
        { id: 4, title: '4   Код ревью' },
        { id: 5, title: '5   Задача на факториал' },
        { id: 6, title: '6   Задача на фибоначи' },
      ],
    },
    {
      id: 3,
      title: 'Сделано',
      items: [
        { id: 7, title: '7   Снять видео' },
        { id: 8, title: '8   Смонтировать' },
        { id: 9, title: '9   Отрендоорить' },
      ],
    },
  ]);

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
    // const currentIndex = currentBoard.items.indexOf(currentItem);
    // удаляем элемент с текущей доски
    // currentBoard.items.splice(currentIndex, 1);
    // удаляем индекс элемента над которым держим карточку
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem); //currentItem - вставляем карточку после удалённых элементов
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
    // console.log('item>>', item);
  };

  const dropCardHandler = (e: any, board: any) => {
    // добавляем задачу в новую доску
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    // удаляем элемент с текущей доски
    currentBoard.items.splice(currentIndex, 1);

    const filteredArray: any = [];
    // setCurrentBoard(filteredArray);
    board.items.filter((item: any) => {
      if (!filteredArray.some((element: any) => element.id === item.id)) {
        filteredArray.push(item);
      }
    });
    board.items = filteredArray;

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

  return (
    <div id='up' className={styles.cases}>
      <Head>
        <title>Puzzles</title>
        <meta name='Description of flexyti Our Projects' content='Content of flexyti Our Projects' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.app}>
        {boards.map((board, boardsIndex) => (
          <div
            className={styles.board}
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
                // // className={styles.todo}
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

export default OneObjectPuzzle;
