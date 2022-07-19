import type { NextPage } from 'next';
import styles from './projects.module.scss';
import React, { useState } from 'react';

import wood_01 from 'assets/Puzzle/wood/wood_01.jpg';
import wood_02 from 'assets/Puzzle/wood/wood_02.jpg';
import wood_03 from 'assets/Puzzle/wood/wood_03.jpg';
import wood_04 from 'assets/Puzzle/wood/wood_04.jpg';
import wood_05 from 'assets/Puzzle/wood/wood_05.jpg';
import wood_06 from 'assets/Puzzle/wood/wood_06.jpg';
import wood_07 from 'assets/Puzzle/wood/wood_07.jpg';
import wood_08 from 'assets/Puzzle/wood/wood_08.jpg';
import wood_09 from 'assets/Puzzle/wood/wood_09.jpg';
import wood_10 from 'assets/Puzzle/wood/wood_10.jpg';
import wood_11 from 'assets/Puzzle/wood/wood_11.jpg';
import wood_12 from 'assets/Puzzle/wood/wood_12.jpg';
import wood_13 from 'assets/Puzzle/wood/wood_13.jpg';
import wood_14 from 'assets/Puzzle/wood/wood_14.jpg';
import wood_15 from 'assets/Puzzle/wood/wood_15.jpg';
import wood_16 from 'assets/Puzzle/wood/wood_16.jpg';
import Image from 'next/image';

const puzzleArray = [
  { namePlayer: 'Семён', idPlayer: 1, password: '1' },
  {
    storagePuzzle: {
      idStoragePuzzle: 1,
      assembled: true,
      arrayStoragePuzzle: [
        {
          idPuzzlePiece: 0,
          imgPuzzlePiece: wood_01.src,
        },
        {
          idPuzzlePiece: 1,
          imgPuzzlePiece: wood_02.src,
        },
        {
          idPuzzlePiece: 2,
          imgPuzzlePiece: wood_03.src,
        },
        {
          idPuzzlePiece: 3,
          imgPuzzlePiece: wood_04.src,
        },
        {
          idPuzzlePiece: 4,
          imgPuzzlePiece: wood_05.src,
        },
        {
          idPuzzlePiece: 5,
          imgPuzzlePiece: wood_06.src,
        },
        {
          idPuzzlePiece: 6,
          imgPuzzlePiece: wood_07.src,
        },
        {
          idPuzzlePiece: 7,
          imgPuzzlePiece: wood_08.src,
        },
        {
          idPuzzlePiece: 8,
          imgPuzzlePiece: wood_09.src,
        },
        {
          idPuzzlePiece: 9,
          imgPuzzlePiece: wood_10.src,
        },
        {
          idPuzzlePiece: 10,
          imgPuzzlePiece: wood_11.src,
        },
        {
          idPuzzlePiece: 11,
          imgPuzzlePiece: wood_12.src,
        },
        {
          idPuzzlePiece: 12,
          imgPuzzlePiece: wood_13.src,
        },
        {
          idPuzzlePiece: 13,
          imgPuzzlePiece: wood_14.src,
        },
        {
          idPuzzlePiece: 14,
          imgPuzzlePiece: wood_15.src,
        },
        {
          idPuzzlePiece: 15,
          imgPuzzlePiece: wood_16.src,
        },
      ],
      collectedElements: [
        {
          imgPuzzlePiece: '',
        },
        {
          imgPuzzlePiece: '',
        },
        {
          imgPuzzlePiece: '',
        },
        {
          imgPuzzlePiece: '',
        },
        {
          imgPuzzlePiece: '',
        },
        {
          imgPuzzlePiece: '',
        },
        {
          imgPuzzlePiece: '',
        },
        {
          imgPuzzlePiece: '',
        },
        {
          imgPuzzlePiece: '',
        },
        {
          imgPuzzlePiece: '',
        },
        {
          imgPuzzlePiece: '',
        },
        {
          imgPuzzlePiece: '',
        },
        {
          imgPuzzlePiece: '',
        },
        {
          imgPuzzlePiece: '',
        },
        {
          imgPuzzlePiece: '',
        },
        {
          imgPuzzlePiece: '',
        },
      ],
    },
  },
];

