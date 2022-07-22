import type { NextPage } from 'next';
import styles from './puzzleTwoArray.module.scss';
import React, { useState } from 'react';
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
import Image from 'next/image';

type Task = { id: string; img: string; category: 'wip' | 'complete'; bgcolor: string };

type Tasks = {
  wip: JSX.Element[];
  complete: JSX.Element[];
};

const PuzzleTwoArray: NextPage = () => {
  const [state, setState] = useState<{ tasks: Task[] }>({
    tasks: [
      /*{ name: 'Learn Angular', category: 'wip', bgcolor: 'yellow' },
      { name: 'React', category: 'wip', bgcolor: 'pink' },
      { name: 'Vue', category: 'complete', bgcolor: 'skyblue' },*/
      { id: '1', img: wood_01.src, category: 'wip', bgcolor: 'yellow' },
      { id: '2', img: wood_02.src, category: 'wip', bgcolor: 'pink' },
      { id: '3', img: wood_03.src, category: 'wip', bgcolor: 'skyblue' },
      { id: '4', img: wood_04.src, category: 'wip', bgcolor: 'yellow' },
      { id: '5', img: wood_05.src, category: 'wip', bgcolor: 'yellow' },
      { id: '6', img: wood_06.src, category: 'wip', bgcolor: 'yellow' },
      { id: '7', img: wood_07.src, category: 'wip', bgcolor: 'yellow' },
      { id: '8', img: wood_08.src, category: 'wip', bgcolor: 'yellow' },
      { id: '9', img: wood_09.src, category: 'wip', bgcolor: 'yellow' },
      { id: '10', img: wood_10.src, category: 'wip', bgcolor: 'yellow' },
      { id: '11', img: wood_11.src, category: 'wip', bgcolor: 'yellow' },
      { id: '12', img: wood_12.src, category: 'wip', bgcolor: 'yellow' },
      { id: '13', img: wood_13.src, category: 'wip', bgcolor: 'yellow' },
      { id: '14', img: wood_14.src, category: 'wip', bgcolor: 'yellow' },
      { id: '15', img: wood_15.src, category: 'wip', bgcolor: 'yellow' },
      { id: '16', img: wood_16.src, category: 'wip', bgcolor: 'yellow' },
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
      if (task.id == id) {
        task.category = cat;
      }
      return task;
    });

    setState({
      ...state,
      tasks,
    });
  };

  const tasks: Tasks = {
    wip: [],
    complete: [],
  };
  console.log('tasks>>>>>', tasks);

  state.tasks.forEach((t: Task) => {
    tasks[t.category].push(
      <div
        key={t.id}
        onDragStart={(e) => onDragStart(e, t.id)}
        draggable
        className={styles.draggable}
        style={{ backgroundColor: t.bgcolor }}>
        {/*{t.id}*/}
        <div className={styles.imgFigure}>
          <Image width={200} height={200} src={t.img} alt='' />
        </div>
      </div>
    );
  });

  return (
    <div className={styles.containerDrag}>
      <h2 className={styles.headerSecond}>Puzzle-tow-array</h2>
      <div
        className={styles.wip}
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

export default PuzzleTwoArray;
