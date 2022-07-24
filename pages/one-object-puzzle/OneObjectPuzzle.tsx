import type { NextPage } from 'next';
import styles from './one-object-puzzle.module.scss';
import React, { useState } from 'react';
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
  return (
    <section className={styles.wrapper}>
      <div className={styles.leftPuzzles}>
        {puzzleSet[0].disassembledPuzzles.map((disassembledPuzzle, disassembledPuzzleIndex) => (
          <div key={`disassembledPuzzleIndex_${disassembledPuzzleIndex}`}>
            <div className={styles.imgFigure}>
              <Image width={200} height={200} src={disassembledPuzzle.img} alt='Business analysis' />
            </div>
            <div className={styles.imgFigure}>
              <Image width={200} height={200} src={disassembledPuzzle.img} alt='Business analysis' />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OneObjectPuzzle;
