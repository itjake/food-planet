import React, {useEffect, useState} from 'react';
import styles from "./ProductsMenu.module.css";
import {toast} from "react-hot-toast";
import {Link} from "react-router-dom";

const ProductsMenu = () => {

    const [menu, setMenu] = useState([]);

    const deleteMenu = (id) => {
        const url = "http://localhost:3001/reviews/" + id;

        const options = {
            method: "DELETE",
        }

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    toast.success("Успешно удаленнно");
                    getMenu();
                } else {
                    toast.error("Ошибка. Статус ошибки" + response.status);
                }
            })
    }

    const getMenu = () => {
        const url = "http://localhost:3001/menu";

        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    toast.error("Произошла ошибка. Статус ошибки:" + response.status);
                }
            })
            .then((data) => setMenu(data));
    };

    useEffect(getMenu, []);

    console.log(menu)

    return (
        <>
            <table border="1">
                <tr>
                    <th>Название</th>
                    <th>Картинка</th>
                    <th>Описание</th>
                    <th>Цена</th>
                    <th>Валюта</th>
                </tr>
                {
                    menu.map(item => {
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td><img src={item.img} alt=""/></td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.currency}</td>
                                <td>
                                    <button className={styles.adminBtn} onClick={() => deleteMenu(item.id)}>Удалить
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
        </>
    );
};

export default ProductsMenu;
