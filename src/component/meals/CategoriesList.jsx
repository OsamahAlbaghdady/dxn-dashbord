import Image from "../../UI/image-circle/image";
import React, { useState } from "react";
import Stars from "../else/stars";
import time from "../../assets/icons/time";
import priceRed from "../../assets/icons/priceRed";
import Scroll from "../../UI/scrol/scrol";
import { useEffect } from "react";
import api from "../../helper/httpHelper";
import { useDispatch, useSelector } from "react-redux";
import { mealsAction } from "../../store/slices/meals";
import trash from "../../assets/icons/trash";
import edit from "../../assets/icons/edit";
import { uiAction } from "../../store/slices/ui";

function CategoriesList() {
  const data = useSelector((state) => state.meals.data.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    api({ url: "restuarants/get-foods" }).then((res) => {
      console.log(res.data.data.foods);
      dispatch(mealsAction.newCategories(res.data.data.foods));
    });
  }, []);
  return data.length!=0 ? (
    data.map((element, i) => {
      return (

          <div className="Categories-con">
            <h1>{element.categories.name}</h1>
            <div className="Categories-list-con">
              {element.food.length==0? <h2 style={{width:"100%",textAlign:"center"}}>لا يوجد اكلات</h2>:<Scroll>
                {element.food.map((e, i) => {
                  return (
                    <div
                      key={i}
                      style={{ userSelect: "none" }}
                      className="Categories-item-con"
                    >
                      <div className="Categories-item-info1">
                        {/* <h2>
                          {time}
                          {e.max_time + "-" + e.min_time}
                        </h2> */}
                        <h2>
                          {priceRed}
                          {e.price}
                        </h2>
                      </div>
                      <div className="Categories-item-info2">
                        <h2>{e.name}</h2>
                        <p>{e.desc}</p>
                      </div>
                      <div className="Categories-action">
                        <button
                          onClick={() => {
                            dispatch(
                              uiAction.showAlert({
                                body: "هل تريد حذف هذا الوجبه",
                                actionName: "حذف",
                                action: () => {
                                  api({
                                    method: "post",
                                    url: "restuarants/delete-foods",
                                    data:{
                                      food_id:e.id
                                    }
                                  }).then((res) => {
                                    dispatch(uiAction.done())
                                    dispatch(
                                      uiAction.onSnack({
                                        status: res.data.status,
                                        body: res.data.message,
                                      })
                                    );
                                    if (res.data.status) {
                                      dispatch(
                                        mealsAction.remove({
                                          id: element.categories.id,
                                          mealId: e.id,
                                        })
                                      );
                                      dispatch(uiAction.closeAlert())
                                    }
                                  });
                                },
                              })
                            );
                          }}
                        >
                          {trash}
                        </button>
                        <button
                          onClick={() =>
                            dispatch(
                              mealsAction.showMeal({
                                ...e,
                                category: element.categories.name,
                                category_id: element.id,
                                food_id: e.id,
                              })
                            )
                          }
                        >
                          {edit}
                        </button>
                        {/* <button>{disable}</button> */}
                      </div>
                      <Image
                        ZP={window.innerWidth < 600 ? 90 : 110}
                        ZM={window.innerWidth < 600 ? 90 : 110}
                        idC={"Categories-item-image"}
                        ZU={"px"}
                        src={e.image}
                      />
                    </div>
                  );
                })}
              </Scroll>}
            </div>
          </div>

      );
    })
  ) : (
    <h2>لا يوجد اكلات</h2>
  );
}

export default CategoriesList;
