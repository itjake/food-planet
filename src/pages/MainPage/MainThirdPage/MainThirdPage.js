import React from 'react';
import styles from "./MainThirdPage.module.css";
import car from "../../../Assets/img/car.png";

const MainThirdPage = () => {
  return (
    <div>
      <section className={styles.thirdPage}>
        <div className={styles.thirdContent}>
          <div className={styles.thirdTitle}>
            Почему выбирают нас:
          </div>
          <div className={styles.thirdPageProducts}>
            <div className={styles.thirdPageProduct}>
              <div className={styles.thirdPageImg}>
                <img src={car} alt="car"/>
              </div>
              <div className={styles.thirdPageName}>
                Мгновенная доставка
              </div>
              <div className={styles.thirdPageDescription}>
                Доставим заказанную вами
                еду за 30 минут + напиток в подарок
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainThirdPage;