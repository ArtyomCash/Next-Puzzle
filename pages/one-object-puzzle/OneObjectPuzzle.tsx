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

/*import wood_01 from 'assets/Puzzle/wood/Puzzle_Wood/wood_puzzle_1.png';
import wood_15 from 'assets/Puzzle/wood/Puzzle_Wood/wood_puzzle_15.png';
import wood_02 from 'assets/Puzzle/wood/Puzzle_Wood/wood_puzzle_2.png';
import wood_03 from 'assets/Puzzle/wood/Puzzle_Wood/wood_puzzle_3.png';
import wood_04 from 'assets/Puzzle/wood/Puzzle_Wood/wood_puzzle_4.png';
import wood_05 from 'assets/Puzzle/wood/Puzzle_Wood/wood_puzzle_5.png';
import wood_06 from 'assets/Puzzle/wood/Puzzle_Wood/wood_puzzle_6.png';
import wood_07 from 'assets/Puzzle/wood/Puzzle_Wood/wood_puzzle_7.png';
import wood_08 from 'assets/Puzzle/wood/Puzzle_Wood/wood_puzzle_8.png';
import wood_09 from 'assets/Puzzle/wood/Puzzle_Wood/wood_puzzle_9.png';
import wood_10 from 'assets/Puzzle/wood/Puzzle_Wood/wood_puzzle_10.png';
import wood_11 from 'assets/Puzzle/wood/Puzzle_Wood/wood_puzzle_11.png';
import wood_12 from 'assets/Puzzle/wood/Puzzle_Wood/wood_puzzle_12.png';
import wood_13 from 'assets/Puzzle/wood/Puzzle_Wood/wood_puzzle_13.png';
import wood_14 from 'assets/Puzzle/wood/Puzzle_Wood/wood_puzzle_14.png';
import wood_16 from 'assets/Puzzle/wood/Puzzle_Wood/wood_puzzle_16.png';*/
import Image from 'next/image';

