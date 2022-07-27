import React from 'react';
import styles from "./Header.module.css";
import headerLogo from "../Assets/img/headerLogo.png"

const Header = () => {
  return (
    <div className={styles.headerContent}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLogo}>
          <img src={headerLogo} alt="headerLogo"/>
        </div>
        <ul className={styles.headerMenu}>
          <li><a href="#!" className={styles.headerItem}>Главная</a></li>
          <select name="" id="" className={styles.headerSelect}>
            <option value="0" className={styles.headerSelectItem}>Меню</option>
            <option value="1" className={styles.headerSelectItem}>a</option>
            <option value="2" className={styles.headerSelectItem}>b</option>
            <option value="3" className={styles.headerSelectItem}>c</option>
          </select>
          <li><a href="#!" className={styles.headerItem}>Доставка</a></li>
          <li><a href="#!" className={styles.headerItem}>Контакты</a></li>
          <li className={styles.headerItemTel}>+996500405988</li>
          <li className={styles.headerItemBundle}>1</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;