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
    ],
  },
];

// console.log('puzzleArray', puzzleArray[1]?.storagePuzzle[0].arrayStoragePuzzleWood[0].imgPuzzlePiece);

const Industries: NextPage = () => {
  return (
    <div>
      <section
        className={styles.array}
        // onDragOver={(e) => dragOverHandler(e)}
        // onDrop={(e) => dropHandler(e)}
        // onDragLeave={(e) => dragLeaveHandler(e)}
        // onDragStart={(e) => dragStartHandler(e)}
        // onDragEnd={(e) => dragEndHandler(e)}
        draggable={true}>
        {puzzleArray[1]?.storagePuzzle?.map((storagePuzzleItem, storagePuzzleIndex) => (
          <div className={styles.puzzleContainer} key={`storagePuzzleIndex_${storagePuzzleIndex}`}>
            {storagePuzzleItem.arrayStoragePuzzleWood.map((woodItem, woodIndex) => (
              <div
                className={styles.imgPuzzle}
                key={`woodIndex_${woodIndex}`}
                // onDragStart={(e) => dragStartHandler(e, puzzle)}
                // onDragOver={(e) => dragOverHandler(e)}
                // onDrop={(e) => dropHandler(e, puzzle)}
                draggable={true}>
                <Image width={200} height={200} src={woodItem.imgPuzzlePiece} alt='' />
              </div>
            ))}
            <div className={styles.desktop}>
              {storagePuzzleItem.collectedElements.map((collectedItem, collectedIndex) => (
                <div
                  className={styles.imgPuzzle}
                  key={`collectedIndex_${collectedIndex}`}
                  // onDragStart={(e) => dragStartHandler(e, puzzle)}
                  // onDragOver={(e) => dragOverHandler(e)}
                  // onDrop={(e) => dropHandler(e, puzzle)}
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
