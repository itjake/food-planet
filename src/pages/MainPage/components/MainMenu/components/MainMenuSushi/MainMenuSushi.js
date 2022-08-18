import React, {useEffect, useState} from 'react';
import styles from "./MainMenuSushi.module.css";
import {toast} from "react-hot-toast";


const Sushi = (props) => {

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
        <div className={styles.secondPageSushiItem} key={props.data.id}>
            <div className={styles.secondPageSushiImg}>
                <img src={props.data.img} alt="burger_first" className={styles.sushi}/>
            </div>
            <div className={styles.secondPageSushiName}>
                {props.data.name}
            </div>
            <div className={styles.secondPageSushiDescription}>
                {props.data.description}
            </div>
            <div className={styles.secondPageSushiPrice}>
                {props.data.price} {props.data.currency}
            </div>
            <div className={styles.secondPageSushiButton}>
                <button className={styles.secondPageSushiBtnMinus} onClick={() => {
                    if (count > 1) {
                        setCount(count - 1)
                    }
                }}>
                    < svg width="16" height="2" viewBox="0 0 16 2" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.43091L16 1.43091" stroke="#FF583E"/>
                    </svg>
                </button>
                <span className={styles.secondPageSushiCount}>{count}</span>
                <button className={styles.secondPageSushiBtnPlus} onClick={() => {
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
            <div className={styles.secondPageSushiBundle}>
                <button className={styles.secondPageSushiBtnBundle} onClick={() => getProduct(props.data)}>
                    В корзину
                </button>
            </div>
        </div>
    );
};

const MainMenuSushi = () => {

    const [sushi, setSushi] = useState([]);

    const getSushiDataHandler = () => {
        const url = "http://localhost:3001/sushi";

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    toast.error(`Произошла ошибка. Статус ошибки:` + response.status);
                }
            })
            .then(data => setSushi(data))
    }

    useEffect(getSushiDataHandler, []);


    const newSushi = sushi.map(item => <Sushi data={item}/>)

    return (
        <div className={styles.secondPageTopSushi}>
            <div className={styles.secondPageTopSushiWrapper}>
                {newSushi}
            </div>
        </div>
    );
};

export default MainMenuSushi;