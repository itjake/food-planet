import React from 'react';
import styles from "./MainSecondPageBurger.module.css";

const MainSecondPageBurger = () => {
  return (
    <div className={styles.secondPageTopBurger}>
      <div className={styles.secondPageTopBurgerWrapper}>
        <div className={styles.secondPageBurgerItem}>
          <div className={styles.secondPageBurgerImg}>
            <img src="#" alt=""/>
          </div>
          <div className={styles.secondPageBurgerName}>
            Чизбургер
          </div>
          <div className={styles.secondPageBurgerDescription}>
            Булка, котлета,сыр, соленый огурец, лук, помидор,
            салат айсберг,
            соус чесночный, соус гриль,
            кетчуп, майонез
          </div>
          <div className={styles.secondPageBurgerPrice}>
            200 сом
          </div>
          <div className={styles.secondPageBurgerButton}>
            <button className={styles.secondPageBurgerBtnMinus}>
              -
            </button>
            1
            <button className={styles.secondPageBurgerBtnPlus}>
              +
            </button>
          </div>
          <div className={styles.secondPageBurgerBundle}>
            <button className={styles.secondPageBurgerBtnBundle}>
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSecondPageBurger;