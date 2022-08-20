import React, {useState} from 'react';
import styles from "./AddEmployees.module.css";
import {toast, Toaster} from "react-hot-toast";

const AddEmployees = () => {

    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [wage, setWage] = useState();
    const [workplace, setWorkplace] = useState();
    const [experience, setExperience] = useState();
    const [img, setImg] = useState();

    const getValue = (e) => {
        if (e.currentTarget.id === "name") {
            setName(e.currentTarget.value);
        } else if (e.currentTarget.id === "age") {
            setAge(e.currentTarget.value);
        } else if (e.currentTarget.id === "wage") {
            setWage(e.currentTarget.value);
        } else if (e.currentTarget.id === "workplace") {
            setWorkplace(e.currentTarget.value);
        } else if (e.currentTarget.id === "experience") {
            setExperience(e.currentTarget.value);
        } else if (e.currentTarget.id === "experience") {
            setImg(e.currentTarget.value);
        }
    };

    const saveData = () => {
        const data = {
            name,
            age,
            wage,
            workplace,
            experience,
            img,
        }

        let url = "http://localhost:3001/employess";

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
                    toast.success("Сотрудник успешно добавлен");
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
                        <label htmlFor="review">Возраст</label>
                        <input type="number" id="age" onChange={getValue}/>
                    </div>
                    <div>
                        <label htmlFor="review">Фото</label>
                        <input type="text" id="img" onChange={getValue}/>
                    </div>
                    <div>
                        <label htmlFor="date">Зарплата</label>
                        <input type="number" id="wage" onChange={getValue}/>
                    </div>
                    <div>
                        <label htmlFor="date">Опыт работы</label>
                        <input type="text" id="workplace" onChange={getValue}/>
                    </div>
                    <div>
                        <label htmlFor="date">Рабочее место</label>
                        <input type="text" id="experience" onChange={getValue}/>
                    </div>
                    <div>
                        <button onClick={saveData}>
                            Добавить
                        </button>
                    </div>
                    <Toaster/>
                </form>
                <Toaster/>
            </div>
        </div>
    );
};

export default AddEmployees;
