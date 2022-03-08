import React, { useState } from "react";
import "./style.css";
import MenuAPI from "./MenuAPI.js";
import Menu from "./Menu";
import Navbar from "./Navbar";

const uniqueList = [

  ...new Set(MenuAPI.map((curElem) => {

    return curElem.category;
  })
  ),
  "All",
];

const Restaurant = () => {

  const [menuData, setMenuData] = useState(MenuAPI);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {

    if(category==="All") {
      setMenuData(MenuAPI);
      return;
    }

    const updatedList = MenuAPI.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
       <Navbar filterItem={filterItem} menuList={menuList}/>
       <Menu menuData={menuData} />
    </>
  )
}

export default Restaurant;
