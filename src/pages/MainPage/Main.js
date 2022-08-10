import React from 'react';
import MainBlock from "./components/MainBlock/MainBlock";
import MainOrder from "./components/MainOrder/MainOrder";
import MainReview from "./components/MainReview/MainReview";
import MainNew from "./components/MainNew/MainNew";
import MainBurger from "./components/MainBurger/MainBurger";
import MainMenu from "./components/MainMenu/MainMenu";
import MainPizza from "./components/MainPizza/MainPizza";

const Main = () => {

    return (
        <>
            <MainBlock/>
            <MainNew/>
            <MainBurger/>
            <MainMenu/>
            <MainPizza/>
            <MainOrder/>
            <MainReview/>
        </>
    );
};

export default Main;