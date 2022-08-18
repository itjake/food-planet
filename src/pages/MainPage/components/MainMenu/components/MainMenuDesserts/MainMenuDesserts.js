import React, {useEffect, useState} from 'react';
import styles from "./MainMenuDesserts.module.css";
import {toast} from "react-hot-toast";


const Desserts = (props) => {

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
    }

    return (
        <div className={styles.secondPageDessertsItem} key={props.data.id}>
            <div className={styles.secondPageDessertsImg}>
                <img src={props.data.img} alt="burger_first" className={styles.desserts}/>
            </div>
            <div className={styles.secondPageDessertsName}>
                {props.data.name}
            </div>
            <div className={styles.secondPageDessertsDescription}>
                {props.data.description}
            </div>
            <div className={styles.secondPageDessertsPrice}>
                {props.data.price} {props.data.currency}
            </div>
            <div className={styles.secondPageDessertsButton}>
                <button className={styles.secondPageDessertsBtnMinus} onClick={() => {
                    if (count > 1) {
                        setCount(count - 1)
                    }
                }}>
                    < svg width="16" height="2" viewBox="0 0 16 2" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.43091L16 1.43091" stroke="#FF583E"/>
                    </svg>
                </button>
                <span className={styles.secondPageDessertsCount}>{count}</span>
                <button className={styles.secondPageDessertsBtnPlus} onClick={() => {
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
            <div className={styles.secondPageDessertsBundle}>
                <button className={styles.secondPageDessertsBtnBundle} onClick={() => getProduct(props.data)}>
                    В корзину
                </button>
            </div>
        </div>
    );
};

const MainMenuDesserts = () => {

    const [desserts, setDesserts] = useState([]);

    const getDessertsDataHandler = () => {
        const url = "http://localhost:3001/desserts";

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    toast.error(`Произошла ошибка. Статус ошибки:` + response.status);
                }
            })
            .then(data => setDesserts(data))
    }

    useEffect(getDessertsDataHandler, []);


    const newDesserts = desserts.map(item => <Desserts data={item}/>)

    return (
        <div className={styles.secondPageTopDesserts}>
            <div className={styles.secondPageTopDessertsWrapper}>
                {newDesserts}
            </div>
        </div>
    );
};

export default MainMenuDesserts;