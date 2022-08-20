import React, {useEffect, useState} from 'react';
import styles from "./ProductsEmployees.module.css";
import {toast, Toaster} from "react-hot-toast";
import {Link} from "react-router-dom";

const ProductsEmployees = () => {

    const [contacts, setContacts] = useState([]);

    const deleteMenu = (id) => {
        const url = "http://localhost:3001/employess/" + id;

        const options = {
            method: "DELETE",
        }

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    toast.success("Успешно удаленнно");
                    getContacts();
                } else {
                    toast.error("Ошибка. Статус ошибки" + response.status);
                }
            })
    }

    const getContacts = () => {
        const url = "http://localhost:3001/employess";

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

    const newEmployees = contacts.map(item => {
        return (
            <>
                <div className={styles.card}>
                    <div className={styles.name}><img src={item.img} className={styles.img} alt=""/></div>
                    <div className={styles.name}>Имя: {item.name}</div>
                    <div className={styles.name}>Возраст: {item.age}</div>
                    <div className={styles.name}>Место работы: {item.workplace}</div>
                    <div className={styles.name}>Стаж работы: {item.expirience}</div>
                    <div className={styles.name}>Зарплата: {item.wage}</div>
                    <div className={styles.name}>
                        <button onClick={() => deleteMenu(item.id)} className={styles.btn}>Уволить</button>
                    </div>
                </div>
            </>
        );
    })

    return (
        <>
            <div className={styles.wrapper}>
                {newEmployees}
            </div>
            <div className={styles.Btn}>
                <Link to="/admin/add-employee">
                    <button className={styles.BTN}>
                        Добавить сотрудника
                    </button>
                </Link>
                <Toaster/>
            </div>
        </>
    );
};

export default ProductsEmployees;
