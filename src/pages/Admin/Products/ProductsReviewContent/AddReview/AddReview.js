import React, {useState} from 'react';
import styles from "./AddReview.module.css";
import {toast, Toaster} from "react-hot-toast";
import {Link} from "react-router-dom";

const AddReview = () => {

    const [name, setName] = useState();
    const [review, setReview] = useState();
    const [date, setDate] = useState();

    const getValue = (e) => {
        if (e.currentTarget.id === "name") {
            setName(e.currentTarget.value);
        } else if (e.currentTarget.id === "review") {
            setReview(e.currentTarget.value);
        } else if (e.currentTarget.id === "date") {
            setDate(e.currentTarget.value);
        }
    };

    const saveData = () => {
        const data = {
            name,
            date,
            description: review
        }

        let url = "http://localhost:3001/reviews";

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
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Добавить отзыв</h1>
                <form action="javascript:void(0)" className={styles.form}>
                    <div>
                        <label htmlFor="name">Имя</label>
                        <input type="text" id="name" onChange={getValue}/>
                    </div>
                    <div>
                        <label htmlFor="review">Отзыв</label>
                        <textarea type="text" id="review" onChange={getValue}/>
                    </div>
                    <div>
                        <label htmlFor="date">Дата</label>
                        <input type="date" id="date" onChange={getValue}/>
                    </div>
                    <div>
                        <button onClick={saveData}>
                            Добавить
                        </button>
                    </div>
                </form>
                <div className={styles.cartContinue}>
                    <Link to="/">
                        <svg width="32" height="60" viewBox="0 0 32 60" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M30.3343 59.9854C31.0544 59.9867 31.6393 59.4038 31.6406 58.6836C31.6412 58.3365 31.5033 58.0033 31.2575 57.7581L3.49025 29.9934L31.2575 2.22888C31.7674 1.71898 31.7674 0.892329 31.2575 0.382427C30.7476 -0.127476 29.9209 -0.127476 29.411 0.382427L0.723141 29.0703C0.214094 29.5795 0.214094 30.4049 0.723141 30.9142L29.411 59.602C29.6555 59.8473 29.9878 59.9854 30.3343 59.9854Z"
                                fill="#3B7976"/>
                        </svg>
                        Вернуться на главную
                    </Link>
                </div>
                <Toaster/>
            </div>
        </div>
    );
};

export default AddReview;
