import React, {useEffect, useState} from 'react';
import styles from "./MainMenuRolls.module.css";
import {toast} from "react-hot-toast";


const Rolls = (props) => {

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
        <div className={styles.secondPageRollsItem} key={props.data.id}>
            <div className={styles.secondPageRollsImg}>
                <img src={props.data.img} alt="burger_first" className={styles.rolls}/>
            </div>
            <div className={styles.secondPageRollsName}>
                {props.data.name}
            </div>
            <div className={styles.secondPageRollsDescription}>
                {props.data.description}
            </div>
            <div className={styles.secondPageRollsPrice}>
                {props.data.price} {props.data.currency}
            </div>
            <div className={styles.secondPageRollsButton}>
                <button className={styles.secondPageRollsBtnMinus} onClick={() => {
                    if (count > 1) {
                        setCount(count - 1)
                    }
                }}>
                    < svg width="16" height="2" viewBox="0 0 16 2" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.43091L16 1.43091" stroke="#FF583E"/>
                    </svg>
                </button>
                <span className={styles.secondPageRollsCount}>{count}</span>
                <button className={styles.secondPageRollsBtnPlus} onClick={() => {
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
            <div className={styles.secondPageRollsBundle}>
                <button className={styles.secondPageRollsBtnBundle} onClick={() => getProduct(props.data)}>
                    В корзину
                </button>
            </div>
        </div>
    );
};

const MainMenuRolls = () => {

    const [rolls, setRolls] = useState([]);

    const getRollsDataHandler = () => {
        const url = "http://localhost:3001/rolls";

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    toast.error(`Произошла ошибка. Статус ошибки:` + response.status);
                }
            })
            .then(data => setRolls(data))
    }

    useEffect(getRollsDataHandler, []);


    const newRolls = rolls.map(item => <Rolls data={item}/>)

    return (
        <div className={styles.secondPageTopRolls}>
            <div className={styles.secondPageTopRollsWrapper}>
                {newRolls}
            </div>
        </div>
    );
};

export default MainMenuRolls;