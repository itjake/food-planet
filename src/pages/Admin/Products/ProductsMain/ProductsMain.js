import React, {useState, useEffect} from 'react';
import styles from "./ProductsMain.module.css";
import {toast} from "react-hot-toast";

const ProductsMain = () => {

    const [pizza, setPizza] = useState([]);
    const [burger, setBurger] = useState([]);
    const [sushi, setSushi] = useState([]);
    const [rolls, setRolls] = useState([]);
    const [salads, setSalads] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [drinks, setDrinks] = useState([]);

    const getBurgers = () => {
        const url = "http://localhost:3001/burger-main";

        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    toast.error("Произошла ошибка. Статус ошибки:" + response.status);
                }
            })
            .then((data) => setBurger(data));
    };

    const getPizza = () => {
        const url = "http://localhost:3001/pizza";

        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    toast.error("Произошла ошибка. Статус ошибки:" + response.status);
                }
            })
            .then((data) => setPizza(data));
    };

    const getSushi = () => {
        const url = "http://localhost:3001/sushi";

        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    toast.error("Произошла ошибка. Статус ошибки:" + response.status);
                }
            })
            .then((data) => setSushi(data));
    };

    const getRolls = () => {
        const url = "http://localhost:3001/rolls";

        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    toast.error("Произошла ошибка. Статус ошибки:" + response.status);
                }
            })
            .then((data) => setRolls(data));
    };

    const getSalads = () => {
        const url = "http://localhost:3001/salads";

        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    toast.error("Произошла ошибка. Статус ошибки:" + response.status);
                }
            })
            .then((data) => setSalads(data));
    };

    const getDesserts = () => {
        const url = "http://localhost:3001/desserts";

        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    toast.error("Произошла ошибка. Статус ошибки:" + response.status);
                }
            })
            .then((data) => setDesserts(data));
    };

    const getDrinks = () => {
        const url = "http://localhost:3001/drinks";

        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    toast.error("Произошла ошибка. Статус ошибки:" + response.status);
                }
            })
            .then((data) => setDrinks(data));
    };

    useEffect(getBurgers, []);
    useEffect(getPizza, []);
    useEffect(getSushi, []);
    useEffect(getRolls, []);
    useEffect(getSalads, []);
    useEffect(getDesserts, []);
    useEffect(getDrinks, []);


    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.pizza}>
                    <p className={styles.S}>Пицца</p>
                    <p>{pizza.length}</p>
                </div>
                <div className={styles.pizza}>
                    <p className={styles.S}>Бургер</p>
                    <p>{burger.length}</p>
                </div>
                <div className={styles.pizza}>
                    <p className={styles.S}>Суши</p>
                    <p>{sushi.length}</p>
                </div>
                <div className={styles.pizza}>
                    <p className={styles.S}>Роллы</p>
                    <p>{rolls.length}</p>
                </div>
                <div className={styles.pizza}>
                    <p className={styles.S}>Салаты</p>
                    <p>{salads.length}</p>
                </div>
                <div className={styles.pizza}>
                    <p className={styles.S}>Десерты</p>
                    <p>{desserts.length}</p>
                </div>
                <div className={styles.pizza}>
                    <p className={styles.S}>Напитки</p>
                    <p>{drinks.length}</p>
                </div>
            </div>
        </>
    );
};

export default ProductsMain;
