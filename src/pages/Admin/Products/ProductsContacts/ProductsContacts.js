import React, {useEffect, useState} from 'react';
import {toast} from "react-hot-toast";
import styles from "../ProductsMenu/ProductsMenu.module.css";
import {Link} from "react-router-dom";

const ProductsContacts = () => {

    const [contacts, setContacts] = useState([]);

    const updateContacts = (e) => {

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

        const url = 'http://localhost:3001/contacts/' + //id;
            fetch(url, options)
                .then(response => {
                    if (response.ok) {
                        toast.success('Отзыв обновлен');
                    } else {
                        toast.error('Поробуйте заново');
                    }
                })

    }

    const getContacts = () => {
        const url = "http://localhost:3001/contacts";

        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    toast.error("Произошла ошибка. Статус ошибки:" + response.status);
                }
            })
            .then((data) => setContacts(data));
    };

    useEffect(getContacts, []);

    return (
        <>
            <table border="1">
                <tr>
                    <th>Телефон</th>
                    <th>Адрес</th>
                    <th>Рабочее время</th>
                    <th>Ссылка на инстаграм</th>
                    <th>Ссылка на Фэйсбук</th>
                    <th>Редактировать</th>
                </tr>
                {
                    contacts.map(item => {
                        return (
                            <tr>
                                <td>{item.phone}</td>
                                <td>{item.cafeAddress}</td>
                                <td>{item.work}</td>
                                <td>{item.insta}</td>
                                <td>{item.faceBook}</td>
                                <td>
                                    <Link to={`/admin/check-contacts/update-contacts/${item.id}`}>
                                        <button className={styles.adminBtn}>Редактировать</button>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })
                }
            </table>
        </>
    );
};

export default ProductsContacts;
