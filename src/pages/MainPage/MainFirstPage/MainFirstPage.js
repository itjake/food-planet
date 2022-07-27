import React from 'react';
import styles from "./MainFirstPage.module.css";

const MainFirstPage = () => {
  return (
    <div>
      <section className={styles.firstPageContainer}>
        <div className={styles.firstPageContent}>
          <div className={styles.firstPageWrapper}>
            <div className={styles.firstPageLeft}>
              <div className={styles.firstPageTitle}>
                Доставка вкусной еды до 30 минут + напиток в подарок!
              </div>
              <div className={styles.firstPageSubTitle}>
                Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и ароматным.
              </div>
              <div className={styles.firstPageButton}>
                <button className={styles.firstPageBtn}>
                  Перейти в меню
                </button>
              </div>
            </div>
            <div className={styles.firstPageRight}>
              <img src="../../../Assets/img/burger.png" alt="burger"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainFirstPage;