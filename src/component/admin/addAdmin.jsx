import React, { useEffect, useState } from "react";
import arrow from "../../assets/icons/arrow";
import imageIcon from "../../assets/icons/imageIcon";
import { useDispatch, useSelector } from "react-redux";
import { adminAction } from "../../store/slices/admin";
import api from "../../helper/httpHelper";
import { uiAction } from "../../store/slices/ui";
import Loading from "../else/newloading";
function AddAdmin() {
  const [file, setFile] = useState(false);
  const [showList, setShowList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    isEdit,
    editData: { name, image, email, specialty, id, phone, password, type },
  } = useSelector((state) => state.admin.data);
  const categoriesList = [
    { name: "كاشير", id: 2 },
    { name: "ادمن", id: 1 },
  ];
  return (
    <div className="add-admin-main-con">
      <h1>إضافة ادمن</h1>
      <div className="add-admin-con">
        <div className="add-admin-form">
          {" "}
          <div className="add-admin-add-image flex-c">
            {imageIcon}
            <input
              type="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
                dispatch(
                  adminAction.set({
                    key: "image",
                    value: URL.createObjectURL(event.target.files[0]),
                  })
                );
              }}
              accept="image/*"
            />
            {image && <img src={image} alt="" />}
          </div>
          <div>
            <span>
              <h2>اسم الادمن</h2>
              <input
                type="text"
                value={name}
                onChange={(e) =>
                  dispatch(
                    adminAction.set({ key: "name", value: e.target.value })
                  )
                }
                placeholder="...الاسم"
              />
            </span>
            <span>
              <h2>رقم الادمن</h2>
              <input
                type="text"
                value={phone}
                onChange={(e) =>
                  dispatch(
                    adminAction.set({ key: "phone", value: e.target.value })
                  )
                }
                placeholder="...الرقم"
              />
            </span>
          </div>
          <div>
            <span>
              <h2>الرمز</h2>
              <input
                type="password"
                onChange={(e) =>
                  dispatch(
                    adminAction.set({ key: "password", value: e.target.value })
                  )
                }
                placeholder="...الرمز"
              />
            </span>
            <span>
              <h2>اكد الرمز</h2>
              <input
                type="password"
                onChange={(e) =>
                  dispatch(
                    adminAction.set({ key: "password", value: e.target.value })
                  )
                }
                placeholder="...اكد الرمز"
              />
            </span>
          </div>
          {/* <div className="add-meals-con3">
            <a
              onClick={() => setShowList((e) => !e)}
              className="add-meals-icon flex-c"
            >
              <li style={{ rotate: showList ? "0deg" : "90deg" }}></li>
              <span></span>
            </a>
            <div
              onClick={() => setShowList((e) => !e)}
              className="add-meals-drop-list-con"
            >
              <ul
                style={{
                  height: showList ? "120px" : "0px",
                  top: showList ? "110%" : "0%",
                  opacity: showList ? "1" : "0",
                }}
                className="add-meals-drop-list"
              >
                {categoriesList.map((e, i) => {
                  return (
                    <li
                      onClick={() => {
                        dispatch(adminAction.set({ key: "type", value: e.id }));
                        dispatch(
                          adminAction.set({ key: "specialty", value: e.name })
                        );
                      }}
                      key={i}
                    >
                      {e.name}
                    </li>
                  );
                })}
              </ul>
              <h2>{type != 0 ? specialty : "...القسم"}</h2>
              <a
                className="flex-c"
                style={{ rotate: showList ? "180deg" : "0deg" }}
              >
                {arrow}
              </a>
            </div>
          </div> */}
          <button
            style={{ position: "relative", overflow: "hidden" }}
            className="flex-c"
            onClick={() => {
              console.log({
                name,
                image: file,
                email,
                password,
                phone,
                account_type: type,
              });
              setIsLoading(true);
              api({
                url: isEdit
                  ? "user/add-admin"
                  : "user/add-admin",
                method: "post",
                isJSON:true,
                data: {
                  name,
                  password,
                  phone,
                  lat: 37.7749,
                  lng: -122.4194,
                  market_code: "ADM123"
                },
              }).then((res) => {
                setIsLoading(false);
                dispatch(
                  uiAction.onSnack({
                    body: res.data.message,
                    status: res.data.status,
                  })
                );
                if (res.data.status) {
                  if (isEdit) {
                    dispatch(adminAction.remove(res.data.data.id));
                    dispatch(adminAction.addAdmin(res.data.data));
                  } else {
                    dispatch(adminAction.addAdmin(res.data.data));
                  }
                }
              });
            }}
          >
            اضافة
            {isLoading && <Loading size={"28px"} color={"#006d77"} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddAdmin;
