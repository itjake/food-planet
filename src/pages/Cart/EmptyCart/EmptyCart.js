import React from 'react';
import styles from "./EmptyCart.module.css";
import empty from "../../../Assets/icons/empty.svg"
import {Link} from "react-router-dom";

const EmptyCart = () => {
    return (
        <section className="container">
            <div className="content">
                <div className={styles.content}>
                    <div className={styles.emptyCart}>
                        <img src={empty} alt="empty"/>
                    </div>
                    <div className={styles.emptyCartTitle}>
                        Ваша корзина пуста
                    </div>
                    <div className={styles.emptyCartSubTitle}>
                        Самое время добавить в нее что-нибудь
                    </div>
                    <div className={styles.emptyCartBtn}>
                        <Link to="/">
                            <button className={styles.btn}>
                                Перейти в меню
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmptyCart;
