import Scroll from "../../UI/scrol/scrol";
import icons from "../../assets/icons/navIcons";
import search from "../../assets/icons/search";
import trueIcon from "../../assets/icons/true";
import api from "../../helper/httpHelper";
import React, { useState } from "react";
import Loading from "../else/newloading";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uiAction } from "../../store/slices/ui";

function AddOffer({get}) {
  const [type, setType] = useState(1);
  const [selectedId, setSelectedId] = useState([]);
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [search, setsearch] = useState("");
  const dispatch = useDispatch();
  const [deal, setdeal] = useState(0);
  useEffect(() => {
    setData(null);
    api({
      url: `restaurant/get-food-searched?search=${search}`,
    }).then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  }, [search]);
  return (
    <div className="add-offer-main-con">
      <h1>إضافة تخفيض</h1>
      <div className="add-offer-form">
        <div className="add-offer-form1">
          <a className="flex-c">{icons.copons(true)}</a>
          <div className="add-offer-present">
            <input
              value={deal}
              onChange={(e) =>
                100 > e.target.value &&
                e.target.value > 0 &&
                setdeal(e.target.value)
              }
              type="number"
              maxLength={"2"}
            />
            <h2>%</h2>
          </div>
          <div  className="add-offer-type">
            <h2>خصم عام</h2>
            <button style={{zIndex:90}} onClick={() => setType(1)}>{type === 1 && trueIcon}</button>
          </div>
          <div className="add-offer-type">
            <h2>خصم محدود</h2>
            <button style={{zIndex:90}} onClick={() => setType(2)}>{type === 2 && trueIcon}</button>
          </div>
        </div>
        <div
          style={{
            height: type == 1 ? "0px" : "150px",
            overflow: type != 1 ? "" : "hidden",
            transition: ".3s",
          }}
          className="add-offer-form2"
        >
          <div className="add-offer-search-con">
            <button onClick={() => setShow((e) => !e)}>
              <span></span>
              <a
                style={{
                  rotate: show ? "0deg" : "90deg",
                }}
              ></a>
            </button>
            <div>
              <input
                type="text"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
                onFocus={() => setShow(true)}
                onBlur={() => setShow(false)}
                placeholder="...الاسم"
              />
            </div>
            <ul
              style={{
                height: show ? "400px" : "0",
                opacity: show ? "1" : "0",
                top: show ? "120%" : "0",
              }}
            >
              {data ? (
                data?.map((e, i) => {
                  return (
                    <li
                      onClick={() => {
                        if (selectedId.includes(e.id) === true) {
                          setSelectedId((old) =>
                            old.filter((kk) => kk != e.id)
                          );
                        } else {
                          setSelectedId((old) => {
                            return [...old, e.id];
                          });
                        }  
                      }}
                    >
                      <h2>{e.name}</h2>
                      <button>
                        {selectedId.includes(e.id) === true ? trueIcon : ""}
                      </button>
                    </li>
                  );
                })
              ) : (
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "90%",
                    border: "0",
                  }}
                >
                  <Loading />
                </div>
              )}
            </ul>
          </div>
          <ul className="add-offer-item-list">
            <Scroll>
              {selectedId.map((e, i) => {
                return (
                  <li key={i}>
                    <h2>{data.find((item) => item.id === e).name}</h2>
                    <button
                      onClick={() => {
                        setSelectedId((old) => old.filter((kk) => kk != e));
                      }}
                      className="flex-c"
                    >
                      {trueIcon}
                    </button>
                  </li>
                );
              })}
            </Scroll>
          </ul>
        </div>
        <button
          onClick={() => {
            if (isLoading==false) {
              setisLoading(true)
              api({
                method: "post",
                url: "restaurant/offers/add",
                data: {
                  food_ids: selectedId,
                  type: type == 1 ? 2 : 1,
                  deal: deal,
                },
              }).then((res) => {
                setisLoading(false)
                dispatch(
                  uiAction.onSnack({
                    body: res.data.message,
                    status: res.data.status,
                  })
                );
                if (res.data.status) {
                  get(e=>e+1)
                  setSelectedId([])
                  setType(1)
                  setsearch("")
                  setdeal(0)
                }
              });
            }
          }}
          style={{ position: "relative" }}
          className="add-offer-action flex-c"
        >
          {isLoading && <Loading size={"25px"} color={"#006d77"} />}
          اضافة
        </button>
      </div>
    </div>
  );
}

export default AddOffer;
