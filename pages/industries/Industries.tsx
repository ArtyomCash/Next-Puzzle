import type { NextPage } from 'next';
import styles from './industries.module.scss';
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
    storagePuzzle: [
      {
        idStoragePuzzle: 1,
        assembled: false,
        puzzleName: 'One Wood',
        reward: false,
        arrayStoragePuzzleWood: [
          {
            idPuzzlePiece: 0,
            imgPuzzlePiece: wood_01.src,
          },
          {
            idPuzzlePiece: 1,
            imgPuzzlePiece: wood_15.src,
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
            imgPuzzlePiece: wood_02.src,
          },
          {
            idPuzzlePiece: 15,
            imgPuzzlePiece: wood_16.src,
          },
        ],
        collectedElements: [
          {
            idPuzzlePiece: 0,
            imgPuzzlePiece: wood_16.src,
          },
          {
            idPuzzlePiece: 1,
            imgPuzzlePiece: wood_16.src,
          },
          {
            idPuzzlePiece: 2,
            imgPuzzlePiece: wood_16.src,
          },
          {
            idPuzzlePiece: 3,
            imgPuzzlePiece: wood_16.src,
          },
          {
            idPuzzlePiece: 4,
            imgPuzzlePiece: wood_16.src,
          },
          {
            idPuzzlePiece: 5,
            imgPuzzlePiece: wood_16.src,
          },
          {
            idPuzzlePiece: 6,
            imgPuzzlePiece: wood_16.src,
          },
          {
            idPuzzlePiece: 7,
            imgPuzzlePiece: wood_16.src,
          },
          {
            idPuzzlePiece: 8,
            imgPuzzlePiece: wood_16.src,
          },
          {
            idPuzzlePiece: 9,
            imgPuzzlePiece: wood_16.src,
          },
          {
            idPuzzlePiece: 10,
            imgPuzzlePiece: wood_16.src,
          },
          {
            idPuzzlePiece: 11,
            imgPuzzlePiece: wood_16.src,
          },
          {
            idPuzzlePiece: 12,
            imgPuzzlePiece: wood_16.src,
          },
          {
            idPuzzlePiece: 13,
            imgPuzzlePiece: wood_16.src,
          },
          {
            idPuzzlePiece: 14,
            imgPuzzlePiece: wood_16.src,
          },
          {
            idPuzzlePiece: 15,
            imgPuzzlePiece: wood_16.src,
          },
        ],
      },
      /*{
        idStoragePuzzle: 2,
        assembled: false,
        puzzleName: 'Place',
        reward: false,
        arrayStoragePuzzleWood: [
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
      },*/
    ],
  },
];
const activePuzzleCopy = [...puzzleArray];

const puzzleWood = activePuzzleCopy[1]?.storagePuzzle[0]?.arrayStoragePuzzleWood;

const collectedElementsWood = activePuzzleCopy[1]?.storagePuzzle[0]?.collectedElements;

// console.log('новый массив с картинками', indexActivePuzzleCopy);

const arrayCurrentSet = activePuzzleCopy[1]?.storagePuzzle;

