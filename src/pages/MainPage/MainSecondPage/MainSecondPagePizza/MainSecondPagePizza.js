import React from 'react';
import styles from "./MainSecondPageBurger.module.css";
import {burger} from "../../../../constants";

const MainSecondPagePizza = () => {
  const newBurger = burger.map(item => {
    return (
      <div className={styles.secondPageBurgerItem}>
        <div className={styles.secondPageBurgerImg}>
          <img src={item.img} alt="burger_first"/>
        </div>
        <div className={styles.secondPageBurgerName}>
          {item.name}
        </div>
        <div className={styles.secondPageBurgerDescription}>
          {item.description}
        </div>
        <div className={styles.secondPageBurgerPrice}>
          {item.price}
        </div>
        <div className={styles.secondPageBurgerButton}>
          <button className={styles.secondPageBurgerBtnMinus}>
            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.43091L16 1.43091" stroke="#FF583E"/>
            </svg>
          </button>
          <span className={styles.secondPageBurgerCount}>1</span>
          <button className={styles.secondPageBurgerBtnPlus}>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 16.4802L8 0.381835" stroke="#FF583E"/>
              <path d="M0 8.43091L16 8.43091" stroke="#FF583E"/>
            </svg>
          </button>
        </div>
        <div className={styles.secondPageBurgerBundle}>
          <button className={styles.secondPageBurgerBtnBundle}>
            В корзину
          </button>
        </div>
      </div>
    );
  })


  return (
    <div className={styles.secondPageTopBurger}>
      <div className={styles.secondPageTopBurgerWrapper}>
        {newBurger}
      </div>
    </div>
  );
};

export default MainSecondPagePizza;