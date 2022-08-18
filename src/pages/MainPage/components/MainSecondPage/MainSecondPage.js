import React from 'react';
import MainNew from "../MainNew/MainNew";
import MainNewBurger from "../MainNew/components/MainNewBurger/MainNewBurger";
import MainMenu from "../MainMenu/MainMenu";
import MainMenuPizza from "../MainMenu/components/MainMenuPizza/MainMenuPizza";

const MainSecondPage = () => {
  return (
    <>
      <MainNew/>
      <MainNewBurger/>
      <MainMenu/>
      <MainMenuPizza/>
    </>
  );
};

export default MainSecondPage;