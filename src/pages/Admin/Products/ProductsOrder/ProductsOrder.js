import React, {forwardRef, useEffect, useState} from 'react';
import styles from "../ProductsReviewContent/ProductsReviewContent.module.css";
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";

const ProductsOrder = () => {

    const [order, setOrder] = useState([]);

    const deleteOrder = (id) => {
        const url = "http://localhost:3001/order/" + id;

        const options = {
            method: "DELETE",
        }

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    toast.success("Успешно удаленнно");
                    getOrder();
                } else {
                    toast.error("Ошибка. Статус ошибки" + response.status);
                }
            })
    }

    const getOrder = () => {
        const url = "http://localhost:3001/orders";

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    toast.error(`Произошла ошибка. Статус ошибки:` + response.status);
                }
            })
            .then(data => setOrder(data))
    }

    useEffect(getOrder, [])

    console.log(order);

    return (
        <div className={styles.reviewContent}>
            <table border="1">
                <tr>
                    <th>Имя</th>
                    <th>Фамилие</th>
                    <th>Телефон</th>
                    <th>Эмайл</th>
                    <th>Город</th>
                    <th>Улица</th>
                    <th>Подъезд</th>
                    <th>Оплата</th>
                    <th>Квартира</th>
                    <th>Коментарий</th>
                    <th>Заказы</th>
                    <th>Удалить/Редачить</th>
                </tr>
                {
                    order.map((item) => {
                        console.log(item.order[6].price);
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.surname}</td>
                                <td>{item.email}</td>
                                <td>{item.city}</td>
                                <td>{item.street}</td>
                                <td>{item.entrance}</td>
                                <td>{item.flat}</td>
                                <td>{item.cash}</td>
                                <td>{item.comment}</td>
                                <td><p></p></td>
                                <td>
                                    {item.order[6].price}
                                </td>
                                <td>
                                    <button className={styles.adminBtn} onClick={() => deleteOrder(item.id)}>Удалить
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

export default ProductsOrder;
