import React, {useEffect, useState} from 'react';
import styles from "./MainNewPizza.module.css";
import {toast} from "react-hot-toast";

const Pizza = (props) => {

    const [count, setCount] = useState(1);

    const getProduct = (data) => {
        const id = data.id;
        let cart = JSON.parse(localStorage.getItem('cart')) || {};
        cart[id] = {...data, count, totalPrice: count * parseInt(data.price)}

        // if (localStorage.getItem("cart")) {
        //     cart = JSON.parse(localStorage.getItem("cart"));
        //     cart[id] = {...data, count: 1}
        // } else {
        //     cart = {
        //         [id]: {...data, count: 1}
        //     }
        // }

        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <div className={styles.secondPagePizzaItem} key={props.data.id}>
            <div className={styles.secondPagePizzaImg}>
                <img src={props.data.img} alt="burger_first" className={styles.pizza}/>
            </div>
            <div className={styles.secondPagePizzaName}>
                {props.data.name}
            </div>
            <div className={styles.secondPagePizzaDescription}>
                {props.data.description}
            </div>
            <div className={styles.secondPagePizzaPrice}>
                {props.data.price} {props.data.currency}
            </div>
            <div className={styles.secondPagePizzaButton}>
                <button className={styles.secondPagePizzaBtnMinus} onClick={() => {
                    if (count > 1) {
                        setCount(count - 1)
                    }
                }}>
                    <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.43091L16 1.43091" stroke="#FF583E"/>
                    </svg>
                </button>
                <span className={styles.secondPagePizzaCount}>{count}</span>
                <button className={styles.secondPagePizzaBtnPlus} onClick={() => {
                    if (count < 100) {
                        setCount(count + 1)
                    }
                }}>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16.4802L8 0.381835" stroke="#FF583E"/>
                        <path d="M0 8.43091L16 8.43091" stroke="#FF583E"/>
                    </svg>
                </button>
            </div>
            <div className={styles.secondPagePizzaBundle}>
                <button className={styles.secondPagePizzaBtnBundle} onClick={() => getProduct(props.data)}>
                    В корзину
                </button>
            </div>
        </div>
    );
};

const MainNewPizza = () => {


    const [pizza, setPizza] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    const getElse = () => {
        setIsVisible(true);
    }

    const getPizzaDataHandler = () => {
        const url = "http://localhost:3001/pizza-new";

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    toast.error(`Произошла ошибка. Статус ошибки:` + response.status);
                }
            })
            .then(data => setPizza(data))
    }

    useEffect(getPizzaDataHandler, []);

    const newPizza = pizza.map(item => <Pizza data={item}/>)

    return (
        <div className={styles.secondPageTopPizza}>
            <div className={styles.secondPageTopPizzaWrapper}>
                {newPizza}
            </div>
        </div>
    );
};

export default MainNewPizza;