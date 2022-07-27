import React from 'react';
import styles from "./MainSecondPageNew.module.css";

const MainSecondPageNew = () => {
  return (<>
      <section className={styles.secondPageContainer}>
        <div className={styles.secondPageContent}>
          <div className={styles.secondPageTop}>
            <div className={styles.secondPageTopLeft}>
              Новинки
            </div>
            <div className={styles.secondPageTopRight}>
              <ul className={styles.secondPageTopRightMenu}>
                <li><a href="#!" className={styles.secondPageTopRightMenuItem}>Пицца</a></li>
                <li><a href="#!" className={styles.secondPageTopRightMenuItem}>Бургер</a></li>
                <li><a href="#!" className={styles.secondPageTopRightMenuItem}>Суши</a></li>
                <li><a href="#!" className={styles.secondPageTopRightMenuItem}>Роллы</a></li>
                <li><a href="#!" className={styles.secondPageTopRightMenuItem}>Салаты</a></li>
                <li><a href="#!" className={styles.secondPageTopRightMenuItem}>Десерты</a></li>
                <li><a href="#!" className={styles.secondPageTopRightMenuItem}>Напитки</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSecondPageNew;