import React, {useEffect, useState} from 'react';
import styles from "./Contacts.module.css";
import planet from "../../Assets/img/headerLogo.png";
import {toast} from "react-hot-toast";
import Footer from "../../components/Footer/Footer";
import UserEmail from "../UserEmail/UserEmail";

const Contacts = () => {

    const [contact, setContact] = useState([]);

    const getContacts = () => {
        const url = "http://localhost:3001/contacts";

        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    toast.error("Произошла ошибка. Статус ошибки:" + response.status);
                }
            })
            .then((data) => setContact(data));
    };

    useEffect(getContacts, []);

    const newContact = contact.map(item => {
        return (
            <div className={styles.secondWrapper}>
                <div className={styles.secondWrapperTitle}>
                    <img src={planet} alt="" className={styles.food}/>
                </div>
                <div className={styles.secondWrapperAbout}>
                    Позвоните нам
                </div>
                <div className={styles.secondWrapperPhone}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.71922 0.5H2.5C1.39543 0.5 0.5 1.39543 0.5 2.5V4.5C0.5 10.0228 4.97715 14.5 10.5 14.5H12.5C13.6046 14.5 14.5 13.6046 14.5 12.5V11.118C14.5 10.7393 14.286 10.393 13.9472 10.2236L11.5313 9.01564C10.987 8.74349 10.3278 9.01652 10.1354 9.59384L9.83762 10.4871C9.64474 11.0658 9.05118 11.4102 8.45309 11.2906C6.05929 10.8119 4.18814 8.94071 3.70938 6.54691C3.58976 5.94882 3.93422 5.35526 4.51286 5.16238L5.62149 4.79284C6.11721 4.6276 6.40214 4.10855 6.2754 3.60162L5.68937 1.25746C5.57807 0.812297 5.17809 0.5 4.71922 0.5Z"
                            stroke="#3B7976"/>
                    </svg>
                    {item.phone}
                </div>
                <div className={styles.secondWrapperAddress}>
                    <svg width="13" height="15" viewBox="0 0 13 15" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M6.5 8.49478C7.604 8.49478 8.5 7.59934 8.5 6.49606C8.5 5.39278 7.604 4.49738 6.5 4.49738C5.396 4.49738 4.5 5.39278 4.5 6.49606C4.5 7.59934 5.396 8.49478 6.5 8.49478Z"
                              stroke="#3B7976" stroke-linecap="square"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M12.5 6.49606C12.5 11.4928 7.5 14.4909 6.5 14.4909C5.5 14.4909 0.5 11.4928 0.5 6.49606C0.5 3.18522 3.187 0.5 6.5 0.5C9.813 0.5 12.5 3.18522 12.5 6.49606Z"
                              stroke="#3B7976" stroke-linecap="square"/>
                    </svg>
                    {item.cafeAddress}
                </div>
                <div className={styles.secondWrapperTime}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.5 7.5H7C7 7.63261 7.05268 7.75979 7.14645 7.85355L7.5 7.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM7 3V7.5H8V3H7ZM7.14645 7.85355L10.1464 10.8536L10.8536 10.1464L7.85355 7.14645L7.14645 7.85355Z"
                            fill="#3B7976"/>
                    </svg>
                    {item.work}
                </div>
                <div className={styles.wrapperTwo}>
                    <div className={styles.secondWrapperInsta}>
                        <a href={item.insta} target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.7 56.7" width="20"
                                 height="20">
                                <g fill="#833ab4">
                                    <path
                                        d="M28.2 16.7c-7 0-12.8 5.7-12.8 12.8s5.7 12.8 12.8 12.8S41 36.5 41 29.5s-5.8-12.8-12.8-12.8zm0 21c-4.5 0-8.2-3.7-8.2-8.2s3.7-8.2 8.2-8.2 8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z"></path>
                                    <circle cx="41.5" cy="16.4" r="2.9"></circle>
                                    <path
                                        d="M49 8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7 0-14.5 5.8-14.5 14.5v20.5c0 4.3 1.4 8 4.2 10.7 2.7 2.6 6.3 3.9 10.4 3.9h20.4c4.3 0 7.9-1.4 10.5-3.9 2.7-2.6 4.1-6.3 4.1-10.6V19.3c0-4.2-1.4-7.8-4-10.4zm-.4 31c0 3.1-1.1 5.6-2.9 7.3s-4.3 2.6-7.3 2.6H18c-3 0-5.5-.9-7.3-2.6C8.9 45.4 8 42.9 8 39.8V19.3c0-3 .9-5.5 2.7-7.3 1.7-1.7 4.3-2.6 7.3-2.6h20.6c3 0 5.5.9 7.3 2.7 1.7 1.8 2.7 4.3 2.7 7.2v20.6z"></path>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div className={styles.secondWrapperFaceBook}>
                        <a href={item.faceBook} target="_blank">
                            <svg width="20" height="20" viewBox="0 0 9 17"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.117.003L6.094 0C3.82 0 2.352 1.535 2.352 3.912v1.803H.318A.321.321 0 000 6.04v2.614c0 .179.142.324.318.324h2.034v7.539c0 .179.143.324.318.324h2.654a.321.321 0 00.318-.324v-7.54h2.379a.321.321 0 00.318-.323V6.039a.328.328 0 00-.092-.229.315.315 0 00-.226-.095H5.642V4.186c0-.735.172-1.108 1.112-1.108h1.363a.321.321 0 00.317-.324V.327a.321.321 0 00-.317-.324z"
                                    fill="#395a9a" fill-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        )
    })

    return (<>
            <section className="container">
                <div className="content">
                    <div className={styles.contacts}>
                        <div className={styles.contactsTitle}>
                            Контакты
                        </div>
                        <div className={styles.contactsWrapper}>
                            <div className={styles.firstWrapper}>
                                <div className={styles.map}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.7642845287037!2d74.6076592149474!3d42.85671011158536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb633e4b83ca9%3A0xd62798efbb6cbaf7!2zOTYg0YPQuy4g0JHQsNC50YLQuNC6INCx0LDQsNGC0YvRgNCwLCDQkdC40YjQutC10LogNzIwMDY0!5e0!3m2!1sru!2skg!4v1660817614022!5m2!1sru!2skg"
                                        allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            <div className={styles.secondWrapper}>
                                {newContact}
                            </div>
                        </div>
                    </div>
                    <UserEmail/>
                </div>
            </section>
        </>
    );
};

export default Contacts;