const puzzleArray = [
  { namePlayer: 'Семён', idPlayer: 1, password: '1' },
  {
    storagePuzzle: [
      {
        idStoragePuzzle: 1,
        assembled: false,
        puzzleName: 'One Wood',
        reward: false,
        madePuzzlesReady: [],
        puzzleSet: [
          {
            id: 0,
            namePuzzle: 'Wood',
            assembled: false,
            disassembledPuzzles: [
              { id: 1, img: wood_01.src },
              { id: 2, img: wood_02.src },
              { id: 3, img: wood_03.src },
              { id: 4, img: wood_04.src },
              { id: 5, img: wood_05.src },
              { id: 6, img: wood_06.src },
              { id: 7, img: wood_07.src },
              { id: 8, img: wood_08.src },
              { id: 9, img: wood_09.src },
              { id: 10, img: wood_10.src },
              { id: 11, img: wood_11.src },
              { id: 12, img: wood_12.src },
              { id: 13, img: wood_13.src },
              { id: 14, img: wood_14.src },
              { id: 15, img: wood_15.src },
              { id: 16, img: wood_16.src },
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
          /*{
          id: 17,
          namePuzzle: 'Wood',
          assembled: false,
          disassembledPuzzles: [],
          madePuzzles: [],
        },*/
        ],
      },
    ],
  },
];
// console.log('новая версия puzzleArray ', puzzleArray[1].storagePuzzle[0].puzzleSet);
// console.log('новая версия puzzleArray ', puzzleArray[1].storagePuzzle[0].puzzleSet);
const workingArray = puzzleArray[1].storagePuzzle[0].puzzleSet;

// const madePuzzlesArray = puzzleArray[0].madePuzzlesReady;

// перебор массива чтобы вычислить победу

// console.log('idPuzzle>>>>', idPuzzle);
// console.log('keyPuzzle>>>', keyPuzzle);
// console.log('let victory;>>>', victory);

/*const puzzleSet = [
  {
    id: 0,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [
      { id: 1, img: wood_01.src },
      { id: 2, img: wood_02.src },
      { id: 3, img: wood_03.src },
      { id: 4, img: wood_04.src },
      { id: 5, img: wood_05.src },
      { id: 6, img: wood_06.src },
      { id: 7, img: wood_07.src },
      { id: 8, img: wood_08.src },
      { id: 9, img: wood_09.src },
      { id: 10, img: wood_10.src },
      { id: 11, img: wood_11.src },
      { id: 12, img: wood_12.src },
      { id: 13, img: wood_13.src },
      { id: 14, img: wood_14.src },
      { id: 15, img: wood_15.src },
      { id: 16, img: wood_16.src },
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
  /!*{
    id: 17,
    namePuzzle: 'Wood',
    assembled: false,
    disassembledPuzzles: [],
    madePuzzles: [],
  },*!/
];*/
// console.log('старая версия версия puzzleArray ', puzzleSet);

const OneObjectPuzzle: NextPage = () => {
  // массив досок
  /*  const [boards, setBoards] = useState([
    {
      id: 1,
      items: [
        { id: 1, img: wood_01.src },
        { id: 15, img: wood_15.src },
        { id: 2, img: wood_02.src },
        { id: 3, img: wood_03.src },
        { id: 4, img: wood_04.src },
        { id: 5, img: wood_05.src },
        { id: 6, img: wood_06.src },
        { id: 7, img: wood_07.src },
        { id: 8, img: wood_08.src },
        { id: 9, img: wood_09.src },
        { id: 10, img: wood_10.src },
        { id: 11, img: wood_11.src },
        { id: 12, img: wood_12.src },
        { id: 13, img: wood_13.src },
        { id: 14, img: wood_14.src },
        { id: 16, img: wood_16.src },
      ],
    },
    {
      id: 2,
      items: [],
    },
    {
      id: 3,
      items: [],
    },
    {
      id: 4,
      items: [],
    },
    {
      id: 5,
      items: [],
    },
    {
      id: 6,
      items: [],
    },
    {
      id: 7,
      items: [],
    },
    {
      id: 8,
      items: [],
    },
    {
      id: 9,
      items: [],
    },
    {
      id: 10,
      items: [],
    },
    {
      id: 11,
      items: [],
    },
    {
      id: 12,
      items: [],
    },
    {
      id: 13,
      items: [],
    },
    {
      id: 14,
      items: [],
    },
    {
      id: 15,
      items: [],
    },
    {
      id: 16,
      items: [],
    },
    {
      id: 17,
      items: [],
    },
  ]);*/

  const madePuzzlesArray = puzzleArray[1].storagePuzzle[0].madePuzzlesReady;
  console.log('madePuzzlesArray', madePuzzlesArray);

  const [boards, setBoards] = useState(workingArray);
  // заносим пазлы для того чтобы понять собраны или нет
  // const [madePuzzles, setMadePuzzles] = useState(madePuzzlesArray);
  // console.log('madePuzzles', madePuzzles);
  // console.log('boards>>>', boards);
  // -----------------------------------------
  // пазлы выпадают случайным образом
  /*const randomImg = (a: any, b: any) => {
    return Math.random() - 0.5;
  };
  boards[0].disassembledPuzzles.sort(randomImg);*/
  // ------------------------------------------
  const idPuzzle: any = [];
  console.log('idPuzzle11111111111', idPuzzle);
  const keyPuzzle: any = [];
  console.log('keyPuzzle222222', keyPuzzle);
  let victory;
  // const [victory, setVictory] = useState(false);
  // console.log('victory3333333', victory);
  /* let victory;
  // console.log('victory3333333', victory);
  if (victory) {
    console.log('victory', victory);
  } else {
    console.log('СОБРАТЬ');
  }*/

  const findOverwriteIntoNewArray = (madePuzzles: any) => {
    // console.log('madePuzzles>>>', madePuzzles);
    madePuzzles.forEach((puzzleInArray: any) => {
      // console.log('puzzleInArray>>>', puzzleInArray.id);
      idPuzzle.push(puzzleInArray.id - 1);
    });
    Object.keys(idPuzzle).find((key, index) => {
      keyPuzzle.push(index);
      // console.log('keyPuzzle', keyPuzzle);
    });
  };
  findOverwriteIntoNewArray(madePuzzlesArray);

  const puzzleInPlaceOrNot = (idPuzzle: any, keyPuzzle: any) => {
    console.log('idPuzzle.length', idPuzzle.length);
    console.log('idPuzzle.toString()', idPuzzle.toString());
    console.log('keyPuzzle.toString()', keyPuzzle.toString());
    if (idPuzzle.length === 16 && idPuzzle.toString() === keyPuzzle.toString()) {
      victory = true;
      // setVictory(true);
      console.log('Победа');
      // }
    } else {
      console.log('меньше 16ти');
    }
  };
  puzzleInPlaceOrNot(idPuzzle, keyPuzzle);
  // -------------------------------

  // состояние для текущей доски и для текущего состояния
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const dragOverHandler = (e: any) => {
    e.preventDefault();
    // e.target.style.transform = 'translateY(0px)';
    // console.log('e.target.style', e.target.style.transform);
    /*if (e.target.className == 'puzzles_item__WeSE_') {
      // поиск по классу не надёжный добавить id
      e.target.style.boxShadow = '0 4px 3px gray';
    }*/
  };

  const dragLeaveHandler = (e: any) => {
    e.target.style.boxShadow = 'none';
    // e.target.style.transform = 'translateY(0px)';
  };

  const dragStartHandler = (e: any, board: any, item: any, itemItem: number) => {
    // boards[0].disassembledPuzzles.splice(item, 1);
    setCurrentBoard(board);
    setCurrentItem(item);
    // setMadePuzzles(item);
    // setMadePuzzles(item);
    // animation(item, itemItem);
    // e.target.style.transform = 'translateY(0px)';
    // console.log('drag', board);
  };

  const dragEndHandler = (e: any) => {
    // e.target.style.transform = 'translateY(0px)';
  };
  const dropHandler = (e: any, board: any, item: any) => {
    e.preventDefault();
    // console.log('item>>>>>>>>>', item);
    // boards[1].madePuzzles.push(item);
    // e.target.style.transform = 'translateY(0px)';
    // получаем индекс в массиве у текущей карточки
    // const currentIndex = currentBoard.items.indexOf(currentItem);
    // удаляем элемент с текущей доски
    // currentBoard.items.splice(currentIndex, 1);
    // удаляем индекс элемента над которым держим карточку
    const dropIndex = board.disassembledPuzzles.indexOf(item);
    board.disassembledPuzzles.splice(dropIndex + 1, 0, currentItem); //currentItem - вставляем карточку после удалённых элементов
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
    e.target.style.transform = 'translateY(0px)';
    // записываю во второй массив картинку которая на поле
    board.disassembledPuzzles.push(currentItem);

    const currentIndex = currentBoard.disassembledPuzzles.indexOf(currentItem);
    // console.log('madePuzzlesArray', madePuzzlesArray);
    // console.log('currentItem', currentItem);
    madePuzzlesArray?.push(currentItem);
    // удаляем элемент с текущей доски
    currentBoard.disassembledPuzzles.splice(currentIndex, 1);

    const filteredArray: any = [];
    // setCurrentBoard(filteredArray);
    board.disassembledPuzzles.filter((item: any) => {
      if (!filteredArray.some((element: any) => element.id === item.id)) {
        filteredArray.push(item);
      }
    });
    board.disassembledPuzzles = filteredArray;

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

  const animationNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const [animationActive, setAnimationActive] = useState(false);
  const [animationNumberUse, setAnimationNumberUse] = useState(animationNumber);

  /*  const animation = (item: any, itemItem: number) => {
    if (item.id !== itemItem) {
      setAnimationActive(!animationActive);
    }
    console.log('item', item);
    console.log('animationActive', animationActive);
  };*/

  return (
    <div id='up' className={styles.cases}>
      <Head>
        <title>Puzzles</title>
        <meta name='Description of flexyti Our Projects' content='Content of flexyti Our Projects' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        {victory ? <div>Вы молодец!</div> : <div>собрать пазл</div>}
        <div className={styles.app}>
          {boards.map((board, boardsIndex) => (
            <div
              className={styles.board}
              key={`boardsIndex_${boardsIndex}`}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropCardHandler(e, board)}>
              {board.disassembledPuzzles.map((item, itemItem) => (
                <div
                  onDragOver={(e) => dragOverHandler(e)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragStart={(e) => dragStartHandler(e, board, item, itemItem)}
                  onDragEnd={(e) => dragEndHandler(e)}
                  onDrop={(e) => dropHandler(e, board, item)}
                  // // className={styles.todo}
                  draggable={true}
                  key={`itemItem${itemItem}`}
                  // className={animationActive ? styles.active : styles.item}
                  className={styles.item}>
                  <div className={styles.imgFigure}>
                    <Image width={200} height={200} src={item.img} alt='Business analysis' />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default OneObjectPuzzle;
