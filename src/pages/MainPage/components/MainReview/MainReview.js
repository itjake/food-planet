import React, {useState, useEffect} from 'react';
import styles from "./MainReview.module.css";
import ava from '../../../../Assets/img/ava.png'
import toast from "react-hot-toast"
import {Link} from "react-router-dom";

const MainReview = () => {

    const [reviews, setReviews] = useState([]);

    const getReviews = () => {
        const url = "http://localhost:3001/reviews";

        fetch(url)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    toast.error("Произошла ошибка. Статус ошибки:" + response.status);
                }
            })
            .then(data => setReviews(data))
    }

    useEffect(() => {
        getReviews();
    }, [])


    return (
        <section className={styles.fourthPage}>
            <div className={styles.fourthPageContent}>
                <div className={styles.fourthPageTitle}>
                    Отзывы
                </div>
                <div className={styles.fourthPageReviews}>
                    {reviews.map(item => {
                        return (
                            <div className={styles.fourthPageReview} key={item.id}>
                                <div className={styles.fourthPageLogo}>
                                    <img src={ava} alt="ava"/>
                                </div>
                                <div className={styles.fourthPageName}>
                                    {item.name}
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_0_295)">
                                            <path d="M12.0526 9.42029L13.3158 13.3361L9.40001 12.0729L12.0526 9.42029Z"
                                                  fill="#1D3130"/>
                                            <path
                                                d="M4.75671 2.63339L10.9196 8.79626L8.24007 11.4758L2.07719 5.3129L4.75671 2.63339Z"
                                                fill="#1D3130"/>
                                            <path
                                                d="M1.10893 2.64198L2.87735 0.873556C3.12999 0.620924 3.50893 0.620924 3.76157 0.873556L4.32999 1.44198L1.67736 4.09461L1.10893 3.52619C0.856302 3.27356 0.856302 2.89461 1.10893 2.64198Z"
                                                fill="#FF583E"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_295">
                                                <rect width="12.6316" height="12.6316" fill="white"
                                                      transform="matrix(-1 0 0 1 13.3158 0.684082)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={styles.fourthPageDescription}>
                                    {item.description}
                                </div>
                                <div className={styles.fourthPageDate}>
                                    {item.date}
                                </div>
                            </div>
                        );
                    })
                    }
                </div>

                <div className={styles.addReview}>
                    <Link to="/add-review">
                        <button className={styles.addReviewBtn}>
                            Добавить отзыв
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MainReview;