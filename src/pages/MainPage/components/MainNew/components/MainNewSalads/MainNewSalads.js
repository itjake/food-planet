import React, {useEffect, useState} from 'react';
import styles from "./MainNewSalads.module.css";
import {toast} from "react-hot-toast";


const Salads = (props) => {

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
        <div className={styles.secondPageSaladsItem} key={props.data.id}>
            <div className={styles.secondPageSaladsImg}>
                <img src={props.data.img} alt="burger_first" className={styles.salads}/>
            </div>
            <div className={styles.secondPageSaladsName}>
                {props.data.name}
            </div>
            <div className={styles.secondPageSaladsDescription}>
                {props.data.description}
            </div>
            <div className={styles.secondPageSaladsPrice}>
                {props.data.price} {props.data.currency}
            </div>
            <div className={styles.secondPageSaladsButton}>
                <button className={styles.secondPageSaladsBtnMinus} onClick={() => {
                    if (count > 1) {
                        setCount(count - 1)
                    }
                }}>
                    < svg width="16" height="2" viewBox="0 0 16 2" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.43091L16 1.43091" stroke="#FF583E"/>
                    </svg>
                </button>
                <span className={styles.secondPageSaladsCount}>{count}</span>
                <button className={styles.secondPageSaladsBtnPlus} onClick={() => {
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
            <div className={styles.secondPageSaladsBundle}>
                <button className={styles.secondPageSaladsBtnBundle} onClick={() => getProduct(props.data)}>
                    В корзину
                </button>
            </div>
        </div>
    );
};

const MainNewSalads = () => {

    const [salads, setSalads] = useState([]);

    const getSaladsDataHandler = () => {
        const url = "http://localhost:3001/salads-new";

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    toast.error(`Произошла ошибка. Статус ошибки:` + response.status);
                }
            })
            .then(data => setSalads(data))
    }

    useEffect(getSaladsDataHandler, []);


    const newSalads = salads.map(item => <Salads data={item}/>)

    return (
        <div className={styles.secondPageTopSalads}>
            <div className={styles.secondPageTopSaladsWrapper}>
                {newSalads}
            </div>
        </div>
    );
};

export default MainNewSalads;