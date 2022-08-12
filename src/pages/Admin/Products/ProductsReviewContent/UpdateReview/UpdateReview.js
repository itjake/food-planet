import React, {useState, useEffect} from 'react';
import {toast} from "react-hot-toast";
import styles from "./UpdateReview.module.css";
import {useParams} from "react-router-dom";

const UpdateReview = () => {
    const [reviews, setReview] = useState([]);
    const params = useParams();
    const id = params.id;

    const getProductById = () => {
        const url = 'http://localhost:3001/reviews/' + id;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    toast.error('При получении данных произошла ошибка');
                }
            })
            .then(data => setReview(data))
    }
    console.log(reviews)

    // const getValue = (e) => {
    //
    //             if (e.currentTarget.id === 'name'){
    //                 setName(e.currentTarget.value);
    //             }else if(e.currentTarget.id === 'img_url'){
    //                 setImgUrl(e.currentTarget.value);
    //             }else if(e.currentTarget.id === 'price'){
    //                 setPrice(e.currentTarget.value);
    //             }else if(e.currentTarget.id === 'desc'){
    //                 setDesc(e.currentTarget.value);
    //             }else if(e.currentTarget.id === 'category'){
    //                 setCategory(e.currentTarget.value);
    //             }
    // }

    const updateReview = (e) => {

        const data = {
            name: e.currentTarget.name.value,
            description: e.currentTarget.review.value,
            date: e.currentTarget.date.value,
        }
        console.log(data);

        const options = {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const url = 'http://localhost:3001/reviews/' + id;
        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    toast.success('Отзыв обновлен');
                } else {
                    toast.error('Поробуйте заново');
                }
            })

    }

    useEffect(getProductById, []);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Редактировать отзыв</h1>
                <form onSubmit={updateReview} action="javascript:void(0)" className={styles.form}>
                    <div>
                        <label htmlFor="name">Имя</label>
                        <input type="text" id="name" defaultValue={reviews.name} name="name"/>
                    </div>
                    <div>
                        <label htmlFor="review">Отзыв</label>
                        <textarea type="text" id="review" defaultValue={reviews.description} name="review"/>
                    </div>
                    <div>
                        <label htmlFor="date">Дата</label>
                        <input type="date" id="date" defaultValue={reviews.date} name="date"/>
                    </div>
                    <div>
                        <button type="submit">
                            Отправить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;
