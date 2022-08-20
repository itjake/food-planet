import React, {useEffect, useState} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import styles from "./Header.module.css";
import headerLogo from "../../Assets/img/headerLogo.png"
import bundle from "../../Assets/icons/bundle.svg"
import tel from "../../Assets/icons/tel.svg"
import {Link} from "react-scroll";

const Header = () => {

    const [cart, setCart] = useState([]);
    const [isActive, setIsActive] = useState(false);

    const getProducts = () => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart)
            setCart(Object.values(cart));
        else {
            return;
        }
    }

    let num = cart.length;

    // let cartItemsNumber = cart.reduce((currentValue, item) => {
    //     return currentValue + item.index;
    // }, 0);

    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }


    useEffect(getProducts, [cart])

    return (<>
            <section className="container" id="main">
                <div className="content">
                    <div className={isActive ? styles.headerActive : ""} id="headerContent">

                        <div className={styles.headerWrapper}>
                            <div className={styles.headerLogo} id="headerLogo">
                                <img src={headerLogo} alt="headerLogo"/>
                            </div>
                            <ul className={styles.headerMenu}>
                                <li><Link tabindex="0" className={styles.headerItem} to="main" spy={true} smooth={true} offset={-150}
                                                                        duration={500}
                                >Главная</Link></li>
                                <li><Link tabindex="0" className={styles.headerItem} to="menu" spy={true} smooth={true} offset={-150}
                                                                        duration={500}
                                >Меню</Link></li>
                                <li><Link tabindex="0" className={styles.headerItem} to="deliver" spy={true} smooth={true}
                                                                        offset={-150} duration={500}
                                                                        className={styles.headerItem}>Доставка</Link>
                                </li>
                                <li><Link tabindex="0" className={styles.headerItem} to="contacts" spy={true} smooth={true}
                                                                        offset={-200} duration={500}
                                >Контакты</Link></li>
                                <li className={styles.headerItemTel}><a href="tel:+996500405988">
                                    <img src={tel} alt="" className={styles.headerTel}/>
                                    +996500405988</a>
                                </li>
                                <li>
                                    <NavLink to="/cart" className={styles.headerItem}>
                                        <img src={bundle} alt="bundle" className={styles.bundleOne}/>
                                        {num}
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