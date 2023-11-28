import search from "../../assets/icons/search";
import api from "../../helper/httpHelper";
import { uiAction } from "../../store/slices/ui";
import React from "react";
import { useState } from "react";
import Scroll from "../../UI/scrol/scrol";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import arrow from "../../assets/icons/arrow";
const Wallet = () => {
  const [data, setData] = useState();
  const [show, setShow] = useState(0);
  const [inputs, setInputs] = useState(
    [
      {id:0,value:""}
    ]
  );

  const dispatch = useDispatch();

  useEffect(() => {
    api({
      url: "restuarants/wallet",
    }).then((res) => {
      setData(res.data.data);
      console.log(res);
      dispatch(uiAction.closeLoading());
    });
  }, []);
  return (
    data && (
      <div className="setting-main-con">
        <div
          style={{ paddingLeft: "3%", paddingTop: "3%" }}
          className="setting-con"
        >
          <h2>المناطق</h2>
          <div className="add-contry-con">

            <span>
              <h2>مفتاح الدولة</h2>
              <input type="text" placeholder="مفتاح" />
            </span>{" "}
            <span>
              <h2>اسم الدولة</h2>
              <input type="text" placeholder="اسم" />
            </span>
            <div className="input-array">
              {
                inputs.map((e,i)=>{
                  return <input
                   onChange={()=>{
                    if (i==inputs.length-1) {
                      setInputs(old=>[...old,{value:"",id:1}])
                    }
                  }} type="text" placeholder="اسم المحافضة"/>
                })
              }
            </div>
            <div className="add-contry-con-button">
              <button>اضافة منطقة</button>
            </div>
            
          </div>
          <div className="wallet-pills">
            <div className="wallet-pills-list">
              <div className="wallet-pill-title">
                <h2>تفاصيل</h2>
                <h2>عدد المحافضات</h2>
                <h2>مفتاح الدولة</h2> <h2>اسم الدولة</h2>
              </div>
              <div className="wallet-pill-body">
                <h2
                  onClick={() => setShow((e) => !e)}
                  style={{ cursor: "pointer" }}
                >
                  {arrow}
                </h2>
                <h2>18</h2>
                <h2>+964</h2>
                <h2>العراق</h2>
                <div
                  style={{
                    height: show ? "40px" : "0px",
                    padding: show ? "2%" : "0%",
                    borderColor: show ? "" : "transparent",
                  }}
                  className="wallet-pill-body-more"
                >
                  <Scroll>
                    <li>بغداد</li>
                    <a></a>
                    <li>بصرة</li>
                    <a></a>
                    <li>موصل</li>
                    <a></a>
                    <li>دياله</li>
                    <a></a>
                    <li>كربلاء</li>
                    <a></a>
                    <li>اربيل</li>
                    <a></a>
                    <li>دهوك</li>
                    <a></a>
                  </Scroll>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Wallet;
