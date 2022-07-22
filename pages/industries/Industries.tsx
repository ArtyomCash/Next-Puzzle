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
import { log } from 'util';

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
            idPuzzlePiece: 0,
            imgPuzzlePiece: '',
          },
          {
            idPuzzlePiece: 1,
            imgPuzzlePiece: '',
          },
          {
            idPuzzlePiece: 2,
            imgPuzzlePiece: '',
          },
          {
            idPuzzlePiece: 3,
            imgPuzzlePiece: '',
          },
          {
            idPuzzlePiece: 4,
            imgPuzzlePiece: '',
          },
          {
            idPuzzlePiece: 5,
            imgPuzzlePiece: '',
          },
          {
            idPuzzlePiece: 6,
            imgPuzzlePiece: '',
          },
          {
            idPuzzlePiece: 7,
            imgPuzzlePiece: '',
          },
          {
            idPuzzlePiece: 8,
            imgPuzzlePiece: '',
          },
          {
            idPuzzlePiece: 9,
            imgPuzzlePiece: '',
          },
          {
            idPuzzlePiece: 10,
            imgPuzzlePiece: '',
          },
          {
            idPuzzlePiece: 11,
            imgPuzzlePiece: '',
          },
          {
            idPuzzlePiece: 12,
            imgPuzzlePiece: '',
          },
          {
            idPuzzlePiece: 13,
            imgPuzzlePiece: '',
          },
          {
            idPuzzlePiece: 14,
            imgPuzzlePiece: '',
          },
          {
            idPuzzlePiece: 15,
            imgPuzzlePiece: '',
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
  console.log('куда записывать', currentSet[0]?.arrayStoragePuzzleWood);

  // пазл который изъяли
  const [puzzleTake, setPuzzleTake] = useState();
  console.log('puzzleTake11111', puzzleTake);
  // const [puzzleWoodUpdate, setPuzzleWoodUpdate] = useState(puzzleWood);
  const [чтоВнутри, сетЧтоВнутри] = useState();
  console.log('чтоВнутри', чтоВнутри);
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
    const currentIndex = currentSet[0]?.arrayStoragePuzzleWood.indexOf(woodItem);
    // удаляем пазл из массива
    const puzzleInLeftBoard = currentSet[0]?.arrayStoragePuzzleWood.splice(currentIndex, 1);
    // console.log('puzzleInLeftBoard', puzzleInLeftBoard);
  };

  const dropHandler = (e: any, woodItem: any) => {
    e.preventDefault();
    console.log('currentSet', currentSet[0].arrayStoragePuzzleWood);
    let puzzleControl;
    console.log('puzzleControl', puzzleControl);
    // currentSet[0].arrayStoragePuzzleWood.push(puzzleTake);
    /*currentSet[0].arrayStoragePuzzleWood.forEach((remotePuzzle) => {
      // let eee: any;
      // console.log('eee', eee);
      // console.log('element', remotePuzzle.idPuzzlePiece);
      // console.log('puzzleTake.idPuzzlePiece', puzzleTake?.idPuzzlePiece);
      // console.log('puzzleTake', puzzleTake);
      if (puzzleTake?.idPuzzlePiece !== remotePuzzle.idPuzzlePiece) {

      }
    });
    console.log('new', currentSet[0].arrayStoragePuzzleWood);*/
    /*setCurrentSet(
      currentSet[0]?.arrayStoragePuzzleWood.forEach((remotePuzzle) => {
        if (remotePuzzle?.idPuzzlePiece === puzzleTake?.idPuzzlePiece) {
          currentSet[0]?.arrayStoragePuzzleWood.push(puzzleTake);
          console.log('нашёл');
        } else {
          return currentSet;
          console.log('не нашёл');
          console.log('remotePuzzle11111', remotePuzzle?.idPuzzlePiece);
          console.log('puzzleTake?.idPuzzlePiece222222', puzzleTake?.idPuzzlePiece);
        }
        // console.log('55555555555remotePuzzle', remotePuzzle.idStoragePuzzle);
      })
    );*/
    /*    setCurrentSet(
      currentSet?.filter((e) => {
        e.arrayStoragePuzzleWood.forEach((remotePuzzle) => {
          const www = [];

          if (remotePuzzle?.idPuzzlePiece !== puzzleTake?.idPuzzlePiece) {
            console.log('remotePuzzle', remotePuzzle.idPuzzlePiece);
            console.log('puzzleTake', puzzleTake?.idPuzzlePiece);
          } else {
            www.push(puzzleTake?.idPuzzlePiece);
            return currentSet[0].arrayStoragePuzzleWood.push(puzzleTake?.idPuzzlePiece);
          }
          console.log('www', www);
        });
      })
    );*/
    // console.log('currentSet?.arrayStoragePuzzleWood', currentSet?.arrayStoragePuzzleWood[0]);

    // получаем индекс в массиве у текущей карточки
    // const currentIndex = currentSet[0]?.arrayStoragePuzzleWood.indexOf(woodItem);
    // console.log('currentIndex', currentIndex);
    // itemActivePuzzleCopy.splice(currentIndex + 1, 0, woodItem);
    // console.log('currentSet[0].arrayStoragePuzzleWood', currentSet[0].arrayStoragePuzzleWood);
    // console.log('puzzleTake', puzzleTake);
    // const puzzlePush = currentSet[0].arrayStoragePuzzleWood.push(puzzleTake);
    // console.log('puzzlePush', puzzlePush);
    /*const newPuzzle: any = [];
    console.log('newPuzzle', newPuzzle);
    currentSet[0].arrayStoragePuzzleWood.forEach((remotePuzzle) => {
      if (remotePuzzle.idPuzzlePiece !== puzzleTake?.idPuzzlePiece) {
        newPuzzle.push(puzzleTake)
        // currentSet[0].arrayStoragePuzzleWood.splice(woodItem, 1, puzzleTake);
        // const currentIndex = remotePuzzle.idPuzzlePiece.indexOf(woodItem);
        // currentSet[0].arrayStoragePuzzleWood.splice(woodItem, 0, currentIndex);
        // console.log('currentSet[0].arrayStoragePuzzleWood', currentSet[0].arrayStoragePuzzleWood);
      } else {
        console.log('не записал');
      }
    });*/
    // const currentIndex = currentSet[0]?.arrayStoragePuzzleWood.indexOf(puzzleTake);
    // currentSet[0]?.arrayStoragePuzzleWood.splice(woodItem, 0, currentIndex);
    currentSet[0].arrayStoragePuzzleWood.unshift(puzzleTake);
    setCurrentSet(currentSet);
  };

  const dragEndHandler = (e: any) => {
    e.target.style.background = 'none';
  };

  const dropHandlerDesktop = (e: any, woodItem: any) => {
    // console.log('woodItemtttttttttttttt', woodItem);
    // получаем индекс в массиве у текущей карточки
    // const pushPuzzle = indexActivePuzzleCopy.push(puzzleTake);
    // console.log('pushPuzzle', pushPuzzle);
    // ---------------
    e.preventDefault();
    // const emptySquareIndex = indexActivePuzzleCopy.indexOf(puzzleTake);
    // const removedEmptySquare = currentSet[0]?.collectedElements.splice(emptySquareIndex + 1, 1, puzzleTake);
    // --------------
    // console.log('меняем пустой квадрат на картинку', removedEmptySquare);
    // console.log('puzzleTake>>>>>>>>>+++++', puzzleTake);
    // setCurrentSet(indexActivePuzzleCopy)
    // currentSet[0]?.collectedElements.push(puzzleTake);
    // const остатокМассива = currentSet?.splice(woodItem, 1);
    // const deletePuzzleBefore = currentSet[0]?.collectedElements.push(puzzleTake);
    // console.log('всавляем удалённый пазл панее в массив', deletePuzzleBefore);
    /*setCurrentSet(
      currentSet?.map((b) => {
        if (b.idStoragePuzzle === woodItem.idPuzzlePiece) {
          return woodItem;
        }
        if (b.idStoragePuzzle !== woodItem.idPuzzlePiece) {
          return puzzleTake;
        }
      })
    );*/
  };

  /*    const arrayQwe = [
    { name: 'Vasy', number: 24 },
    { name: 'Kolya', number: 37 },
  ];

  const rita = { name: 'Rita', number: 25 };
  const proba = () => {
    console.log('arrayQwe', arrayQwe);
    console.log('rita', rita);
    const vsego = arrayQwe.push(rita);
    console.log('vsego', vsego);

  };

  proba();
  console.log('arrayQwe111111', arrayQwe);*/
  // console.log('наличие пазлов', activePuzzleCopy[1]?.storagePuzzle[0]?.arrayStoragePuzzleWood);

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
                draggable={true}>
                <Image width={200} height={200} src={woodItem.imgPuzzlePiece} alt='' />
              </div>
            ))}
            <div className={styles.desktop}>
              {storagePuzzleItem.collectedElements.map((collectedItem, collectedIndex) => (
                <div
                  className={styles.imgPuzzle}
                  key={`collectedIndex_${collectedIndex}`}
                  // onDragOver={(e) => dragOverHandler(e)}
                  // onDragLeave={(e) => dragLeaveHandler(e)}
                  // onDragStart={(e) => dragStartHandler(e, collectedItem)}
                  // onDragEnd={(e) => dragEndHandler(e)}
                  // onDrop={(e) => dropHandlerDesktop(e, collectedItem)}
                  draggable={true}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Industries;
