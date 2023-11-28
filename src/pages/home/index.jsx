import Home from "../../pc/home";
import { homeAction } from "../../store/slices/home";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  const { ws } = useSelector((state) => state.ws);
  useEffect(() => {
    if (ws) {
      ws.addEventListener("message", (event) => {
        const data = JSON.parse(event.data);
        if (
          data.state != 0 &&
          data.state != 11 &&
          data.state != 1 &&
          data.state
        ) {
          console.log(data);
          dispatch(
            homeAction.add({
              id: data.order_id_db,
              name: data.user.name,
              price: data.total_price_after_discount,
              status: data.state,
              date: data.time,
              phoneNumber: data.user.mobile,
              address: data.to_address,
              image: data.user.image,
            })
          );
        }
      });
    }
  }, [ws]);
  return (
    <>
      <Home />
    </>
  );
};

export default Index;
