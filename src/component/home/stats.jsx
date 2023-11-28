import React, { useEffect, useState } from "react";
import Rating_card from "./rating_card";
import Single_info_card from "./single-info-card";
import api from "../../helper/httpHelper";
import { useDispatch, useSelector } from "react-redux";
import { homeAction } from "../../store/slices/home";

function Stats() {
  const { totalOrder, PerDayOrder, costmary, inCame } = useSelector(
    (state) => state.home.data.stats
  );
  const dispatch = useDispatch();
  useEffect(() => {
    api({
      method: "get",
      url: "restuarants/analysts",
    }).then((res) => {

      if (res.data.status) {;
        dispatch(
          homeAction.newStatus(res.data.data)
        );
      }
    });
  }, []);
  return (
    <div className="stats-main-con">
      <Rating_card />
      <div className="stats-col-con">
        <Single_info_card title={".عدد الطلبات الكلي"} number={totalOrder} />
        <Single_info_card
          upper={inCame.isUp}
          title={".نسبة الأرباح الشهرية"}
          number={inCame.num}
        />
      </div>
      <div className="stats-col-con">
        <Single_info_card title={".عدد طلبات اليوم"} number={PerDayOrder} />
        <Single_info_card
          upper={costmary.isUp}
          title={".نسبة زيادة الزبائن"}
          number={costmary.num}
        />
      </div>
    </div>
  );
}

export default Stats;