const Industries: NextPage = () => {
  // общий массив
  const [currentSet, setCurrentSet] = useState(arrayCurrentSet);
  const [itemIndex, setItemIndex] = useState();

  // console.log('куда записывать', currentSet[0]?.arrayStoragePuzzleWood);

  // пазл который изъяли
  const [puzzleTake, setPuzzleTake] = useState();
  // console.log('puzzleTake11111', puzzleTake);
  // const [puzzleWoodUpdate, setPuzzleWoodUpdate] = useState(puzzleWood);
  // const [collectedElUpdate, setCollectedElUpdate] = useState(collectedElementsWood);

  console.log('пазл в UseState', puzzleTake?.idPuzzlePiece);

  const dragOverHandler = (e: any) => {
    e.preventDefault();
    if (e.target.className !== 'imgPuzzle__AEcXr') {
      // e.target.style.boxShadow = '0 4px 3px gray';
      e.target.style.background = 'red';
    }
  };

  const dragLeaveHandler = (e: any) => {
    e.target.style.background = 'none';
  };

  const dragStartHandler = (e: any, woodItem: any) => {
    setPuzzleTake(woodItem);
    const woodItemIndex = puzzleWood.indexOf(woodItem);
    setItemIndex(woodItemIndex);

    // const currentIndex = currentSet[0]?.arrayStoragePuzzleWood.indexOf(woodItem);
    // удаляем пазл из массива
    // const puzzleInLeftBoard = currentSet[0]?.arrayStoragePuzzleWood.splice(currentIndex, 1);
    // console.log('puzzleInLeftBoard', puzzleInLeftBoard);
    const puzzleInLeftBoard = currentSet[0]?.arrayStoragePuzzleWood.splice(woodItem, 1);
  };

  const dropHandler = (e: any, woodItem: any) => {
    e.preventDefault();
  };
  const onDragEnter = (e: any) => {
    console.log('onDragEnter');
  };

  const dragEndHandler = (e: any) => {
    e.target.style.background = 'none';
    console.log('77777777');
    console.log('arrayStoragePuzzleWood', currentSet[0].arrayStoragePuzzleWood);
    console.log('collectedElements', currentSet[0].collectedElements);
    let puzzleControl;

    // console.log('puzzleControl', puzzleControl);
    // currentSet[0].collectedElements.unshift(puzzleTake);
    currentSet[0].collectedElements.splice(itemIndex, 1, puzzleTake);
    // setCurrentSet(currentSet);
    // setCurrentSet(currentSet);
    // console.log('collectedElements>>>', currentSet[0].collectedElements);
  };

  const dropHandlerDesktop = (e: any, woodItem: any) => {
    // console.log('woodItemtttttttttttttt', woodItem);
    e.preventDefault();
  };

  const dragStartHandlerDesktop = (e: any, collectedItem: any) => {
    console.log('collectedItem', collectedItem);
  };

  const dragEndHandlerDesktop = (e: any) => {};

  return (
    <div>
      <section
        className={styles.array}
        // onDragOver={(e) => dragOverHandler(e)}
        // onDrop={(e) => dropHandler(e)}
        // onDragLeave={(e) => dragLeaveHandler(e)}
        // onDragStart={(e) => dragStartHandler(e)}
        // onDragEnd={(e) => dragEndHandler(e)}
        // draggable={true}
      >
        {currentSet?.map((storagePuzzleItem, storagePuzzleIndex) => (
          <div className={styles.puzzleContainer} key={`storagePuzzleIndex_${storagePuzzleIndex}`}>
            {storagePuzzleItem.arrayStoragePuzzleWood.map((woodItem, woodIndex) => (
              <div
                className={styles.imgPuzzle}
                key={`woodIndex_${woodIndex}`}
                onDragOver={(e) => dragOverHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragStart={(e) => dragStartHandler(e, woodItem)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropHandler(e, woodItem)}
                onDragEnter={(e) => onDragEnter(e)}
                draggable={true}>
                <Image width={200} height={200} src={woodItem.imgPuzzlePiece} alt='' />
              </div>
            ))}
            <div className={styles.desktop}>
              {storagePuzzleItem.collectedElements.map((collectedItem, collectedIndex) => (
                <div
                  className={styles.imgPuzzle}
                  key={`collectedIndex_${collectedIndex}`}
                  onDragOver={(e) => dragOverHandler(e)}
                  // onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragStart={(e) => dragStartHandlerDesktop(e, collectedItem)}
                  onDragEnd={(e) => dragEndHandlerDesktop(e)}
                  // onDrop={(e) => dropHandlerDesktop(e, collectedItem)}
                  onDrop={(e) => dropHandlerDesktop(e, collectedItem)}
                  draggable={true}>
                  <Image width={200} height={200} src={collectedItem.imgPuzzlePiece} alt='' />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Industries;
