import React from 'react';
import MainBlock from "./components/MainBlock/MainBlock";
import MainOrder from "./components/MainDeliver/MainDeliver";
import MainReview from "./components/MainReview/MainReview";
import MainNew from "./components/MainNew/MainNew";
import MainMenu from "./components/MainMenu/MainMenu";
import Footer from "../../components/Footer/Footer";
import Contacts from "../Contacts/Contacts";


const Main = () => {

    return (<>
            <section className="container">
                <div className="content">
                    <MainBlock/>
                    <MainNew/>
                    <MainMenu/>
                    <MainOrder/>
                    <MainReview/>
                    <Contacts/>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Main;