import React from 'react';
import {Link} from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
    const returnToMainPage = () => {
        window.location.assign('http://localhost:3000/');
    }


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
                    <Link to="*" className={styles.errorBtn} onClick={returnToMainPage}>Вернуться на главную</Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;