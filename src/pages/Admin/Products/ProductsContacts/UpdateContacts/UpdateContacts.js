import React, {useState, useEffect} from 'react';
import {toast, Toaster} from "react-hot-toast";
import styles from "./UpdateContacts.module.css";
import {useParams} from "react-router-dom";

const UpdateMenu = () => {
    const [menu, setMenu] = useState([]);
    const params = useParams();
    const id = params.id;

    const getProductById = () => {
        const url = 'http://localhost:3001/contacts/' + id;
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
            phone: e.currentTarget.phone.value,
            cafeAddress: e.currentTarget.cafeAddress.value,
            work: e.currentTarget.work.value,
            insta: e.currentTarget.insta.value,
            faceBook: e.currentTarget.faceBook.value
        }
        console.log(data);

        const options = {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const url = 'http://localhost:3001/contacts/' + id;
        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    toast.success('Контакты обновлены');
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
                        <label htmlFor="name">Номер</label>
                        <input type="text" id="name" defaultValue={menu.phone} name="phone"/>
                    </div>
                    <div>
                        <label htmlFor="review">Адрес</label>
                        <textarea type="text" id="review" defaultValue={menu.cafeAddress} name="cafeAddress"/>
                    </div>
                    <div>
                        <label htmlFor="review">Рабочее время</label>
                        <textarea type="text" id="review" defaultValue={menu.work} name="work"/>
                    </div>
                    <div>
                        <label htmlFor="date">Ссылка на инсту</label>
                        <input type="text" id="date" defaultValue={menu.insta} name="insta"/>
                    </div>
                    <div>
                        <label htmlFor="date">Ссылка на фэйсбук</label>
                        <input type="text" id="date" defaultValue={menu.faceBook} name="faceBook"/>
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
