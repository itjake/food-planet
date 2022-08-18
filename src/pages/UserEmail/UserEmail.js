import React, {useEffect, useState} from 'react';
import styles from "./UserEmail.module.css";
import {toast, Toaster} from "react-hot-toast";

const UserEmail = () => {

    const [emailUser, setEmailUser] = useState();

    const getEmail = (e) => {
        setEmailUser(e.target.value);
    }

    const saveData = (e) => {
        e.preventDefault();
        const data = {
            emailUser,
        }

        let url = "http://localhost:3001/emails";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    toast.success("Товар успешно добавлен");
                } else {
                    toast.error("Товар не добавлен");
                }
            })
        setEmailUser("");
    };

    return (
        <>
            <div className={styles.email}>
                <form action="">
                    <div className={styles.wrapper}>
                        <div className={styles.wrapperTitle}>
                            Подпишитесь на рассылку
                        </div>
                        <div className={styles.wrapperInput}>
                            <input value={emailUser} type="email" placeholder="Ваша почта" onChange={getEmail}/>
                        </div>
                        <div className={styles.wrapperButton}>
                            <button className={styles.wrapperBtn} onClick={saveData}>
                                Подписаться <svg width="44" height="10" viewBox="0 0 44 10" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M43 5L43.4135 4.71884L43.6046 5L43.4135 5.28116L43 5ZM42.5865 5.28116L39.8665 1.28116L40.6935 0.718845L43.4135 4.71884L42.5865 5.28116ZM43.4135 5.28116L40.6935 9.28115L39.8665 8.71884L42.5865 4.71884L43.4135 5.28116ZM43 5.5H0.5V4.5H43V5.5Z"
                                    fill="white"/>
                            </svg>
                            </button>
                        </div>
                    </div>
                    <div className={styles.secondWrapper}>
                        <div className={styles.secondWrapperTitle}>
                            Будьте в курсе наших акций
                        </div>
                        <div className={styles.secondWrapperSubTitle}>
                            Нажимая кнопку, вы даете согласие на обработку ваших персональных данных в соответствии
                            с
                            <a target="_blank" className={styles.link}
                               href="https://www.istore.kg/static/docs/terms_of_use_istore_kg.pdf">
                                Политикой Конфиденциальности
                                соглашения</a>
                        </div>
                        <div>
                        </div>
                    </div>
                    <Toaster/>
                </form>
            </div>
        </>
    );
};

export default UserEmail;
