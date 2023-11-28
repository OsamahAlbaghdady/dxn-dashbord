import Image from "../../UI/image-circle/image";
import arrow from "../../assets/icons/arrow2";
import price from "../../assets/icons/price";
import React, { useEffect } from "react";
import Loading from "../else/newloading";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uiAction } from "../../store/slices/ui";
import api from "../../helper/httpHelper";
function OfferList({get}) {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    api({
      url: "restaurant/offers/get",
    }).then((res) => {
      dispatch(uiAction.closeLoading());
      setData(res.data.data);
    });
  }, [get]);
  return (
    <div className="offer-list-con">
      <h1>التخفيضات الحالية</h1>
      <div className="offer-item-con">
        <ul style={{ position: "relative" }} className="offer-item-list">
          {data ? (
            data.length == 0 ? (
              <h2 style={{ width: "100%", textAlign: "center" }}>
                لا يوجد عروض
              </h2>
            ) : (
              data.map((element, i) => {
                return (
                  <li>
                    <div className="offer-meal-info">
                      <Image ZP={50} ZM={50} src={element.image} ZU={"px"} />
                      <span>
                        <h2>{element.name}</h2>
                        <p>{element.category_name}</p>
                      </span>
                    </div>
                    <div className="offer-price-info">
                      <h2>
                        {element.price}
                        {price}
                      </h2>
                      <a>
                        {arrow}
                        {arrow}
                      </a>
                      <h3>
                        {element.total_price_discount}
                        {price}
                      </h3>
                      <div className="new-offer-item-discount">
                        <h3> {element.discount} %</h3>{" "}
                      </div>
                    </div>
                    <div className="offer-action">
                      <button
                        onClick={() => {
                          if (isLoading==false) {
                            setisLoading(true);
                            api({
                              method: "post",
                              url: "restaurant/offers/delete",
                              data: {
                                food_id: element.id,
                              },
                            }).then((res) => {
                              setisLoading(false);
                              dispatch(
                                uiAction.onSnack({
                                  body: res.data.message,
                                  status: res.data.status,
                                })
                              );
                              if (res.data.status) {
                                const array = [];
                                data.map((e) => {
                                  if (e.id != element.id) {
                                    array.push(e);
                                  }
                                });
                                setData(array);
                              }
                            });
                          }
                        }}
                      >
                        {isLoading&&<Loading size={"25px"} color={"#006d77"} />}
                        حذف
                      </button>
                    </div>
                  </li>
                );
              })
            )
          ) : (
            <Loading size={"50px"} />
          )}
        </ul>
      </div>
    </div>
  );
}

export default OfferList;

// return (
//   <div className="offer-list-con">
//       <h1>التخفيضات الحالية</h1>
//     {data.map((e, i) => {
//       return (
//         <div className="offer-item-con">
//           <div className="offer-item-details">
//             <h2>{e.date}</h2>
//             <div className="offer-item-discount">
//               <h3>{e.discount}</h3> <span className="flex-c">%</span>
//             </div>
//             <h2>حذف</h2>
//           </div>
//           <ul className="offer-item-list">
//             {e.items.map((element, i) => {
//               return (
//                 <li>
//                   <div className="offer-meal-info">
//                     <Image ZP={50} ZM={50} ZU={"px"}/>
//                     <span>
//                       <h2>{element.name}</h2>
//                       <p>{element.category}</p>
//                     </span>
//                   </div>
//                   <div className="offer-price-info">
//                   <h2>{element.price}{price}</h2>
//                   <a>{arrow}{arrow}</a>
//                   <h3>{element.price-((e.discount/100)*element.price)} {price}</h3>
//                   </div>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       );
//     })}
//   </div>
// );
