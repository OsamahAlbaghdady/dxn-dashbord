import imageIcon from "../../assets/icons/imageIcon";
import React, { useEffect, useState } from "react";
import GoogleMaps from "../else/map";
import time from "../../assets/icons/time";
import api from "../../helper/httpHelper";
import { useDispatch } from "react-redux";
import { uiAction } from "../../store/slices/ui";
import Loading from "../else/newloading";

function SettingForm() {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("restaurant"))
  );
  const { lat, lng, name, phone, description, close_time, open_time, image } =
    data;
    React.useEffect(() => {
      setTimeout(() => {
        dispatch(uiAction.closeLoading())
      }, 400);
    },[])
  return (
    <div className="setting-main-con">
      <div className="setting-con">
        <div className="setting-form-con">
          <h1>معلومات التواصل</h1>
          <br />
          <h2>معلومات الفيسبوك</h2>
          <div className="setting-form1">
            <span>
              {" "}
              <h2>رابط الحساب</h2>
              <input type="text"placeholder="...link" />
            </span>
            <span>
              {" "}
              <h2>اسم الحساب</h2>
              <input type="text" placeholder="@name" />
            </span>
          </div>
          <br />
          <h2>معلومات الانستكرام</h2>
          <div className="setting-form1">
            <span>
              {" "}
              <h2>رابط الحساب</h2>
              <input type="text"placeholder="...link" />
            </span>
            <span>
              {" "}
              <h2>اسم الحساب</h2>
              <input type="text" placeholder="@name" />
            </span>
          </div>
          <br />
          <h2>معلومات البريد الالكتروني</h2>
          <div className="setting-form1">
            <span>
              {" "}
              <h2>رابط الحساب</h2>
              <input type="text"placeholder="...link" />
            </span>
            <span>
              {" "}
              <h2>اسم الحساب</h2>
              <input type="text" placeholder="@name" />
            </span>
          </div>
          <br />
          <h2>معلومات الواتساب</h2>
          <div className="setting-form1">
            <span>
              {" "}
              <h2>رابط الحساب</h2>
              <input type="text"placeholder="...link" />
            </span>
            <span>
              {" "}
              <h2>رقم الهاتف</h2>
              <input type="text" placeholder="+964*******" />
            </span>
          </div>
          <br />
          <h2>معلومات الهاتف</h2>
          <div className="setting-form1">
            <span>
              {" "}
              <h2>رقم الهاتف</h2>
              <input type="text" placeholder="+964*******"  />
            </span>
          </div>

          <div className="setting-action-con">
            <button className="setting-action1 flex-c">
              حفض التعديل
              {loading && <Loading size={"25px"} color={"#f0f0f0"} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingForm;
