import React from 'react';
import styles from "./MainBlock.module.css";
import burger from "../../../../Assets/img/burger.png";
import {Link} from "react-scroll";

const MainBlock = () => {
    return (
        <div>
            <section className={styles.firstPageContainer}>
                <div className={styles.firstPageContent}>
                    <div className={styles.firstPageWrapper}>
                        <div className={styles.firstPageLeft}>
                            <div className={styles.firstPageTitle}>
                                Доставка вкусной еды до 30 минут + напиток в подарок!
                            </div>
                            <div className={styles.firstPageSubTitle}>
                                Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и
                                ароматным.
                            </div>
                            <div className={styles.firstPageButton}>
                                <Link to="menu" spy={true} smooth={true} offset={-220}
                                      duration={500}>
                                    <button className={styles.firstPageBtn}>
                                        Перейти в меню
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.firstPageRight}>
                            <img src={burger} alt="burger"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainBlock;