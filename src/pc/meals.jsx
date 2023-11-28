import React from "react";
import SearchBar from "../component/meals/SearchBar.jsx";
import CategoriesBar from "../component/meals/CategoriesBar.jsx";
import CategoriesList from "../component/meals/CategoriesList.jsx";
import AddMeals from "../component/meals/addmeals.jsx";         
import { useDispatch } from "react-redux";
import { uiAction } from "../store/slices/ui.js";
import Section from "../component/meals/section.jsx";

function Meals() {

  return (
    <div className="meals-main-con">
      <SearchBar />
      <Section/>
      {/* <CategoriesList /> */}
      <AddMeals/>
    </div>
  );
}

export default Meals;
