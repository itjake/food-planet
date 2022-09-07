import React, {useState, useEffect} from 'react';
import styles from "./ProductCart.module.css";
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";

const ProductCart = () => {

    const [cart, setCart] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const getProducts = () => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart)
            setCart(Object.values(cart));
        else {
            return;
        }
    }

    const changeCount = (e, data) => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        cart[data.id].count = +e.currentTarget.value;

        localStorage.setItem('cart', JSON.stringify(cart));
        getProducts();
    }

    const deleteItem = (id) => {
        let newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
        console.log(newCart)
    }

    let cartItemsNumber = cart.reduce((currentValue, item) => {
        return currentValue + (item.count * item.price);
    }, 0);

    const getTotal = () => {
        localStorage.setItem('total', cartItemsNumber);
    }


    useEffect(getProducts, [cart]);

    const newCart = cart.map(item => {
        return (<>
                <ul className={styles.cartProductItems}>
                    <li className={styles.products}><img src={item.img} className={styles.cartImg} alt=""/></li>
                    <li className={styles.products}>{item.name}</li>
                    <li className={styles.products}><input className={styles.cartInput}
                                                           type="number"
                                                           defaultValue={item.count}
                                                           onChange={(e) => changeCount(e, item)}/>
                    </li>
                    <li className={styles.productsSS}>{item.price} {item.currency}</li>
                    <li className={styles.productsS}>{item.count * item.price} сом</li>
                    <button onClick={() => deleteItem(item.id)} className={styles.cartBtn}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M6.94281 5.99938L11.1854 10.242L10.2426 11.1848L6 6.94219L1.75736 11.1848L0.81455 10.242L5.05719 5.99938L0.81455 1.75674L1.75736 0.81393L6 5.05657L10.2426 0.81393L11.1854 1.75674L6.94281 5.99938Z"
                                  fill="#BF1E77"/>
                        </svg>
                    </button>
                </ul>
            </>
        );
    })

    return (<>
            <section className="container">
                <div className="content">
                    <div className={styles.cartContent}>
                        <div className={styles.cartTitle}>
                            Корзина
                        </div>
                        <div className={styles.cartSubTitle}>
                            Товары в вашей корзине
                        </div>
                        <div className={styles.cartDescr}>
                            <div className={styles.cardDescrItem}>Продукт</div>
                            <ul className={styles.cardDescrItems}>
                                <li className={styles.cardDescrItem}>Количество</li>
                                <li className={styles.cardDescrItem}>Цена</li>
                                <li className={styles.cardDescrItem}>К оплате</li>
                            </ul>
                        </div>
                        <div className={styles.cartProducts}>
                            {newCart}
                        </div>
                        <div className={styles.cartTotal}>
                            Итого: {cartItemsNumber} cом
                        </div>
                        <div className={styles.cartButtonOrder}>
                            <Link to="/checkout">
                                <button onClick={getTotal} className={styles.cartBtnOrder}>
                                    Оформить заказ
                                </button>
                            </Link>
                        </div>
                        <div className={styles.cartContinue}>
                            <Link to="/">
                                <svg width="32" height="60" viewBox="0 0 32 60" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M30.3343 59.9854C31.0544 59.9867 31.6393 59.4038 31.6406 58.6836C31.6412 58.3365 31.5033 58.0033 31.2575 57.7581L3.49025 29.9934L31.2575 2.22888C31.7674 1.71898 31.7674 0.892329 31.2575 0.382427C30.7476 -0.127476 29.9209 -0.127476 29.411 0.382427L0.723141 29.0703C0.214094 29.5795 0.214094 30.4049 0.723141 30.9142L29.411 59.602C29.6555 59.8473 29.9878 59.9854 30.3343 59.9854Z"
                                        fill="#3B7976"/>
                                </svg>
                                Продолжить покупки
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductCart;
