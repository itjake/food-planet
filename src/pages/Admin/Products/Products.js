import React from 'react';
import {Outlet} from "react-router-dom";
import styles from "./Products.module.css";
import ProductSideBar from "./ProductsSideBar/ProductsSideBar";
import ProductsMainContent from "./ProductsMainContent/ProductsMainContent";

const Products = () => {
    return (
        <section className={styles.container}>
            <div className={styles.adminPage}>
                <div className={styles.adminPageLeft}>
                    <ProductSideBar/>
                </div>
                <div className={styles.adminPageRight}>
                    <ProductsMainContent/>
                    <Outlet/>
                </div>
            </div>
        </section>
    );
};

export default Products;
