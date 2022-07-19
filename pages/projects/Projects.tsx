import type { NextPage } from 'next';
import styles from './projects.module.scss';
import React, { useState } from 'react';

const Industries: NextPage = () => {

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
