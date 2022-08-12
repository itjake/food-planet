import React from 'react';
import styles from "./Cart.module.css";

const Cart = () => {

    return (
        <section className="container">
            <div className="content">
                <div className={styles.cartContent}>
                    <div className={styles.cartTitle}>
                        Корзина
                    </div>
                    <div className={styles.cartSubTitle}>
                        Товары в вашей корзине
                    </div>
                    <div className={styles.cartDescr}>
                        <div className={styles.cardDescrItem}>Продукт</div>
                        <ul className={styles.cardDescrItems}>
                            <li className={styles.cardDescrItem}>Количество</li>
                            <li className={styles.cardDescrItem}>Цена</li>
                            <li className={styles.cardDescrItem}>К оплате</li>
                        </ul>
                    </div>
                    <div className={styles.cartProducts}>
                        <ul className={styles.cartProductItems}>

                        </ul>
                    </div>
                    <div className={styles.cartTotal}>
                        Итого:
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
