import React, {useState, useEffect} from 'react';
import {toast, Toaster} from "react-hot-toast";
import styles from "./UpdateMenu.module.css";
import {useParams} from "react-router-dom";

const UpdateMenu = () => {
    const [menu, setMenu] = useState([]);
    const params = useParams();
    const id = params.id;

    const getProductById = () => {
        const url = 'http://localhost:3001/menu/' + id;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    toast.error('При получении данных произошла ошибка');
                }
            })
            .then(data => setMenu(data))
    }


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
            price: e.currentTarget.price.value,
            img: e.currentTarget.img.value
        }
        console.log(data);

        const options = {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const url = 'http://localhost:3001/menu/' + id;
        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    toast.success('Товар обновлен');
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
                        <label htmlFor="name">Название</label>
                        <input type="text" id="name" defaultValue={menu.name} name="name"/>
                    </div>
                    <div>
                        <label htmlFor="review">Описание</label>
                        <textarea type="text" id="review" defaultValue={menu.description} name="review"/>
                    </div>
                    <div>
                        <label htmlFor="date">Цена</label>
                        <input type="number" id="date" defaultValue={menu.price} name="price"/>
                    </div>
                    <div>
                        <label htmlFor="date">Картинка</label>
                        <input type="text" id="date" defaultValue={menu.img} name="img"/>
                    </div>
                    <div>
                        <button type="submit">
                            Отправить
                        </button>
                    </div>
                    <Toaster/>
                </form>
            </div>
        </div>
    );
};

export default UpdateMenu;
