import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./pages/MainPage/Main";
import MainMenu from "./pages/MainPage/components/MainMenu/MainMenu";
import MainOrder from "./pages/MainPage/components/MainOrder/MainOrder";
import NotFound from "./pages/NotFound/NotFound";
import Products from "./pages/Admin/Products/Products";
import Cart from "./pages/Cart/Cart";
import ProductsReviewContent from "./pages/Admin/Products/ProductsReviewContent/ProductsReviewContent";
import ProductsMainContent from "./pages/Admin/Products/ProductsMainContent/ProductsMainContent";
import AddReview from "./pages/Admin/Products/ProductsReviewContent/AddReview/AddReview";
import UpdateReview from "./pages/Admin/Products/ProductsReviewContent/UpdateReview/UpdateReview";
import ProductsOrder from "./pages/Admin/Products/ProductsOrder/ProductsOrder";
import ProductsMenu from "./pages/Admin/Products/ProductsMenu/ProductsMenu";
import ProductsContacts from "./pages/Admin/Products/ProductsContacts/ProductsContacts";
import ProductsEmployees from "./pages/Admin/Products/ProductsEmployees/ProductsEmployees";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header/>}>
                        <Route index element={<Main/>}/>
                        <Route path="/menu" element={<MainMenu/>}/>
                        <Route path="/order" element={<MainOrder/>}/>//delivery
                        <Route path="/contacts" element={<Main/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/add-review" element={<AddReview/>}/>
                    </Route>

                    <Route path="/admin" element={<Products/>}>
                        <Route path="/admin/check-order/" element={<ProductsOrder/>}/>
                        <Route path="/admin/check-menu/" element={<ProductsMenu/>}/>
                        <Route path="/admin/check-contacts/" element={<ProductsContacts/>}/>
                        <Route path="/admin/check-review/" element={<ProductsReviewContent/>}/>
                        <Route path="/admin/check-employees/" element={<ProductsEmployees/>}/>
                        <Route path="/admin/check-review/update-review/" element={<UpdateReview/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                {Toaster}
            </BrowserRouter>
        </>
    );
}

// {
//     "id": 4,
//     "name": "Сергей",
//     "description": "Хочу поблагодарить за бургер !Очень вкусненький в меру остренький)Спасибо,удивили!)",
//     "date": "02-07-2020"
// }

export default App;
