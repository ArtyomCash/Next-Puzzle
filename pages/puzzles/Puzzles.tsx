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
// import { log } from 'util';

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
      finishedPuzzle: [],
    },
    {
      id: 2,
      title: '',
      // img: wood_02.src,
      items: [],
      finishedPuzzle: [],
    },
    {
      id: 3,
      title: '',
      // img: wood_03.src,
      items: [],
      finishedPuzzle: [],
    },
    {
      id: 4,
      title: '',
      // img: wood_03.src,
      items: [],
      finishedPuzzle: [],
    },
    {
      id: 5,
      title: '',
      // img: wood_03.src,
      items: [],
      finishedPuzzle: [],
    },
    {
      id: 6,
      title: '',
      // img: wood_03.src,
      items: [],
      finishedPuzzle: [],
    },
    {
      id: 7,
      title: '',
      // img: wood_03.src,
      items: [],
      finishedPuzzle: [],
    },
    {
      id: 8,
      title: '',
      // img: wood_03.src,
      items: [],
      finishedPuzzle: [],
    },
    {
      id: 9,
      title: '',
      // img: wood_03.src,
      items: [],
      finishedPuzzle: [],
    },
    {
      id: 10,
      title: '',
      // img: wood_03.src,
      items: [],
      finishedPuzzle: [],
    },
    {
      id: 11,
      title: '',
      // img: wood_03.src,
      items: [],
      finishedPuzzle: [],
    },
    {
      id: 12,
      title: '',
      // img: wood_03.src,
      items: [],
      finishedPuzzle: [],
    },
    {
      id: 13,
      title: '',
      // img: wood_03.src,
      items: [],
      finishedPuzzle: [],
    },
    {
      id: 14,
      title: '',
      // img: wood_03.src,
      items: [],
      finishedPuzzle: [],
    },
    {
      id: 15,
      title: '',
      // img: wood_03.src,
      items: [],
      finishedPuzzle: [],
    },
    {
      id: 16,
      title: '',
      // img: wood_03.src,
      items: [],
      finishedPuzzle: [],
    },
    {
      id: 17,
      title: '',
      // img: wood_03.src,
      items: [],
      finishedPuzzle: [],
    },
  ];
  // массив досок
  const [boards, setBoards] = useState(arrayImg);

  // const [indexOfElement, setIndexOfElement] = useState(idPuzzle);

  const idPuzzle: any = [];
  const keyPuzzle: any = [];
  let victory;

  // console.log('keyPuzzle>>>>', keyPuzzle);
  // console.log('idPuzzle', idPuzzle);

  const findOverwriteIntoNewArray = (boards: any) => {
    boards.forEach((puzzleInArray: any) => {
      puzzleInArray.finishedPuzzle.filter((id: any) => {
        idPuzzle.push(id.id - 1);
      });
    });
    Object.keys(idPuzzle).find((key, index) => {
      keyPuzzle.push(index);
    });
    // const element = 15;
    // const idx = indexPuzzle.indexOf(idPuzzle);
    // console.log('idx', idx);
    // console.log('indexPuzzle', indexPuzzle);
    /*let puzzleIndexOf = idPuzzle.indexOf(indexOfElement);
    console.log('puzzleIndexOf', puzzleIndexOf);
    while (puzzleIndexOf != -1) {
      indexPuzzle.push(puzzleIndexOf);
      puzzleIndexOf = idPuzzle.indexOf(idPuzzle, puzzleIndexOf + 1);
    }
    console.log('puzzleIndexOf', puzzleIndexOf);*/
    /* idPuzzle.filter((puzzle: any) => {
      const puzzleIndexOf = puzzle.indexOf(indexOfElement);
      console.log('puzzleIndexOf', puzzleIndexOf);
    });*/
    /* while (idx != -1) {
      indexPuzzle.push(idx);
      idx = idPuzzle.indexOf(idPuzzle, idx + 1);
    }
    console.log('keyPuzzle', indexPuzzle);*/
    /* const indices = [];
    const array = ['a', 'b', 'a', 'c', 'a', 'd'];
    const element = 'a';
    let idx = array.indexOf(element);
    while (idx != -1) {
      indices.push(idx);
      idx = array.indexOf(element, idx + 1);
    }*/
    // console.log('indices', indices);
    // [0, 2, 4]
  };
  findOverwriteIntoNewArray(boards);

  const puzzleInPlaceOrNot = (idPuzzle: any, keyPuzzle: any) => {
    if (idPuzzle.length === 16 && idPuzzle.toString() === keyPuzzle.toString()) {
      // console.log('в id 16 строк');
      // const isEqual = idPuzzle.toString() === keyPuzzle.toString();
      // console.log('isEqual', isEqual);
      // if (idPuzzle.toString() === keyPuzzle.toString()) {
      victory = true;
      // }
    } else {
      console.log('меньше 16ти');
    }

    /* const isEqual = idPuzzle.toString() === keyPuzzle.toString();
    console.log('isEqual', isEqual);
    if (isEqual) {
      victory = true;
    }*/
  };
  puzzleInPlaceOrNot(idPuzzle, keyPuzzle);

  // состояние для текущей доски и для текущего состояния
  const [currentBoard, setCurrentBoard] = useState<any>(null);
  console.log('currentBoard', currentBoard);
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

  const dragStartHandlerDesktop = (e: any, itemBoard: any) => {
    console.log('board', itemBoard);
    const currentIndex = currentBoard.items.indexOf(itemBoard);
    // удаляем элемент с текущей доски
    console.log('currentIndex', currentIndex);
    currentBoard.finishedPuzzle.splice(currentIndex, 1);
    /* currentBoard.finishedPuzzle.splice(currentIndex, 1);
    console.log('deleteOb>>>', currentBoard.finishedPuzzle);
    // currentBoard.items.splice(currentIndex, 1);
    // функция состояния
    setBoards(
      boards.map((b) => {
        if (b.id !== itemBoard.id) {
          return itemBoard;
        }
        if (b.id !== currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );*/
  };

  const dropCardHandler = (e: any, board: any) => {
    // добавляем задачу в новую доску
    board.finishedPuzzle.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    // удаляем элемент с текущей доски
    currentBoard.finishedPuzzle.splice(currentIndex, 1);
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
  };

  const dropHandlerDesktop = (e: any, board: any, item: any) => {
    const currentIndex = currentBoard.items.indexOf(item);
    currentBoard.finishedPuzzle.splice(currentIndex, 1);
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
  };

  return (
    <div id='up' className={styles.cases}>
      <Head>
        <title>Puzzles</title>
        <meta name='Description of flexyti Our Projects' content='Content of flexyti Our Projects' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className={styles.wrapper}>
        {victory ? <div>Вы молодец!</div> : <div>собрать пазл</div>}

        <div className={styles.app}>
          {boards.map((board, boardsIndex) => (
            <>
              <div
                key={`boardsIndex_${boardsIndex}`}
                className={boardsIndex === 0 ? styles.boardWrapper : styles.board}
                onDragOver={(e) => dragOverHandler(e)}
                // onDrop={(e) => dropCardHandler(e, board)}
              >
                <div className={styles.boardTitle}>{board.title}</div>
                {board.items.map((item, itemItem) => (
                  <div
                    key={`itemItem${itemItem}`}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    onDragStart={(e) => dragStartHandler(e, board, item)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDrop={(e) => dropHandler(e, board, item)}
                    draggable={true}
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
          {boards.map((board, boardsIndexSecond) => (
            <div
              key={`boardsIndexSecond_${boardsIndexSecond}`}
              className={boardsIndexSecond === 0 ? styles.boardWrapperSecond : styles.boardSecond}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropCardHandler(e, board)}>
              {/*<div className={styles.boardTitle}>{board.title}</div>*/}
              {board.finishedPuzzle.map((itemDesktop, itemBoard) => (
                <div
                  key={`itemBoard_${itemBoard}`}
                  onDragOver={(e) => dragOverHandler(e)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragStart={(e) => dragStartHandlerDesktop(e, itemDesktop)}
                  // onDragStart={(e) => dragStartHandler(e, board, itemDesktop)}
                  onDragEnd={(e) => dragEndHandler(e)}
                  onDrop={(e) => dropHandlerDesktop(e, board, itemDesktop)}
                  draggable={true}
                  className={styles.item}>
                  <div className={styles.imgFigure}>
                    <Image width={200} height={200} src={itemDesktop.img} alt='Business analysis' />
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

export default Puzzles;
