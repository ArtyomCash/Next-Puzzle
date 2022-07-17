import type { NextPage } from 'next';
import styles from './industries.module.scss';
import React from 'react';

const Industries: NextPage = () => {
  return (
    <section className={styles.array}>
      <div className={styles.storagePuzzle}>
        <h2 className={styles.imgPuzzle}>1</h2>
        <h2 className={styles.imgPuzzle}>2</h2>
        <h2 className={styles.imgPuzzle}>3</h2>
        <h2 className={styles.imgPuzzle}>4</h2>
        <h2 className={styles.imgPuzzle}>5</h2>
        <h2 className={styles.imgPuzzle}>6</h2>
        <h2 className={styles.imgPuzzle}>7</h2>
        <h2 className={styles.imgPuzzle}>8</h2>
        <h2 className={styles.imgPuzzle}>9</h2>
        <h2 className={styles.imgPuzzle}>10</h2>
        <h2 className={styles.imgPuzzle}>11</h2>
        <h2 className={styles.imgPuzzle}>12</h2>
        <h2 className={styles.imgPuzzle}>13</h2>
        <h2 className={styles.imgPuzzle}>14</h2>
        <h2 className={styles.imgPuzzle}>15</h2>
        <h2 className={styles.imgPuzzle}>16</h2>
      </div>
      <div className={styles.desktop}>
        <h2 className={styles.desktopPuzzle}>1</h2>
        <h2 className={styles.desktopPuzzle}>2</h2>
        <h2 className={styles.desktopPuzzle}>3</h2>
        <h2 className={styles.desktopPuzzle}>4</h2>
        <h2 className={styles.desktopPuzzle}>5</h2>
        <h2 className={styles.desktopPuzzle}>6</h2>
        <h2 className={styles.desktopPuzzle}>7</h2>
        <h2 className={styles.desktopPuzzle}>8</h2>
        <h2 className={styles.desktopPuzzle}>9</h2>
        <h2 className={styles.desktopPuzzle}>10</h2>
        <h2 className={styles.desktopPuzzle}>11</h2>
        <h2 className={styles.desktopPuzzle}>12</h2>
        <h2 className={styles.desktopPuzzle}>13</h2>
        <h2 className={styles.desktopPuzzle}>14</h2>
        <h2 className={styles.desktopPuzzle}>15</h2>
        <h2 className={styles.desktopPuzzle}>16</h2>
      </div>
    </section>
  );
};

export default Industries;
