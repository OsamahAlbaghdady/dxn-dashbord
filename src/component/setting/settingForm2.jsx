import imageIcon from "../../assets/icons/imageIcon";
import React, { useEffect, useState } from "react";
import GoogleMaps from "../else/map";
import time from "../../assets/icons/time";
import api from "../../helper/httpHelper";
import { useDispatch } from "react-redux";
import { uiAction } from "../../store/slices/ui";
import Loading from "../else/newloading";

function SettingForm2() {

  const [loading, setLoading] = useState(false);

  return (
    <div className="setting-main-con">
      <div className="setting-con">
        <div className="setting-form-con">
          <h1>معلومات الواجة</h1>
          <br />
          <div className="setting-form1">
            <span>
              {" "}
              <h2>عنوان ملون</h2>
              <input type="text"placeholder="" />
            </span>
            <span>
              {" "}
              <h2>عنوان فرعي</h2>
              <input type="text" placeholder="" />
            </span>
            <span>
              {" "}
              <h2>هامش</h2>
              <input type="text" placeholder="" />
            </span>
          </div>
          <br />

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

export default SettingForm2;
