import React from 'react';
import styles from "./MainSecondPageMenu.module.css";

const MainSecondPageMenu = () => {
  return (<>
      <section className={styles.secondPageContainer}>
        <div className={styles.secondPageContent}>
          <div className={styles.secondPageMid}>
            <div className={styles.secondPageMidLeft}>
              Меню
            </div>
            <div className={styles.secondPageMidRight}>
              <ul className={styles.secondPageMidRightMenu}>
                <li><a href="#!" className={styles.secondPageMidRightMenuItem}>Пицца</a></li>
                <li><a href="#!" className={styles.secondPageMidRightMenuItem}>Бургер</a></li>
                <li><a href="#!" className={styles.secondPageMidRightMenuItem}>Суши</a></li>
                <li><a href="#!" className={styles.secondPageMidRightMenuItem}>Роллы</a></li>
                <li><a href="#!" className={styles.secondPageMidRightMenuItem}>Салаты</a></li>
                <li><a href="#!" className={styles.secondPageMidRightMenuItem}>Десерты</a></li>
                <li><a href="#!" className={styles.secondPageMidRightMenuItem}>Напитки</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.secondPageMidBottom}>
            <div className={styles.secondPageMidBottomLeft}>
              Сортировать по:
            </div>
            <div className={styles.secondPageMidBottomRight}>
              <select name="" id="" className={styles.secondPageMidBottomChoice}>
                <option value="0">По умолчанию</option>
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSecondPageMenu;