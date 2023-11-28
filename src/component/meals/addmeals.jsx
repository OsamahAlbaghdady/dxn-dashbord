import Scroll from "../../UI/scrol/scrol";
import arrow from "../../assets/icons/arrow";
import imageIcon from "../../assets/icons/imageIcon";
import icons from "../../assets/icons/navIcons";
import time from "../../assets/icons/time";
import trash from "../../assets/icons/trash";
import api from "../../helper/httpHelper";
import { mealsAction } from "../../store/slices/meals";
import { uiAction } from "../../store/slices/ui";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../else/newloading";

function AddMeals() {
  const [file, setFile] = useState(null);
  const [showList, setShowList] = useState(0);
  const [loading, setLoading] = useState(false);
  const { showAlert, meal, showMeal } = useSelector(
    (state) => state.meals.data
  );
  const [selectedCat, setSelectedCat] = useState(false);
  const [selected, setSelected] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);
  const [suportedCty, setsuportedCty] = useState([]);
  const [cty, setcty] = useState([
    {
      name: "عراق",
      id: 1,
    },
    {
      name: "كويت",
      id: 11,
    },
    {
      name: "مصر",
      id: 111,
    },
    {
      name: "اردن",
      id: 122,
    },
  ]);

  useEffect(() => {
    api({
      url: "category",
    }).then((res) => {
      setCategoriesList(res.data.data);
      dispatch(uiAction.closeLoading());
    });
  }, []);
  const dispatch = useDispatch();
  return (
    <>
      <div
        style={{ left: showAlert ? "0" : "-110vw" }}
        className="add-meals-main"
      >
        <div
          onClick={() => dispatch(mealsAction.show())}
          style={{ top: showAlert ? "0" : "-200vh" }}
          className="alert"
        ></div>
        <div className="add-meals-main-con">
          <div className="add-meals-con2">
            <a className="add-meals-icon flex-c">{icons.meeles(true)}</a>
            <input
              onChange={(event) => {
                dispatch(
                  mealsAction.set({ key: "price", value: event.target.value })
                );
              }}
              value={meal.price}
              type="text"
              placeholder="...البراند"
            />
            <input
              onChange={(event) => {
                dispatch(
                  mealsAction.set({ key: "name", value: event.target.value })
                );
              }}
              value={meal.name}
              type="text"
              placeholder="...الاسم"
            />
          </div>
          <div className="add-meals-con3">
            <a
              onClick={() => setShowList((e) => (e == 1 ? 0 : 1))}
              className="add-meals-icon flex-c"
            >
              <li style={{ rotate: showList == 1 ? "0deg" : "90deg" }}></li>
              <span></span>
            </a>
            <div
              onClick={() => setShowList((e) => (e == 1 ? 0 : 1))}
              className="add-meals-drop-list-con"
            >
              <ul
                style={{
                  height: showList == 1 ? "200px" : "0px",
                  top: showList == 1 ? "110%" : "0%",
                  opacity: showList == 1 ? "1" : "0",
                }}
                className="add-meals-drop-list"
              >
                {categoriesList.map((e, i) => {
                  return (
                    <li onClick={() => setSelectedCat(e)} key={i}>
                      {e.name}
                    </li>
                  );
                })}
              </ul>
              <h2>{selectedCat ? selectedCat?.name : "...القسم"}</h2>
              <a
                className="flex-c"
                style={{ rotate: showList == 1 ? "180deg" : "0deg" }}
              >
                {arrow}
              </a>
            </div>
          </div>
          <div className="add-meals-con3">
            <a
              onClick={() => setShowList((e) => (e == 2 ? 0 : 2))}
              className="add-meals-icon flex-c"
            >
              <li style={{ rotate: showList == 2 ? "0deg" : "90deg" }}></li>
              <span></span>
            </a>
            <div
              onClick={() => setShowList((e) => (e == 2 ? 0 : 2))}
              className="add-meals-drop-list-con"
            >
              <ul
                style={{
                  height: showList == 2 ? "200px" : "0px",
                  top: showList == 2 ? "110%" : "0%",
                  opacity: showList == 2 ? "1" : "0",
                }}
                className="add-meals-drop-list"
              >
                {cty.map((e, i) => {
                  return (
                    <li
                      onClick={() => {
                        console.log(suportedCty.some((k) => k.id == e.id));
                        if (suportedCty.some((k) => k.id == e.id)) {
                          var array = [];
                          suportedCty.map((ele) => {
                            if (ele.id != e.id) {
                              array.push(ele);
                            }
                          });
                          setsuportedCty(array);
                        } else {
                          setsuportedCty((list) => [
                            ...list,
                            { ...e, price: "" },
                          ]);
                        }
                      }}
                      key={i}
                    >
                      {e.name}
                    </li>
                  );
                })}
              </ul>
              <h2>{"...المدن"}</h2>
              <a
                className="flex-c"
                style={{ rotate: showList == 2 ? "180deg" : "0deg" }}
              >
                {arrow}
              </a>
            </div>
          </div>
          <div className="add-meals-pric-con">
            <h2>الاسعار</h2>
            {suportedCty.length != 0 ? (
              <Scroll>
                {suportedCty.map((e) => {
                  return (
                    <>
                      <div style={{ width: "10px" }}></div>
                      <span>
                        <button
                          onClick={() => {
                            var array = [];
                            suportedCty.map((ele) => {
                              if (ele.id != e.id) {
                                array.push(ele);
                              }
                            });
                            setsuportedCty(array);
                          }}
                        >
                          {trash}
                        </button>
                        <input
                          onChange={(event) => {
                            var array = [];
                            suportedCty.map((ele) => {
                              if (ele.id == e.id) {
                                array.push({...ele,price:event.target.value});
                              }else{
                                array.push(ele)
                              }
                            });
                            setsuportedCty(array);

                          }}
                          type="text"
                          placeholder="السعر"
                        />
                        <h2>:{e.name}</h2>
                      </span>
                      <div style={{ width: "10px" }}></div>
                    </>
                  );
                })}
              </Scroll>
            ) : (
              <h2 style={{ textAlign: "center" }}>
                لا توجد مناطق للتسعير يرجى تحديد المناطق{" "}
              </h2>
            )}
          </div>
          <div className="add-meals-con4">
            <div className=" flex-c">
              {imageIcon}
              <input
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                accept="image/*"
              />
              {file ? (
                <img src={URL.createObjectURL(file)} alt="" />
              ) : (
                meal.image && <img src={meal.image} alt="" />
              )}
            </div>
            <textarea
              maxLength={60}
              onChange={(event) => {
                dispatch(
                  mealsAction.set({
                    key: "desc",
                    value: event.target.value,
                  })
                );
              }}
              value={meal.desc}
              placeholder="...وصف المنتج"
            ></textarea>
          </div>
          <div className="add-meals-action-con">
            <button
              onClick={() => dispatch(mealsAction.show())}
              className="add-meals-action1"
            >
              الغاء
            </button>
            <button
              onClick={() => {
                if (!loading) {
                  setLoading(true);
                  api({
                    method: "post",
                    url: showMeal
                      ? "restuarants/update-foods"
                      : `restuarants/add-food`,
                    data: {

                    },
                  }).then((res) => {
                  });
                }
              }}
              className="add-meals-action2 flex-c"
              style={{position:"relative"}}
            >
              {loading ? (
                <Loading size={"20px"}/>
              ) : showMeal ? (
                "تعديل"
              ) : (
                "حفظ"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMeals;
