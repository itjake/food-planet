import React, {forwardRef, useEffect, useState} from 'react';
import styles from "./ProductsOrder.module.css";
import {Link} from "react-router-dom";
import {toast, Toaster} from "react-hot-toast";

const ProductsOrder = () => {

    const [order, setOrder] = useState([]);
    const [check, setCheck] = useState("Не принято");
    const [visible, setVisible] = useState(true);

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

    const getCheck = () => {
        setCheck("Принято")
        setVisible(false)
        toast.success("Заказ успешно принят")
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

    const newOrder = order.map(item => {
        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.phone}</td>
                <td>{item.street}</td>
                <td>{item.flat}</td>
                <td>
                    {
                        Object.values(item.order).map(item => {
                            return (<>
                                    <ul className={styles.cartProductItems}>
                                        <li className={styles.products}><img src={item.img}
                                                                             className={styles.cartImg}
                                                                             alt=""/></li>
                                        <li className={styles.products}>{item.name}</li>
                                        <li className={styles.products}>{item.price} {item.currency}</li>
                                        <li className={styles.products}>{item.count} штук</li>
                                    </ul>
                                </>
                            )
                        })
                    }
                </td>
                <td>
                    {check === "Не принято" ? <p className={styles.notcheck}>{check}</p> :
                        <p className={styles.check}>{check}</p>}
                    {visible && <button className={styles.adminBtn} onClick={getCheck}>
                        Принять
                    </button>}
                </td>
                <Toaster/>
            </tr>
        )
    })


    return (
        <table border="1">
            <tr>
                <th>Имя</th>
                <th>Фамилие</th>
                <th>Телефон</th>
                <th>Улица</th>
                <th>Квартира</th>
                <th>Заказы</th>
                <th>Статус</th>
            </tr>
            {newOrder}
        </table>
    )
};


export default ProductsOrder;
