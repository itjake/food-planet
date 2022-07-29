import React from 'react';
import styles from "./Footer.module.css";
import footerLogo from "../../Assets/img/footer_logo.png"

const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerWrapper}>
          <div className={styles.footerLogo}>
            <img src={footerLogo} alt="headerLogo"/>
          </div>
          <ul className={styles.footerMenu}>
            <li><a href="#!" className={styles.footerItem}>Главная</a></li>
            <li><a href="#!" className={styles.footerItem}>Меню</a></li>
            <li><a href="#!" className={styles.footerItem}>Доставка</a></li>
            <li><a href="#!" className={styles.footerItem}>Контакты</a></li>
            <li className={styles.footerItemTel}>+996500405988</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;