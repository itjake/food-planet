import React, {useEffect, useState} from 'react';
import styles from "./MainMenuDrinks.module.css";
import {toast} from "react-hot-toast";


const Drinks = (props) => {

    const [count, setCount] = useState(1);

    const getProduct = (data) => {
        const id = data.id;
        let cart = JSON.parse(localStorage.getItem('cart')) || {};
        cart[id] = {...data, count,}

        // if (localStorage.getItem("cart")) {
        //     cart = JSON.parse(localStorage.getItem("cart"));
        //     cart[id] = {...data, count: 1}
        // } else {
        //     cart = {
        //         [id]: {...data, count: 1}
        //     }
        // }

        localStorage.setItem('cart', JSON.stringify(cart));
    }

    return (
        <div className={styles.secondPageDrinksItem} key={props.data.id}>
            <div className={styles.secondPageDrinksImg}>
                <img src={props.data.img} alt="burger_first" className={styles.drinks}/>
            </div>
            <div className={styles.secondPageDrinksName}>
                {props.data.name}
            </div>
            <div className={styles.secondPageDrinksDescription}>
                {props.data.description}
            </div>
            <div className={styles.secondPageDrinksPrice}>
                {props.data.price} {props.data.currency}
            </div>
            <div className={styles.secondPageDrinksButton}>
                <button className={styles.secondPageDrinksBtnMinus} onClick={() => {
                    if (count > 1) {
                        setCount(count - 1)
                    }
                }}>
                    < svg width="16" height="2" viewBox="0 0 16 2" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.43091L16 1.43091" stroke="#FF583E"/>
                    </svg>
                </button>
                <span className={styles.secondPageDrinksCount}>{count}</span>
                <button className={styles.secondPageDrinksBtnPlus} onClick={() => {
                    if (count < 100) {
                        setCount(count + 1)
                    }
                }}>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16.4802L8 0.381835" stroke="#FF583E"/>
                        <path d="M0 8.43091L16 8.43091" stroke="#FF583E"/>
                    </svg>
                </button>
            </div>
            <div className={styles.secondPageDrinksBundle}>
                <button className={styles.secondPageDrinksBtnBundle} onClick={() => getProduct(props.data)}>
                    В корзину
                </button>
            </div>
        </div>
    );
};

const MainMenuDrinks = () => {

    const [drinks, setDrinks] = useState([]);

    const getDrinksDataHandler = () => {
        const url = "http://localhost:3001/drinks";

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    toast.error(`Произошла ошибка. Статус ошибки:` + response.status);
                }
            })
            .then(data => setDrinks(data))
    }

    useEffect(getDrinksDataHandler, []);


    const newDrinks = drinks.map(item => <Drinks data={item}/>)

    return (
        <div className={styles.secondPageTopDrinks}>
            <div className={styles.secondPageTopDrinksWrapper}>
                {newDrinks}
            </div>
        </div>
    );
};

export default MainMenuDrinks;