import React, { useEffect, useState } from "react";
import Img from "../../UI/image-circle/image";
import { useDispatch, useSelector } from "react-redux";

import Scroll from "../../UI/scrol/scrol";
import api from "../../helper/httpHelper";
import { homeAction } from "../../store/slices/home";
function ShowOrder() {
  const { showOrder, order } = useSelector((state) => state.home.data);
  const dispatch = useDispatch();
  const { ws } = useSelector((state) => state.ws);
  console.log(order);
  useEffect(() => {
    api({
      url: `restuarants/get-orders-by-id?id=7`,
    }).then((res) => {
      if(res.data.status){
      dispatch(homeAction.showOrderData(res.data.data));
    }
    });
  }, []);
  return (
    <>
      <div
        style={{ top: showOrder ? "10vh" : "-110vh" }}
        className="show-order-con-main"
      >
        <div
          onClick={() => dispatch(homeAction.showOrder())}
          style={{ left: showOrder ? "0" : "100vw" }}
          className="alert"
        ></div>
        <div className={"show-order-con "}>
          {order.id != 0 ? (
            <>
              <h1 className="order-title">order Details </h1>
              <div className="costumer-information-card">
                <div className="costumer-information">
                  <Img ZP={100} ZM={100} ZU={"px"} src={order.user.image} />
                  <div className="costumer-information-data">
                    <h2>Name : {order.user.name} </h2>
                    <h2>Location : {order.user.location} </h2>
                    <h2>Order Id : {order.id} </h2>
                    <h2>Phone Number : {order.phoneNumber}</h2>
                  </div>
                </div>
                {order.driver && (
                  <div className="costumer-information">
                    <Img ZP={100} ZM={100} ZU={"px"} src={order.driver.image} />
                    <div className="costumer-information-data">
                      <h2>Name : {order.driver.name} </h2>
                      <h2>Phone Number : {order.driver.phoneNumber} </h2>
                    </div>
                  </div>
                )}
              </div>
              <div className="order-item-list">
                <ul>
                  <Scroll>
                    {order.foods.map((e, i) => {
                      return (
                        <li>
                          <img src={e.image} alt="" />
                          <h3>{e.name}</h3>
                          <p>{e.desc}</p>
                        </li>
                      );
                    })}
                  </Scroll>
                </ul>
              </div>
              <h1 className="order-title">pilling</h1>
              <div className="order-pilling-con">
                <div className="order-pilling-title">
                  <h2 style={{ borderRadius: " 10px 0 0 10px " }}>name</h2>
                  <h2>count</h2>
                  <h2>price</h2>
                  <h2 style={{ borderRadius: "0 10px  10px 0 " }}>discount</h2>
                </div>
                {order.foods.map((e, i) => {
                  return (
                    <div className="order-pilling-body">
                      <h2>{e.name}</h2>
                      <h2>{e.quantity}</h2>
                      <h2>{e.item_price}</h2>
                      <h2>{e.item_price - e.total_price}</h2>
                    </div>
                  );
                })}

                <div className="order-pilling-title">
                  <h2
                    style={{
                      backgroundColor: "#559E8D",
                      borderRadius: "  10px 0 0 10px",
                    }}
                  >
                    total
                  </h2>
                  <h2 style={{ backgroundColor: "#559E8D" }}>
                    {order.foods.length}
                  </h2>
                  <h2 style={{ backgroundColor: "#559E8D" }}>
                    {order.totalPrice - order.finalPrice}
                  </h2>
                  <h2
                    style={{
                      backgroundColor: "#559E8D",
                      borderRadius: " 0 10px  10px 0",
                    }}
                  >
                    {order.totalPrice - order.finalPrice}
                  </h2>
                </div>
              </div>
              {order.state == 10 && (
                <div className="order-action-con">
                  <button
                    onClick={() => {
                      if (ws) {
                        ws.send(
                          JSON.stringify({
                            type: 3,
                            order_id: order.id,
                          })
                        );
                        dispatch(
                          homeAction.newStatus({ id: order.id, newStatus: 3 })
                        );
                        dispatch(homeAction.showOrder());
                      }
                    }}
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => {
                      if (ws) {
                        ws.send(
                          JSON.stringify({
                            type: 1,
                            order_id: order.order_id,
                          })
                        );
                        dispatch(
                          homeAction.newStatus({ id: order.id, newStatus: 1 })
                        );
                        dispatch(homeAction.showOrder());
                      }
                    }}
                    style={{ backgroundColor: "#70B2FF" }}
                  >
                    Accept
                  </button>
                </div>
              )}
            </>
          ) : (
            <span className="loader"></span>
          )}
        </div>
      </div>
    </>
  );
}

export default ShowOrder;
