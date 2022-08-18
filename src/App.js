import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./pages/MainPage/Main";
import MainMenu from "./pages/MainPage/components/MainMenu/MainMenu";
import MainOrder from "./pages/MainPage/components/MainDeliver/MainDeliver";
import NotFound from "./pages/NotFound/NotFound";
import Products from "./pages/Admin/Products/Products";
import Cart from "./pages/Cart/Cart";
import ProductsReviewContent from "./pages/Admin/Products/ProductsReviewContent/ProductsReviewContent";
import AddReview from "./pages/Admin/Products/ProductsReviewContent/AddReview/AddReview";
import UpdateReview from "./pages/Admin/Products/ProductsReviewContent/UpdateReview/UpdateReview";
import ProductsOrder from "./pages/Admin/Products/ProductsOrder/ProductsOrder";
import ProductsMenu from "./pages/Admin/Products/ProductsMenu/ProductsMenu";
import ProductsContacts from "./pages/Admin/Products/ProductsContacts/ProductsContacts";
import ProductsEmployees from "./pages/Admin/Products/ProductsEmployees/ProductsEmployees";
import ProductsMain from "./pages/Admin/Products/ProductsMain/ProductsMain";
import Checkout from "./pages/Checkout/Checkout";
import Contacts from "./pages/Contacts/Contacts";
import Deliver from "./pages/Deliver/Deliver";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header/>}>
                        <Route index element={<Main/>}/>
                        <Route path="/menu" element={<MainMenu/>}/>
                        <Route path="/deliver" element={<Deliver/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/add-review" element={<AddReview/>}/>
                        <Route path="/checkout" element={<Checkout/>}/>
                    </Route>

                    <Route path="/admin" element={<Products/>}>
                        <Route path="/admin/check-main/:title" element={<ProductsMain/>}/>
                        <Route path="/admin/check-order/:title" element={<ProductsOrder/>}/>
                        <Route path="/admin/check-menu/:title" element={<ProductsMenu/>}/>
                        <Route path="/admin/check-contacts/:title" element={<ProductsContacts/>}/>
                        <Route path="/admin/check-review/:title" element={<ProductsReviewContent/>}/>
                        <Route path="/admin/check-employees/:title" element={<ProductsEmployees/>}/>
                        <Route path="/admin/check-review/:title/:id" element={<UpdateReview/>}/>
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
