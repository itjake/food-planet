import React, {useEffect, useState} from 'react';
import styles from "./Checkout.module.css";
import {toast, Toaster} from "react-hot-toast";
import {Link} from "react-router-dom";

const Checkout = () => {

    const [order, setOrder] = useState([]);
    const [name, setUserName] = useState();
    const [surname, setUserSurname] = useState();
    const [phone, setUserPhone] = useState();
    const [email, setUserEmail] = useState();
    const [city, setUserCity] = useState();
    const [street, setUserStreet] = useState();
    const [entrance, setUserEntrance] = useState();
    const [flat, setUserFlat] = useState();
    const [cash, setUserCash] = useState();
    const [bank, setUserBank] = useState();
    const [courier, setUserCourier] = useState();
    const [transfer, setUserTransfer] = useState();
    const [comment, setUserComment] = useState();

    const getValueName = (e) => {
        setUserName(e.target.value);
    }
    const getValueSurname = (e) => {
        setUserSurname(e.target.value);
    }
    const getValuePhone = (e) => {
        setUserPhone(e.target.value);
    }
    const getValueEmail = (e) => {
        setUserEmail(e.target.value);
    }
    const getValueCity = (e) => {
        setUserCity(e.target.value);
    }
    const getValueStreet = (e) => {
        setUserStreet(e.target.value);
    }
    const getValueEntrance = (e) => {
        setUserEntrance(e.target.value);
    }
    const getValueFlat = (e) => {
        setUserFlat(e.target.value);
    }
    const getValueCash = (e) => {
        setUserCash(e.target.value);
    }
    const getValueBank = (e) => {
        setUserBank(e.target.value);
    }
    const getValueCourier = (e) => {
        setUserCourier(e.target.value);
    }
    const getValueTransfer = (e) => {
        setUserTransfer(e.target.value);
    }
    const getValueComment = (e) => {
        setUserComment(e.target.value);
    }

    let total = localStorage.getItem("total");
    console.log(total)

    const getOrder = () => {
        const order = JSON.parse(localStorage.getItem('cart'));
        setOrder(Object.values(order));
    }

    const saveOrder = (e) => {
        e.preventDefault();

        const orderList = JSON.parse(localStorage.getItem('cart'));
        const data = {
            name,
            surname,
            phone,
            email,
            city,
            street,
            entrance,
            flat,
            cash,
            bank,
            courier,
            transfer,
            comment,
            order: orderList
        }
        console.log(data)
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const url = 'http://localhost:3001/orders';

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    toast.success('Ваш заказ успешно оформлен. Ожидайте');
                } else {
                    toast.error('Ошибка');
                }
            })
        setUserName("");
        setUserSurname("");
        setUserPhone("");
        setUserEmail("");
        setUserCity("");
        setUserStreet("");
        setUserEntrance("");
        setUserFlat("");
    }

    useEffect(getOrder, []);

    const newOrder = order.map(item => {
        // {
        //     total = `${item.totalPrice}  ${item.currency}`
        // }
        return (
            <ul className={styles.cartProductItems}>
                <li className={styles.products}><img src={item.img} className={styles.cartImg} alt=""/></li>
                <li className={styles.products}>{item.name}</li>
                <li className={styles.productsSSS}>{item.count}</li>
                <li className={styles.productsS}> {item.price} сом</li>
                <li className={styles.productsSS}> {item.price * item.count} сом</li>
            </ul>);
    })

    return (
        <section className="container">
            <div className="content">
                <form action="#">
                    <div className={styles.checkoutPage}>
                        <div className={styles.checkoutPageTitle}>
                            Оформление заказа
                        </div>
                        <div className={styles.wrapper}>
                            <div className={styles.firstWrapper}>
                                <div className={styles.checkoutPageSubTitle}>
                                    Ваши контактные данные
                                </div>
                                <div className={styles.privateOrder}>
                                    <div className={styles.checkoutSurname}>
                                        <input value={name} onChange={getValueName} type="text" name="userSurName"
                                               className={styles.checkoutInput}
                                               placeholder="Фамилие"/>
                                    </div>
                                    <div className={styles.checkoutName}>
                                        <input value={surname} onChange={getValueSurname} type="text" name="userName"
                                               className={styles.checkoutInputS}
                                               placeholder="Имя"/>
                                    </div>
                                    <div className={styles.checkoutTel}>
                                        <input value={phone} onChange={getValuePhone} type="tel" name="userTel"
                                               className={styles.checkoutInput}
                                               placeholder="Телефон"/>
                                    </div>
                                    <div className={styles.checkoutEmail}>
                                        <input value={email} onChange={getValueEmail} type="email" name="userEmail"
                                               className={styles.checkoutInputS}
                                               placeholder="Email"/>
                                    </div>
                                </div>
                                <div className={styles.checkoutOrder}>
                                    <h2 className={styles.order}>Ваш заказ</h2>
                                    <div className={styles.cartDescr}>
                                        <div className={styles.cardDescrItem}>Продукт</div>
                                        <ul className={styles.cardDescrItems}>
                                            <li className={styles.cardDescrItem}>Количество</li>
                                            <li className={styles.cardDescrItem}>Цена</li>
                                            <li className={styles.cardDescrItem}>К оплате</li>
                                        </ul>
                                    </div>
                                    {newOrder}
                                </div>
                                <h2 className={styles.address}>Адрес доставки</h2>
                                <div className={styles.checkoutAddress}>
                                    <div className={styles.checkoutCity}>
                                        <input value={city} onChange={getValueCity} type="text" name="userCity"
                                               className={styles.checkoutInput}
                                               placeholder="Город"/>
                                    </div>
                                    <div className={styles.checkoutStreet}>
                                        <input value={street} onChange={getValueStreet} type="text" name="userStreet"
                                               className={styles.checkoutInputS}
                                               placeholder="Улица"/>
                                    </div>
                                    <div className={styles.checkoutEntrance}>
                                        <input value={entrance} onChange={getValueEntrance} type="text"
                                               name="userEntrance"
                                               className={styles.checkoutInput}
                                               placeholder="Подъезд"/>
                                    </div>
                                    <div className={styles.checkoutFlat}>
                                        <input value={flat} onChange={getValueFlat} type="text" name="userFlat"
                                               className={styles.checkoutInputS}
                                               placeholder="Квартира"/>
                                    </div>
                                </div>
                                <h2 className={styles.payment}>Способ оплаты</h2>
                                <div className={styles.checkoutAddressS}>
                                    <div className={styles.checkoutS}>
                                        <div><input onClick={getValueCash} type="radio" name="address" check="userCash"
                                                    className={styles.checkoutInputSSSS}/>
                                        </div>
                                        <div>Наличными</div>
                                    </div>
                                    <div className={styles.checkoutS}>
                                        <div><input value={cash} onClick={getValueBank} type="radio" name="address"
                                                    check="userBank"
                                                    className={styles.checkoutInputSSSS}/>
                                        </div>
                                        <div>Банковский перевод</div>
                                    </div>
                                    <div className={styles.checkoutS}>
                                        <div><input value={courier} onClick={getValueCourier} type="radio"
                                                    name="address"
                                                    check="userCourier"
                                                    className={styles.checkoutInputSSSS}/>
                                        </div>
                                        <div>Оплата курьеру</div>
                                    </div>
                                    <div className={styles.checkoutS}>
                                        <div><input value={transfer} onClick={getValueTransfer} type="radio"
                                                    name="address"
                                                    check="userTransfer"
                                                    className={styles.checkoutInputSSSS}/>
                                        </div>
                                        <div>Денежный перевод</div>
                                    </div>
                                </div>
                                <div className={styles.comment}>
                                    <p className={styles.orderComment}>Комментраий к заказу</p>
                                    <textarea value={comment} onChange={getValueComment} id="" cols="30" rows="10"
                                              name="userComment"
                                              className={styles.commentS}>
                            </textarea>
                                </div>
                            </div>
                            <div className={styles.secondWrapper}>
                                <div className={styles.total}>
                                    <h2 className={styles.main}>Итого:</h2>
                                    <div className={styles.overall}>
                                        <p>{order.length} товара на сумму</p>
                                        <p className={styles.totalS}>{total}</p>
                                    </div>
                                    <div className={styles.overallPrice}>
                                        <p>К оплате</p>
                                        <p className={styles.totalSS}>{total}</p>
                                    </div>
                                    <div className={styles.overallButton}>
                                        <button className={styles.overallBtn} onClick={saveOrder}>
                                            Подтвердить заказ
                                        </button>
                                        <span className={styles.rules}>
                                            Подтверждая заказ, я принимаю условия
                                            <a target="_blank"
                                               className={styles.link}
                                               href="https://www.istore.kg/static/docs/terms_of_use_istore_kg.pdf">пользовательского
                                        соглашения</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Toaster/>
                </form>
                <div className={styles.cartContinue}>
                    <Link to="/">
                        <svg width="32" height="60" viewBox="0 0 32 60" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M30.3343 59.9854C31.0544 59.9867 31.6393 59.4038 31.6406 58.6836C31.6412 58.3365 31.5033 58.0033 31.2575 57.7581L3.49025 29.9934L31.2575 2.22888C31.7674 1.71898 31.7674 0.892329 31.2575 0.382427C30.7476 -0.127476 29.9209 -0.127476 29.411 0.382427L0.723141 29.0703C0.214094 29.5795 0.214094 30.4049 0.723141 30.9142L29.411 59.602C29.6555 59.8473 29.9878 59.9854 30.3343 59.9854Z"
                                fill="#3B7976"/>
                        </svg>
                        Вернуться на главную
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Checkout;
