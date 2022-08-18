import React, {useState} from 'react';
import MainBlock from "./components/MainBlock/MainBlock";
import MainOrder from "./components/MainOrder/MainOrder";
import MainReview from "./components/MainReview/MainReview";
import MainNew from "./components/MainNew/MainNew";
import MainNewBurger from "./components/MainNew/components/MainNewBurger/MainNewBurger";
import MainMenu from "./components/MainMenu/MainMenu";
import MainMenuPizza from "./components/MainMenu/components/MainMenuPizza/MainMenuPizza";
import Footer from "../../components/Footer/Footer";
import MainMenuSushi from "./components/MainMenu/components/MainMenuSushi/MainMenuSushi";
import MainMenuRolls from "./components/MainMenu/components/MainMenuRolls/MainMenuRolls";
import MainMenuSalads from "./components/MainMenu/components/MainMenuSalads/MainMenuSalads";
import MainMenuDesserts from "./components/MainMenu/components/MainMenuDesserts/MainMenuDesserts";
import MainMenuDrinks from "./components/MainMenu/components/MainMenuDrinks/MainMenuDrinks";
import MainMenuBurger from "./components/MainMenu/components/MainMenuBurger/MainMenuBurger";
import MainNewPizza from "./components/MainNew/components/MainNewPizza/MainNewPizza";
import MainNewSushi from "./components/MainNew/components/MainNewSushi/MainNewSushi";
import MainNewSalads from "./components/MainNew/components/MainNewSalads/MainNewSalads";
import MainNewRolls from "./components/MainNew/components/MainNewRolls/MainNewRolls";
import MainNewDesserts from "./components/MainNew/components/MainNewDesserts/MainNewDesserts";
import MainNewDrinks from "./components/MainNew/components/MainNewDrinks/MainNewDrinks";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const Main = () => {

    return (<>
            <section className="container">
                <div className="content">
                    <MainBlock/>
                    <MainNew/>
                    {/*<MainNewBurger setName={setName}/>*/}
                    {/*<MainNewPizza/>*/}
                    {/*<MainNewSushi/>*/}
                    {/*<MainNewSalads/>*/}
                    {/*<MainNewRolls/>*/}
                    {/*<MainMenuDesserts/>*/}
                    {/*<MainNewDrinks/>*/}
                    <MainMenu/>
                    {/*<MainMenuPizza/>*/}
                    {/*<MainMenuBurger/>*/}
                    {/*<MainMenuSalads/>*/}
                    {/*<MainMenuSushi/>*/}
                    {/*<MainMenuDesserts/>*/}
                    {/*<MainMenuRolls/>*/}
                    {/*<MainMenuDrinks/>*/}
                    <MainOrder/>
                    <MainReview/>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Main;