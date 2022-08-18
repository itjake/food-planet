import React, {useState} from 'react';
import styles from "./MainMenu.module.css";
import {NavLink} from "react-router-dom";
import MainMenuPizza from "./components/MainMenuPizza/MainMenuPizza";
import MainMenuBurger from "./components/MainMenuBurger/MainMenuBurger";
import MainMenuSushi from "./components/MainMenuSushi/MainMenuSushi";
import MainMenuRolls from "./components/MainMenuRolls/MainMenuRolls";
import MainMenuSalads from "./components/MainMenuSalads/MainMenuSalads";
import MainMenuDesserts from "./components/MainMenuDesserts/MainMenuDesserts";
import MainMenuDrinks from "./components/MainMenuDrinks/MainMenuDrinks";
import Footer from "../../../../components/Footer/Footer";

const MainMenu = () => {

    const [isVisiblePizza, setIsVisiblePizza] = useState(true);
    const [isVisibleBurger, setIsVisibleBurger] = useState(false);
    const [isVisibleSushi, setIsVisibleSushi] = useState(false);
    const [isVisibleRolls, setIsVisibleRolls] = useState(false);
    const [isVisibleSalads, setIsVisibleSalads] = useState(false);
    const [isVisibleDesserts, setIsVisibleDesserts] = useState(false);
    const [isVisibleDrinks, setIsVisibleDrinks] = useState(false);

    const getPizza = () => {
        setIsVisiblePizza(true);
        setIsVisibleBurger(false)
        setIsVisibleSushi(false)
        setIsVisibleRolls(false)
        setIsVisibleSalads(false)
        setIsVisibleDesserts(false)
        setIsVisibleDrinks(false)
    }

    const getBurger = () => {
        setIsVisibleBurger(true);
        setIsVisiblePizza(false);
        setIsVisibleSushi(false)
        setIsVisibleRolls(false)
        setIsVisibleSalads(false)
        setIsVisibleDesserts(false)
        setIsVisibleDrinks(false)
    }
    const getSushi = () => {
        setIsVisibleSushi(true);
        setIsVisibleBurger(false);
        setIsVisiblePizza(false);
        setIsVisibleRolls(false)
        setIsVisibleSalads(false)
        setIsVisibleDesserts(false)
        setIsVisibleDrinks(false)
    }
    const getRolls = () => {
        setIsVisibleRolls(true);
        setIsVisibleSushi(false);
        setIsVisibleBurger(false);
        setIsVisiblePizza(false);
        setIsVisibleSalads(false)
        setIsVisibleDesserts(false)
        setIsVisibleDrinks(false)
    }
    const getSalads = () => {
        setIsVisibleSalads(true);
        setIsVisibleRolls(false);
        setIsVisibleSushi(false);
        setIsVisibleBurger(false);
        setIsVisiblePizza(false);
        setIsVisibleDesserts(false)
        setIsVisibleDrinks(false)
    }
    const getDesserts = () => {
        setIsVisibleDesserts(true);
        setIsVisibleSalads(false);
        setIsVisibleRolls(false);
        setIsVisibleSushi(false);
        setIsVisibleBurger(false);
        setIsVisiblePizza(false);
        setIsVisibleDrinks(false)
    }
    const getDrinks = () => {
        setIsVisibleDrinks(true);
        setIsVisibleDesserts(false);
        setIsVisibleSalads(false);
        setIsVisibleRolls(false);
        setIsVisibleSushi(false);
        setIsVisibleBurger(false);
        setIsVisiblePizza(false);
    }

    return (<>
            <section className="container">
                <div className="content">
                    <section className={styles.secondPageContainer}>
                        <div className={styles.secondPageContent}>
                            <div className={styles.secondPageMid}>
                                <div className={styles.secondPageMidLeft}>
                                    Меню
                                </div>
                                <div className={styles.secondPageMidRight}>
                                    <ul className={styles.secondPageMidRightMenu}>
                                        <li><NavLink onClick={getPizza} to="/menu"
                                                     className={styles.secondPageMidRightMenuItem}>Пицца</NavLink></li>
                                        <li><NavLink onClick={getBurger} to="/menu"
                                                     className={styles.secondPageMidRightMenuItem}>Бургер</NavLink></li>
                                        <li><NavLink onClick={getSalads} to="/menu"
                                                     className={styles.secondPageMidRightMenuItem}>Салаты</NavLink></li>
                                        <li><NavLink onClick={getSushi} to="/menu"
                                                     className={styles.secondPageMidRightMenuItem}>Суши</NavLink></li>
                                        <li><NavLink onClick={getDesserts} to="/menu"
                                                     className={styles.secondPageMidRightMenuItem}>Десерты</NavLink>
                                        </li>
                                        <li><NavLink onClick={getRolls} to="/menu"
                                                     className={styles.secondPageMidRightMenuItem}>Роллы</NavLink></li>
                                        <li><NavLink onClick={getDrinks} to="/menu"
                                                     className={styles.secondPageMidRightMenuItem}>Напитки</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.secondPageMidBottom}>
                                <div className={styles.secondPageMidBottomLeft}>
                                    Сортировать по:
                                </div>
                                <div className={styles.secondPageMidBottomRight}>
                                    <select name="" id="" className={styles.secondPageMidBottomChoice}>
                                        <option value="0">По умолчанию</option>
                                        <option value="1">По цене</option>
                                        <option value="2">По популярности</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </section>
                    {isVisiblePizza && <MainMenuPizza/>}
                    {isVisibleBurger && <MainMenuBurger/>}
                    {isVisibleSushi && <MainMenuSushi/>}
                    {isVisibleRolls && <MainMenuRolls/>}
                    {isVisibleSalads && <MainMenuSalads/>}
                    {isVisibleDesserts && <MainMenuDesserts/>}
                    {isVisibleDrinks && <MainMenuDrinks/>}
                </div>
            </section>
        </>
    );
};

export default MainMenu;