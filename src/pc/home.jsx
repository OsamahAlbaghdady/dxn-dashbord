import React from "react";
import Stats from "../component/home/stats";
import OrderList from "../component/home/orderList";
function Home() {
  return (
    <div className="main-home-con">
      <Stats />
      <OrderList/>
    </div>
  );
}

export default Home;
