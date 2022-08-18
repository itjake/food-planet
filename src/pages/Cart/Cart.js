import EmptyCart from "./EmptyCart/EmptyCart";
import ProductCart from "./ProductCart/ProductCart";
import {useEffect, useState} from "react";

const Cart = () => {

    const [cart, setCart] = useState([]);

    const getProducts = () => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart)
            setCart(Object.values(cart));
        else {
            return;
        }
    }

    useEffect(getProducts, []);

    return (<>
            {cart.length === 0 ? <EmptyCart/> : <ProductCart/>}
        </>
    );
};

export default Cart;
