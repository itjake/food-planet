import React from "react";
import './App.css';
import Header from "./Header/Header";
import Main from "./pages/MainPage/Main";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <section className="container">
        <div className="content">
          <Header/>
          <Main/>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default App;
