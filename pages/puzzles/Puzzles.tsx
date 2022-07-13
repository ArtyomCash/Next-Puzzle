import type { NextPage } from 'next';
import styles from './puzzles.module.scss';
import Head from 'next/head';
import {useState} from "react";

const Puzzles: NextPage = () => {
    // массив досок
    const [boards, setBoards] = useState([
        { id: 1, title: 'Сделать', items: [{ id: 1, title: 'Пойти в магазин' }, { id: 2, title: 'выкинуть мусор'}, {id: 3, title: 'Покушать'}]},
        { id: 2, title: 'Проверить', items: [{ id: 4, title: 'Код ревью' }, { id: 5, title: 'Задача на факториал'}, {id: 6, title: 'Задача на фибоначи'}]},
        { id: 3, title: 'Сделано', items: [{ id: 7, title: 'Снять видео' }, { id: 8, title: 'Смонтировать'}, {id: 9, title: 'Отрендоорить'}]},
    ]);

  return (
    <div id='up' className={styles.cases}>
      <Head>
        <title>Flexyti Projescts</title>
        <meta name='Description of flexyti Our Projects' content='Content of flexyti Our Projects' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
        <div className={styles.app}>

        </div>
    </div>
  );
};

export default Puzzles;
