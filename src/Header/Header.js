import React from 'react';
import styles from "./Header.module.css";
import headerLogo from "../Assets/img/headerLogo.png"
import bundle from "../Assets/icons/bundle.svg"
import tel from "../Assets/icons/tel.svg"

const Header = () => {
  // (function () {
  //   const header = document.querySelector('#headerContent');
  //   window.onscroll = () => {
  //     if (window.pageYOffset > 50) {
  //       header.classList.add('headerActive');
  //     } else {
  //       header.classList.remove('headerActive');
  //     }
  //   }
  // }());

  return (
    <div className={styles.headerContent} id="headerContent">
      <div className={styles.headerWrapper}>
        <div className={styles.headerLogo} id="headerLogo">
          <img src={headerLogo} alt="headerLogo"/>
        </div>
        <ul className={styles.headerMenu}>
          <li><a href="#!" className={styles.headerItem}>Главная</a></li>
          <select name="" id="" className={styles.headerSelect}>
            <option value="0" className={styles.headerSelectItem}>Меню</option>
            <option value="1" className={styles.headerSelectItem}>Пицца</option>
            <option value="2" className={styles.headerSelectItem}>Бургеры</option>
            <option value="3" className={styles.headerSelectItem}>Суши</option>
            <option value="4" className={styles.headerSelectItem}>Роллы</option>
            <option value="5" className={styles.headerSelectItem}>Салаты</option>
            <option value="6" className={styles.headerSelectItem}>Десерты</option>
            <option value="7" className={styles.headerSelectItem}>Напитки</option>
          </select>
          <li><a href="#!" className={styles.headerItem}>Доставка</a></li>
          <li><a href="#!" className={styles.headerItem}>Контакты</a></li>
          <li className={styles.headerItemTel}>
            <img src={tel} alt="" className={styles.headerTel}/>
            +996500405988
          </li>
          <li className={styles.headerItemBundle}>
            <img src={bundle} alt="bundle" className={styles.bundleOne}/>
            1
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;