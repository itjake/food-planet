import React from 'react';
import MainSecondPageNew from "./MainSecondPageNew/MainSecondPageNew";
import MainSecondPageBurger from "./MainSecondPageBurger/MainSecondPageBurger";
import MainSecondPageMenu from "./MainSecondPageMenu/MainSecondPageMenu";
import MainSecondPagePizza from "./MainSecondPagePizza/MainSecondPagePizza";

const MainSecondPage = () => {
  return (
    <>
      <MainSecondPageNew/>
      <MainSecondPageBurger/>
      <MainSecondPageMenu/>
      <MainSecondPagePizza/>
    </>
  );
};

export default MainSecondPage;