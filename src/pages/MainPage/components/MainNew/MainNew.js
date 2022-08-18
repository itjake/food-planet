import React, {useState} from 'react';
import styles from "./MainNew.module.css";
import {NavLink, Outlet} from "react-router-dom";
import MainNewPizza from "./components/MainNewPizza/MainNewPizza";
import MainNewBurger from "./components/MainNewBurger/MainNewBurger";
import MainNewSushi from "./components/MainNewSushi/MainNewSushi";
import MainNewRolls from "./components/MainNewRolls/MainNewRolls";
import MainNewSalads from "./components/MainNewSalads/MainNewSalads";
import MainNewDesserts from "./components/MainNewDesserts/MainNewDesserts";
import MainNewDrinks from "./components/MainNewDrinks/MainNewDrinks";

const MainNew = () => {

    const [isVisiblePizza, setIsVisiblePizza] = useState(false);
    const [isVisibleBurger, setIsVisibleBurger] = useState(true);
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
            <section className={styles.secondPageContainer}>
                <div className={styles.secondPageContent}>
                    <div className={styles.secondPageTop}>
                        <div className={styles.secondPageTopLeft}>
                            Новинки
                        </div>
                        <div className={styles.secondPageTopRight}>
                            <ul className={styles.secondPageTopRightMenu}>
                                <li><NavLink onClick={getPizza} to="/"
                                             className={styles.secondPageTopRightMenuItem}>Пицца</NavLink>
                                </li>
                                <li><NavLink onClick={getBurger} to="/"
                                             className={styles.secondPageTopRightMenuItem}>Бургер</NavLink>
                                </li>
                                <li><NavLink onClick={getSalads} to="/"
                                             className={styles.secondPageTopRightMenuItem}>Салаты</NavLink>
                                </li>
                                <li><NavLink onClick={getSushi} to="/"
                                             className={styles.secondPageTopRightMenuItem}>Суши</NavLink></li>
                                <li><NavLink onClick={getDesserts} to="/"
                                             className={styles.secondPageTopRightMenuItem}>Десерты</NavLink>
                                </li>
                                <li><NavLink onClick={getRolls} to="/"
                                             className={styles.secondPageTopRightMenuItem}>Роллы</NavLink>
                                </li>
                                <li><NavLink onClick={getDrinks} to="/"
                                             className={styles.secondPageTopRightMenuItem}>Напитки</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {isVisiblePizza && <MainNewPizza/>}
            {isVisibleBurger && <MainNewBurger/>}
            {isVisibleSushi && <MainNewSushi/>}
            {isVisibleRolls && <MainNewRolls/>}
            {isVisibleSalads && <MainNewSalads/>}
            {isVisibleDesserts && <MainNewDesserts/>}
            {isVisibleDrinks && <MainNewDrinks/>}
        </>
    );
};

export default MainNew;