import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { homeAction } from "../../store/slices/home";
import { useNavigate } from "react-router-dom";
import trash from "../../assets/icons/trash";
const SectionItem = ({ data, isCart, m,isLoading }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <div  style={{ marginRight: m ? m : "" }} className="item-card-maincon">
      <div
        style={{ transform: isLoading ? "rotateY(0deg)" : "rotateY(-90deg)" }}
        className="item-card-con-loading"
      >
        <span className="cardLoading"></span>
      </div>
      <div
        
        style={{ transform: isLoading ? "rotateY(90deg)" : "rotateY(0deg)" }}
        className="item-card-con"
      >
        {/* <span
          onClick={() => {
            nav("/home/1");
            // dispatch(uiAction.showItem());
          }}
          className="item-card-button"
        >
          {eye} عرض
        </span> */}
        <div className="item-card-image-con">
          <img src={data.image} />
          <p>{data.disc}</p>
        </div>
        <h4>{data.name}</h4>
        <h2>{data.title}</h2>
        <h3>{data.price + data.priceUnit}</h3>
        <button
          onClick={() => {
            isCart
              ? dispatch(homeAction.removeItem(data))
              : dispatch(homeAction.addToCart(data));
          }}
          className="cart-icon f-dark"
        >
          {trash}
        </button>
      </div>
    </div>
  );
};

export default SectionItem;
