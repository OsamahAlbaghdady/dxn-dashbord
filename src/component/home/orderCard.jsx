import React from "react";
import H from "../../UI/text/text";
import Img from "../../UI/image-circle/image";
import price from "../../assets/icons/price";
import phone from "../../assets/icons/phone";
import box from "../../assets/icons/box";
function OrderCard({ data }) {
  return (
    <div className="order-item-con">
      <div className="order-item-action-con">
        <button className="order-item-action-reject flex-c">
          <H t={5}>رفض</H>
        </button>
        <button className="order-item-action-accept flex-c">
          <H t={5}>قبول</H>
        </button>
        <H id="new-order" t={5}>
          طلب جديد
        </H>
      </div>
      <div className="order-item-info">
        {/* <H t={6}>{data.count + " "}طلبات عدد {box}</H> */}
        <H t={6}>
          {data.price}
          {price}
        </H>
        <H t={6}>
          {data.phoneNumber}
          {phone}
        </H>
      </div>
      <div className="order-item-user">
        <H t={5}>{data.name}</H>
        <H t={7}>{data.address}</H>
        <H t={7}>{data.time}</H>
      </div>
      <Img
        ZP={60}
        ZM={60}
        BR={".6rem"}
        style={{ border: " 2px solid #006d77" }}
        ZU={"px"}
        src={data.image}
      />
    </div>
  );
}

export default OrderCard;
