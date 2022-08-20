import EmptyCart from "./EmptyCart/EmptyCart";
import ProductCart from "./ProductCart/ProductCart";
import {useEffect, useState} from "react";
import Footer from "../../components/Footer/Footer";

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

    useEffect(getProducts, [cart]);

    return (<>
            {cart.length === 0 ? <EmptyCart/> : <ProductCart/>}
            <Footer/>
        </>
    );
};

export default Cart;
