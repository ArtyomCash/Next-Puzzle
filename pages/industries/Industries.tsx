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

/*const replacementPieces = () => {
  arrayImg?.forEach((puzzle) => {
    console.log(puzzle);
    const currentIndex = arrayImg.indexOf(puzzle);
    console.log('currentIndex>>>>>', currentIndex);
    arrayImg.splice(currentIndex, 0);
  });
};
replacementPieces();*/

console.log('puzzleArray>>>', puzzleArray[1].storagePuzzle?.arrayStoragePuzzle);

const Industries: NextPage = () => {
  const [currentPuzzle, setCurrentPuzzle] = useState(puzzleArray);
  const dragOverHandler = (e: any) => {
    e.preventDefault();
  };
  const dragLeaveHandler = () => {};
  const dragStartHandler = (e: any, puzzle: any) => {
    setCurrentPuzzle(puzzle);
    console.log('drag', puzzle);
  };
  const dragEndHandler = () => {};
  const dropHandler = (e: any, puzzle: any) => {
    e.preventDefault();

    // получаем индекс в массиве у текущей карточки
    const currentIndex = arrayImg?.indexOf(puzzle);
    console.log('currentIndex', currentIndex);
    console.log('currentPuzzle', currentPuzzle);
    // удаляем элемент с текущей доски
    arrayImg?.splice(currentIndex, 1, currentPuzzle);

    console.log('puzzleArray остаток', puzzleArray[1].storagePuzzle?.arrayStoragePuzzle);
    console.log('что в useState', currentPuzzle);
    // setCurrentPuzzle()
    /*if (currentIndex !== -1) {
      arrayImg?.splice(currentIndex, 1);
    }*/
    /*    setCurrentPuzzle(
      arrayImg.map((id) => {
        if (id.imgPuzzlePiece === currentPuzzle[0].storagePuzzle.idStoragePuzzle) {
        }
      })
    );*/
  };

  return (
    <section className={styles.array}>
      <div className={styles.storagePuzzle}>
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
                // onDrop={(e) => dropHandler(e, puzzle)}
                draggable={true}>
                <Image width={200} height={200} src={puzzle.imgPuzzlePiece} alt='' />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