const arrayImg = puzzleArray[1].storagePuzzle?.arrayStoragePuzzle;
const collected = puzzleArray[1].storagePuzzle?.collectedElements;

/*const replacementPieces = () => {
  arrayImg?.forEach((puzzle) => {
    console.log(puzzle);
    const currentIndex = arrayImg.indexOf(puzzle);
    console.log('currentIndex>>>>>', currentIndex);
    arrayImg.splice(currentIndex, 0);
  });
};
replacementPieces();*/

// console.log('puzzleArray>>>', puzzleArray[1].storagePuzzle);

const Industries: NextPage = () => {
  /*  const [currentPuzzle, setCurrentPuzzle] = useState(puzzleArray);
  console.log('сейчас в useSate', currentPuzzle);
  const dragOverHandler = (e: any) => {
    e.preventDefault();
    // console.log('dragOverHandler');
  };
  const dragLeaveHandler = (e: any) => {};
  const dragStartHandler = (e: any, puzzle: any) => {
    // то элемент который взял, записываем в useState
    setCurrentPuzzle(puzzle);
    // удаляем этот элемент из массива
    // const currentIndex = arrayImg?.indexOf(puzzle);
    // setInterval(() => arrayImg?.splice(puzzle, 1), 100);
    console.log('Элемент который взял', puzzle);
    arrayImg?.splice(puzzle, 1);
  };
  const dragStartHandlerDesktop = (e: any, puzzleDesktop: any) => {
    // const smotry = collected?.splice(puzzleDesktop, 1);
    console.log('забрал с десктопа');
  };

  const dragEndHandler = (e: any) => {
    e.target.style.boxShadow = 'none';
  };
  const dropHandler = (e: any, puzzle: any) => {
    // на какой элемент кидаешь пазл
    // console.log('e', e.dataTransfer);
    // console.log('111111');
    e.preventDefault();
    console.log('на какой элемент кидаешь пазл', puzzle);
  };

  const dragPuzzleOverHandler = (e: any, puzzleDesktop: any) => {
    // добавляем новый кусочек пазла
    console.log('добавляем новый кусочек пазла');
    console.log('puzzleDesktop', puzzleDesktop);
    const dobavil = collected?.push(puzzleDesktop);
    console.log('dobavil>>>', dobavil);
  };

  const dropPuzzleHandler = (e: any, puzzleDesktop: any) => {
    console.log('puzzleDesktop', puzzleDesktop);
    const puzzleDesktopIndex = collected?.indexOf(puzzleDesktop);
    // puzzleDesktop.push(currentPuzzle);
    console.log('puzzleDesktopIndex', puzzleDesktopIndex);
  };*/

  /*  return (
    <section
      className={styles.array}
      onDragOver={(e) => dragOverHandler(e)}
      // onDrop={(e) => dropHandler(e)}
      // onDragLeave={(e) => dragLeaveHandler(e)}
      // onDragStart={(e) => dragStartHandler(e)}
      // onDragEnd={(e) => dragEndHandler(e)}
      draggable={true}>
      {/!*<div className={styles.storagePuzzle}>
        {puzzleArray[1].storagePuzzle?.arrayStoragePuzzle.map((puzzle, puzzleIndex) => (
          <div
            className={styles.imgPuzzle}
            key={puzzleIndex}
            onDragOver={(e) => dragOverHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragStart={(e) => dragStartHandler(e, puzzle)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDrop={(e) => dropHandler(e, puzzle)}
            draggable={true}>
            <Image width={200} height={200} src={puzzle.imgPuzzlePiece} alt='' />
          </div>
        ))}
      </div>
      <div className={styles.desktop}>
        {puzzleArray[1].storagePuzzle?.collectedElements.map((puzzle, puzzleIndex) => (
          <div key={puzzleIndex}>
            {puzzle.imgPuzzlePiece === '' ? (
              <div className={styles.imgPuzzle} />
            ) : (
              <div
                className={styles.imgPuzzle}
                key={puzzleIndex}
                onDragOver={(e) => dragOverHandler(e)}
                // onDragLeave={(e) => dragLeaveHandler(e)}
                // onDragStart={(e) => dragStartHandler(e, puzzle)}
                // onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropPuzzleHandler(e, puzzle)}
                draggable={true}>
                <Image width={200} height={200} src={puzzle.imgPuzzlePiece} alt='' />
              </div>
            )}
          </div>
        ))}
      </div>*!/}

      <div className={styles.storagePuzzle}>
        {puzzleArray[1].storagePuzzle?.arrayStoragePuzzle.map((puzzle, puzzleIndex) => (
          <div
            className={styles.imgPuzzle}
            key={puzzleIndex}
            onDragStart={(e) => dragStartHandler(e, puzzle)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, puzzle)}
            draggable={true}>
            <Image width={200} height={200} src={puzzle.imgPuzzlePiece} alt='' />
          </div>
        ))}
      </div>
      <div className={styles.desktop}>
        {puzzleArray[1].storagePuzzle?.collectedElements.map((puzzleDesktop, puzzleIndex) => (
          <div key={puzzleIndex}>
            {puzzleDesktop.imgPuzzlePiece === '' ? (
              <div
                className={styles.imgPuzzle}
                draggable={true}
                // onDragOver={(e) => dragPuzzleOverHandler(e, puzzle)}
                // onDragLeave={(e) => dragLeaveHandler(e)}
                onDragStart={(e) => dragStartHandlerDesktop(e, puzzleDesktop)}
                // onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropPuzzleHandler(e, puzzleDesktop)}
              />
            ) : (
              <div
                className={styles.imgPuzzle}
                key={puzzleIndex}
                onDragOver={(e) => dragPuzzleOverHandler(e, puzzleDesktop)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragStart={(e) => dragStartHandler(e, puzzleDesktop)}
                onDragEnd={(e) => dragEndHandler(e)}
                // onDrop={(e) => dropPuzzleHandler(e, puzzle)}
                onDrop={(e) => dropPuzzleHandler(e, puzzleDesktop)}
                draggable={true}>
                <Image width={200} height={200} src={puzzleDesktop.imgPuzzlePiece} alt='' />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );*/

  const [state, setState] = useState<{ tasks: Task[] }>({
    tasks: [
      { name: 'Learn Angular', category: 'wip', bgcolor: 'yellow' },
      { name: 'React', category: 'wip', bgcolor: 'pink' },
      { name: 'Vue', category: 'complete', bgcolor: 'skyblue' },
    ],
  });

  const onDragStart = (ev: DragEvent<HTMLDivElement>, id: string) => {
    console.log('dragstart:', id);
    ev.dataTransfer.setData('id', id);
  };

  const onDragOver = (ev: DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  };

  const onDrop = (ev: DragEvent<HTMLDivElement>, cat: 'wip' | 'complete') => {
    const id = ev.dataTransfer.getData('id');

    const tasks = state.tasks.filter((task) => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });

    setState({
      ...state,
      tasks,
    });
  };

  type Task = { name: string; category: 'wip' | 'complete'; bgcolor: string };

  type Tasks = {
    wip: JSX.Element[];
    complete: JSX.Element[];
  };

  const tasks: Tasks = {
    wip: [],
    complete: [],
  };
  console.log('tasks>>>>>', tasks);

  state.tasks.forEach((t: Task) => {
    tasks[t.category].push(
      <div
        key={t.name}
        onDragStart={(e) => onDragStart(e, t.name)}
        draggable
        className={styles.draggable}
        style={{ backgroundColor: t.bgcolor }}>
        {t.name}
      </div>
    );
  });

  return (
    <div className={styles.containerDrag}>
      <h2 className={styles.headerSecond}>DRAG & DROP DEMO</h2>
      <div
        className='wip'
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, 'wip');
        }}>
        <span className={styles.taskHeader}>WIP</span>
        {tasks.wip}
      </div>
      <div className={styles.droppable} onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, 'complete')}>
        <span className={styles.taskHeader}>COMPLETED</span>
        {tasks.complete}
      </div>
    </div>
  );
};

export default Industries;
