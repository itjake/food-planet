import React, {useState} from 'react';
import styles from "./ProductSideBar.module.css";
import {NavLink} from "react-router-dom";
import {toast} from "react-hot-toast";


const ProductSideBar = () => {

    const setActive = ({isActive}) => (isActive ? styles.active : "");

    return (<>
            <div className={styles.adminPageLeftTitle}>
                FOOD PLANET
            </div>
            <div className={styles.adminPageMid}>
                <ul className={styles.adminPageMidItems}>
                    <li>
                        <NavLink to="/admin/check-main/main" className={setActive}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4"
                                      d="M15.5232 8.94116H8.54412L13.1921 13.5891C13.3697 13.7667 13.6621 13.7812 13.8447 13.6091C14.9829 12.5367 15.7659 11.0912 15.9956 9.46616C16.035 9.18793 15.8041 8.94116 15.5232 8.94116V8.94116ZM15.0576 7.03528C14.8153 3.52176 12.0076 0.714119 8.49412 0.471767C8.22589 0.453237 8 0.679413 8 0.948236V7.5294H14.5815C14.8503 7.5294 15.0762 7.30352 15.0576 7.03528ZM6.58824 8.94116V1.96206C6.58824 1.68118 6.34147 1.45029 6.06353 1.48971C2.55853 1.985 -0.120585 5.04705 0.00412089 8.71675C0.132356 12.4856 3.37736 15.5761 7.14794 15.5288C8.6303 15.5103 10 15.0326 11.1262 14.2338C11.3585 14.0691 11.3738 13.727 11.1724 13.5256L6.58824 8.94116Z"
                                      fill="#9FA2B4"/>
                            </svg>
                            Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/check-order/order" className={setActive}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4"
                                      d="M3.55556 5.33334H12.4444V10.6667H3.55556V5.33334ZM14.6667 8C14.6667 8.73639 15.2636 9.33334 16 9.33334V12C16 12.7364 15.4031 13.3333 14.6667 13.3333H1.33333C0.596944 13.3333 0 12.7364 0 12V9.33334C0.736389 9.33334 1.33333 8.73639 1.33333 8C1.33333 7.26362 0.736389 6.66667 0 6.66667V4.00001C0 3.26362 0.596944 2.66667 1.33333 2.66667H14.6667C15.4031 2.66667 16 3.26362 16 4.00001V6.66667C15.2636 6.66667 14.6667 7.26362 14.6667 8ZM13.3333 5.11112C13.3333 4.74292 13.0349 4.44445 12.6667 4.44445H3.33333C2.96514 4.44445 2.66667 4.74292 2.66667 5.11112V10.8889C2.66667 11.2571 2.96514 11.5556 3.33333 11.5556H12.6667C13.0349 11.5556 13.3333 11.2571 13.3333 10.8889V5.11112Z"
                                      fill="#9FA2B4"/>
                            </svg>
                            Заказы</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/check-menu/menu" className={setActive}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_584_261)">
                                    <path opacity="0.4"
                                          d="M5.50187 14.1984C5.50219 14.395 5.56031 14.5875 5.66937 14.7512L6.20344 15.5541C6.29467 15.6913 6.41841 15.8039 6.56366 15.8817C6.7089 15.9596 6.87114 16.0003 7.03594 16.0003H8.96438C9.12917 16.0003 9.29141 15.9596 9.43665 15.8817C9.5819 15.8039 9.70564 15.6913 9.79688 15.5541L10.3309 14.7512C10.44 14.5875 10.4982 14.3952 10.4984 14.1984L10.4997 13H5.50031L5.50187 14.1984ZM2.5 5.5C2.5 6.88656 3.01406 8.15156 3.86125 9.11812C4.3775 9.70718 5.185 10.9378 5.49281 11.9759C5.49406 11.9841 5.495 11.9922 5.49625 12.0003H10.5037C10.505 11.9922 10.5059 11.9844 10.5072 11.9759C10.815 10.9378 11.6225 9.70718 12.1388 9.11812C12.9859 8.15156 13.5 6.88656 13.5 5.5C13.5 2.45656 11.0284 -0.00937887 7.98281 -3.87451e-06C4.795 0.00968363 2.5 2.59281 2.5 5.5ZM8 3C6.62156 3 5.5 4.12156 5.5 5.5C5.5 5.77625 5.27625 6 5 6C4.72375 6 4.5 5.77625 4.5 5.5C4.5 3.57 6.07 2 8 2C8.27625 2 8.5 2.22375 8.5 2.5C8.5 2.77625 8.27625 3 8 3Z"
                                          fill="#9FA2B4"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_584_261">
                                        <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            Меню</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/check-contacts/contacts" className={setActive}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4"
                                      d="M2.4 7.2C3.2825 7.2 4 6.4825 4 5.6C4 4.7175 3.2825 4 2.4 4C1.5175 4 0.8 4.7175 0.8 5.6C0.8 6.4825 1.5175 7.2 2.4 7.2ZM13.6 7.2C14.4825 7.2 15.2 6.4825 15.2 5.6C15.2 4.7175 14.4825 4 13.6 4C12.7175 4 12 4.7175 12 5.6C12 6.4825 12.7175 7.2 13.6 7.2ZM14.4 8H12.8C12.36 8 11.9625 8.1775 11.6725 8.465C12.68 9.0175 13.395 10.015 13.55 11.2H15.2C15.6425 11.2 16 10.8425 16 10.4V9.6C16 8.7175 15.2825 8 14.4 8ZM8 8C9.5475 8 10.8 6.7475 10.8 5.2C10.8 3.6525 9.5475 2.4 8 2.4C6.4525 2.4 5.2 3.6525 5.2 5.2C5.2 6.7475 6.4525 8 8 8ZM9.92 8.8H9.7125C9.1925 9.05 8.615 9.2 8 9.2C7.385 9.2 6.81 9.05 6.2875 8.8H6.08C4.49 8.8 3.2 10.09 3.2 11.68V12.4C3.2 13.0625 3.7375 13.6 4.4 13.6H11.6C12.2625 13.6 12.8 13.0625 12.8 12.4V11.68C12.8 10.09 11.51 8.8 9.92 8.8ZM4.3275 8.465C4.0375 8.1775 3.64 8 3.2 8H1.6C0.7175 8 0 8.7175 0 9.6V10.4C0 10.8425 0.3575 11.2 0.8 11.2H2.4475C2.605 10.015 3.32 9.0175 4.3275 8.465Z"
                                      fill="#9FA2B4"/>
                            </svg>
                            Контакты</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/check-review/reviews" className={setActive}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4"
                                      d="M8 8C10.2094 8 12 6.20937 12 4C12 1.79063 10.2094 0 8 0C5.79063 0 4 1.79063 4 4C4 6.20937 5.79063 8 8 8ZM10.9937 9.01875L9.5 15L8.5 10.75L9.5 9H6.5L7.5 10.75L6.5 15L5.00625 9.01875C2.77812 9.125 1 10.9469 1 13.2V14.5C1 15.3281 1.67188 16 2.5 16H13.5C14.3281 16 15 15.3281 15 14.5V13.2C15 10.9469 13.2219 9.125 10.9937 9.01875Z"
                                      fill="#9FA2B4"/>
                            </svg>
                            Отзывы</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/check-employees/employees" className={setActive}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4"
                                      d="M15 11.25V0.75C15 0.334375 14.6656 0 14.25 0H4C2.34375 0 1 1.34375 1 3V13C1 14.6562 2.34375 16 4 16H14.25C14.6656 16 15 15.6656 15 15.25V14.75C15 14.5156 14.8906 14.3031 14.7219 14.1656C14.5906 13.6844 14.5906 12.3125 14.7219 11.8313C14.8906 11.6969 15 11.4844 15 11.25ZM5 4.1875C5 4.08437 5.08437 4 5.1875 4H11.8125C11.9156 4 12 4.08437 12 4.1875V4.8125C12 4.91563 11.9156 5 11.8125 5H5.1875C5.08437 5 5 4.91563 5 4.8125V4.1875ZM5 6.1875C5 6.08437 5.08437 6 5.1875 6H11.8125C11.9156 6 12 6.08437 12 6.1875V6.8125C12 6.91563 11.9156 7 11.8125 7H5.1875C5.08437 7 5 6.91563 5 6.8125V6.1875ZM12.9187 14H4C3.44688 14 3 13.5531 3 13C3 12.45 3.45 12 4 12H12.9187C12.8594 12.5344 12.8594 13.4656 12.9187 14Z"
                                      fill="#9FA2B4"/>
                            </svg>
                            Сотрудники</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ProductSideBar;
