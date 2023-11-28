import React from "react";
import H from "../../UI/text/text";
import Img from "../../UI/image-circle/image";
import price from "../../assets/icons/price";
import phone from "../../assets/icons/phone";
import { useDispatch } from "react-redux";
import time from "../../assets/icons/time";
import { homeAction } from "../../store/slices/home";
function OrderCardMo({ data }) {
  console.log(data);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(homeAction.showOrder(data.id))}
      className="order-item-con-mo"
    >
      <div className="order-item-user-mo">
        <h1 id={data.state == 3 ? "new-order-mo" : "new-order-motrue"} t={5}>
          {data.state === 10
            ? "طلب جديد"
            : data.state === 1
            ? "مقبلو"
            : data.state === 3
            ? "مرفوض"
            : "مكتمل"}
        </h1>
        <Img
          ZM={100}
          ZP={100}
          ZU={"px"}
          BR={".6rem"}
          style={{ border: " 1px solid #006d77" }}
          src={data.image}
        />
        <div>
          <h2>{data.name}</h2>
          <h2>{data.address}</h2>
          <span>
            <h2>
              {data.time}
              {time}
            </h2>
            <h2>
              {data.phoneNumber}
              {phone}
            </h2>
            <h2>
              {data.price}
              {price}
            </h2>
          </span>
        </div>
      </div>
      {/* <div style={{width:"100%",marginTop:"10px"}} className="order-item-action-con">
            <button className='order-item-action-reject flex-c'><h2 t={5}>رفض</h2></button>         
            <button className='order-item-action-accept flex-c'><H t={5}>قبول</h2></button>
            <H id="new-order-mo" t={5}>طلب جديد</h2>
        </div> */}
    </div>
  );
}

export default OrderCardMo;
