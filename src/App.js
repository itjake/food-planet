import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./pages/MainPage/Main";
import Footer from "./components/Footer/Footer";
import MainMenu from "./pages/MainPage/components/MainMenu/MainMenu";
import MainOrder from "./pages/MainPage/components/MainOrder/MainOrder";
import NotFound from "./pages/NotFound/NotFound";

function App() {
    return (
        <>
            <section className="container">
                <div className="content">
                    <BrowserRouter>
                        <Header/>
                        <Routes>
                            <Route path="/" element={<Main/>}/>
                            <Route path="/menu" element={<MainMenu/>}/>
                            <Route path="/order" element={<MainOrder/>}/>
                            <Route path="/contacts" element={<Main/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default App;
