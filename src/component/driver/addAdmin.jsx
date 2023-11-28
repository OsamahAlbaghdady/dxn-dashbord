import React, { useEffect, useState } from "react";
import arrow from "../../assets/icons/arrow";
import imageIcon from "../../assets/icons/imageIcon";
import { useDispatch, useSelector } from "react-redux";
import { adminAction } from "../../store/slices/admin";
import api from "../../helper/httpHelper";
import { uiAction } from "../../store/slices/ui";
function AddAdmin() {
  const [file, setFile] = useState(false);
  const [showList, setShowList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    isEdit,
    editData: { name, image, email, specialty, id, phone, password, type },
  } = useSelector((state) => state.admin.data);
  const cty = [
    { name: "كاشير", id: 2 },
    { name: "ادمن", id: 1 },
  ];
  const country = [
    { name: "كاشير", id: 2 },
    { name: "ادمن", id: 1 },
  ];
  return (
    <div className="add-admin-main-con">
      <h1>إضافة سائق</h1>
      <div className="add-admin-con">
        <div className="add-admin-form">
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
              <h2>اسم السائق</h2>
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
            <h2>رقم السائق</h2>
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
              <h2>رقم الهويه الشخصية</h2>
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
            <h2>عنوان السكن</h2>
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
              <h2>نوع المركبة</h2>
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
            <h2>رقم المركبة</h2>
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
          <br />
          <h2>صورة الهوية الشخصيه</h2>
          <div className="add-meals-con4">
            <div className=" flex-c">
              {imageIcon}
              <input
                type="file"
                // onChange={(e) => {
                //   setFile(e.target.files[0]);
                // }}
                accept="image/*"
              />
              {/* {file ? (
                <img src={URL.createObjectURL(file)} alt="" />
              ) : (
                meal.image && <img src={meal.image} alt="" />
              )} */}
            </div>
            <div className=" flex-c">
              {imageIcon}
              <input
                type="file"
                // onChange={(e) => {
                //   setFile(e.target.files[0]);
                // }}
                accept="image/*"
              />
              {/* {file ? (
                <img src={URL.createObjectURL(file)} alt="" />
              ) : (
                meal.image && <img src={meal.image} alt="" />
              )} */}
            </div>
          </div>
          <br />

          <h2>صورة بطاقت السكن</h2>
          <div className="add-meals-con4">
            <div className=" flex-c">
              {imageIcon}
              <input
                type="file"
                // onChange={(e) => {
                //   setFile(e.target.files[0]);
                // }}
                accept="image/*"
              />
              {/* {file ? (
                <img src={URL.createObjectURL(file)} alt="" />
              ) : (
                meal.image && <img src={meal.image} alt="" />
              )} */}
            </div>
            <div className=" flex-c">
              {imageIcon}
              <input
                type="file"
                // onChange={(e) => {
                //   setFile(e.target.files[0]);
                // }}
                accept="image/*"
              />
              {/* {file ? (
                <img src={URL.createObjectURL(file)} alt="" />
              ) : (
                meal.image && <img src={meal.image} alt="" />
              )} */}
            </div>
          </div>
          {/* <div className="add-meals-con3">
            <a
              onClick={() => setShowList((e) => !e)}
              className="add-meals-icon flex-c"
            >
              <li style={{ rotate: showList==1 ? "0deg" : "90deg" }}></li>
              <span></span>
            </a>
            <div
              onClick={() => setShowList((e) =>e==1?0:1)}
              className="add-meals-drop-list-con"
            >
              <ul
                style={{
                  height: showList==1 ? "120px" : "0px",
                  top: showList==1 ? "110%" : "0%",
                  opacity: showList==1 ? "1" : "0",
                }}
                className="add-meals-drop-list"
              >
                {country.map((e, i) => {
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
                style={{ rotate: showList==1 ? "180deg" : "0deg" }}
              >
                {arrow}
              </a>
            </div>
          </div>
          <div className="add-meals-con3">
            <a
              onClick={() => setShowList((e) => e==2?0:2)}
              className="add-meals-icon flex-c"
            >
              <li style={{ rotate: showList ? "0deg" : "90deg" }}></li>
              <span></span>
            </a>
            <div
              onClick={() => setShowList((e) => e==2?0:2)}
              className="add-meals-drop-list-con"
            >
              <ul
                style={{
                  height: showList==2 ? "120px" : "0px",
                  top: showList==2 ? "110%" : "0%",
                  opacity: showList==2 ? "1" : "0",
                }}
                className="add-meals-drop-list"
              >
                {cty.map((e, i) => {
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
                style={{ rotate: showList==2 ? "180deg" : "0deg" }}
              >
                {arrow}
              </a>
            </div>
          </div> */}
          <button
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
                  ? "restuarants/update-manager"
                  : "restuarants/add-manager",
                method: "post",
                data: {
                  name,
                  image: file,
                  email,
                  password,
                  phone,
                  account_type: type,
                  id,
                },
              }).then((res) => {
                setIsLoading(false);
                dispatch(uiAction.onSnack({
                  body:res.data.message,
                  status:res.data.status,
                }))
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
            {isLoading ? <span className="loader"></span> : "اضافة"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddAdmin;
