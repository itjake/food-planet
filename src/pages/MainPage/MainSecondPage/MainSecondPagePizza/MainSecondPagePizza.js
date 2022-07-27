import React from 'react';
import styles from "./MainSecondPagePizza.module.css";
import {pizza} from "../../../../constants";

const MainSecondPagePizza = () => {
  const newBurger = pizza.map(item => {
    return (
      <div className={styles.secondPagePizzaItem}>
        <div className={styles.secondPagePizzaImg}>
          <img src={item.img} alt="burger_first"/>
        </div>
        <div className={styles.secondPagePizzaName}>
          {item.name}
        </div>
        <div className={styles.secondPagePizzaDescription}>
          {item.description}
        </div>
        <div className={styles.secondPagePizzaPrice}>
          {item.price}
        </div>
        <div className={styles.secondPagePizzaButton}>
          <button className={styles.secondPagePizzaBtnMinus}>
            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.43091L16 1.43091" stroke="#FF583E"/>
            </svg>
          </button>
          <span className={styles.secondPagePizzaCount}>1</span>
          <button className={styles.secondPagePizzaBtnPlus}>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 16.4802L8 0.381835" stroke="#FF583E"/>
              <path d="M0 8.43091L16 8.43091" stroke="#FF583E"/>
            </svg>
          </button>
        </div>
        <div className={styles.secondPagePizzaBundle}>
          <button className={styles.secondPagePizzaBtnBundle}>
            В корзину
          </button>
        </div>
      </div>
    );
  })


  return (
    <div className={styles.secondPageTopPizza}>
      <div className={styles.secondPageTopPizzaWrapper}>
        {newBurger}
        </div>
      <div className={styles.secondPagePizzaElse}>
        <button className={styles.secondPagePizzaElseBtn}>Показать еще</button>
      </div>
    </div>
  );
};

export default MainSecondPagePizza;