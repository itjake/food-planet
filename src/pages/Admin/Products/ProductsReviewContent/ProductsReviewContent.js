import React, {useEffect, useState} from 'react';
import styles from "./ProductsReviewContent.module.css";
import {toast} from "react-hot-toast";
import {Link} from "react-router-dom";

const ProductsReviewContent = () => {

    const [reviews, setReviews] = useState([]);

    const deleteReview = (id) => {
        const url = "http://localhost:3001/reviews/" + id;

        const options = {
            method: "DELETE",
        }

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    toast.success("Успешно удаленнно");
                    getReviews();
                } else {
                    toast.error("Ошибка. Статус ошибки" + response.status);
                }
            })
    }

    const getReviews = () => {
        const url = "http://localhost:3001/reviews";

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    toast.error(`Произошла ошибка. Статус ошибки:` + response.status);
                }
            })
            .then(data => setReviews(data))
    }

    useEffect(getReviews, [])

    console.log(reviews);

    return (
        <div className={styles.reviewContent}>
            <table border="1">
                <tr>
                    <th>Имя</th>
                    <th>Отзывы</th>
                    <th>Дата отзывов</th>
                    <th>Редактировать/Удалить</th>
                </tr>
                {
                    reviews.map(item => {
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.date}</td>
                                <td>
                                    <button className={styles.adminBtn} onClick={() => deleteReview(item.id)}>Удалить
                                    </button>
                                    <Link to={`/admin/check-review/update-review/${item.id}`}>
                                        <button className={styles.adminBtn}>Редактировать</button>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })
                }
            </table>
        </div>
    );
};

export default ProductsReviewContent;
