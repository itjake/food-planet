import React, {useState} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import styles from "./Header.module.css";
import headerLogo from "../../Assets/img/headerLogo.png"
import bundle from "../../Assets/icons/bundle.svg"
import tel from "../../Assets/icons/tel.svg"
import Footer from "../Footer/Footer";

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    return (<>
            <section className="container">
                <div className="content">
                    <div className={isActive ? styles.headerActive : ""} id="headerContent">

                        <div className={styles.headerWrapper}>
                            <div className={styles.headerLogo} id="headerLogo">
                                <img src={headerLogo} alt="headerLogo"/>
                            </div>
                            <ul className={styles.headerMenu}>
                                <li><NavLink to="/" className={styles.headerItem}>Главная</NavLink></li>
                                <li><NavLink to="/menu" className={styles.headerItem}>Меню</NavLink></li>
                                <li><NavLink to="/order" className={styles.headerItem}>Доставка</NavLink></li>
                                <li><NavLink to="/contacts" className={styles.headerItem}>Контакты</NavLink></li>
                                <li className={styles.headerItemTel}>
                                    <img src={tel} alt="" className={styles.headerTel}/>
                                    +996500405988
                                </li>
                                <li>
                                    <NavLink to="/cart" className={styles.headerItem}>
                                        <img src={bundle} alt="bundle" className={styles.bundleOne}/>
                                        1
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Outlet/>
        </>
    );
};

export default Header;