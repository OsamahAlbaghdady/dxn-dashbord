import React, { useState, useEffect } from "react";
import H from "../../UI/text/text";
import OrderCard from "./orderCard";
import useOrientationChange from "../../hooks/orientationchange";
import OrderCardMo from "./orderCardMo";
import api from "../../helper/httpHelper";
import ShowOrder from "./showOrder";
import { useDispatch, useSelector } from "react-redux";
import { homeAction } from "../../store/slices/home";
import { uiAction } from "../../store/slices/ui";
function OrderList() {
  const isMo = useOrientationChange();
  const data = useSelector(state=>state.home.data.orders)
  const dispatch = useDispatch()
  useEffect(() => {
    api({
      url: "restuarants/get-orders",
      method: "get",
      data: {},
    }).then((res) => {
      if (res.data.status) {
        dispatch(uiAction.closeLoading())
        dispatch(homeAction.newData(res.data.data))
      }
    });
  }, []);
  return (
    <>
    <ShowOrder/>
    <div
      style={{
        height: isMo ? "fit-content" : "",
      }}
      className="order-list-con"
    >
      <div className="order-list-title-con">
        <H t={3}></H>
        <H t={3}>طلباتي</H>
      </div>
      <div className="order-list-scroll-mo">
        {data.length==0?
        <div style={{width:"100%",textAlign:"center",height:"250px",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <h2>لا يوجد طلبات</h2>
        </div>
        :
          data.map((e, i) => {
            return <OrderCardMo key={i} data={e} />;
          })}
      </div>
    </div>
    </>
    
  );
}

export default OrderList;

