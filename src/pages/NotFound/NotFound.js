import React from 'react';
import styles from "./NotFound.module.css";
import {Link} from "react-router-dom";

const NotFound = () => {

    return (
        <section className={styles.errorPage}>
            <div className={styles.errorContent}>
                <div className={styles.errorTitle}>
                    404
                </div>
                <div className={styles.errorSubTitle}>
                    Страница не найдена
                </div>
                <div className={styles.errorDescription}>
                    Ой! Страница, которую вы ищете, не существует. Возможно, он был перемещен или удален.
                </div>
                <div className={styles.errorButton}>
                    <Link to="/">
                        <button className={styles.errorBtn}>Вернуться на главную</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;