import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./pages/MainPage/Main";
import Footer from "./components/Footer/Footer";
import MainMenu from "./pages/MainPage/components/MainMenu/MainMenu";
import MainOrder from "./pages/MainPage/components/MainOrder/MainOrder";
import NotFound from "./pages/NotFound/NotFound";
import Products from "./pages/Admin/Products/Products";
import Cart from "./pages/Cart/Cart";

function App() {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header/>}>
                        <Route index element element={<Main/>}/>
                        <Route path="/menu" element={<MainMenu/>}/>
                        <Route path="/order" element={<MainOrder/>}/>
                        <Route path="/contacts" element={<Main/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                    </Route>

                    <Route path="/admin/check-products" element={<Products/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                {Toaster}
            </BrowserRouter>
        </>
    );
}

export default App;
