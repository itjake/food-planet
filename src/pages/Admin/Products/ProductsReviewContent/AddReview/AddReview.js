import React, {useState} from 'react';
import styles from "./AddReview.module.css";
import {toast, Toaster} from "react-hot-toast";

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
                <Toaster/>
            </div>
        </div>
    );
};

export default AddReview;
