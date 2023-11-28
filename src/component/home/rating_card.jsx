import React from "react";
import H from "../../UI/text/text";
import star from "../../assets/icons/star";
import Stars from "../else/stars";
import { useSelector } from "react-redux";
function Rating_card() {
  const { rate, totalRatting,average, star1, star2, star3, star4, star5 } = useSelector(
    (state) => state.home.data.stats.rate
  );
  return (
    <div className="rating-card-con">
      <H id={"rating-card-title"} t={2}>
        {rate} {star(true)}
      </H>
      <H t={7}>اعتمادا على {totalRatting} تقييم</H>
      <div className="rating-info-con">
        <div className="flex-e" style={{ width: "20%" }}>
          <Stars rat={1} width={"20%"} />
        </div>
        <div className="rating-info-progress-bar">
          <span
            style={{ width: `${(star1 / average) * 100}%` }}
          ></span>
        </div>
        <H t={7}>{star1}</H>
      </div>
      <div className="rating-info-con">
        <div className="flex-e" style={{ width: "20%" }}>
          <Stars rat={2} width={"40%"} />
        </div>
        <div className="rating-info-progress-bar">
          <span
            style={{ width: `${(star2 / average) * 100}%` }}
          ></span>
        </div>
        <H t={7}>{star2}</H>
      </div>
      <div className="rating-info-con">
        <div className="flex-e" style={{ width: "20%" }}>
          <Stars rat={3} width={"60%"} />
        </div>
        <div className="rating-info-progress-bar">
          <span
            style={{ width: `${(star3 / average) * 100}%` }}
          ></span>
        </div>
        <H t={7}>{star3}</H>
      </div>
      <div className="rating-info-con">
        <div className="flex-e" style={{ width: "20%" }}>
          <Stars rat={4} width={"80%"} />
        </div>
        <div className="rating-info-progress-bar">
          <span
            style={{ width: `${(star4 / average) * 100}%` }}
          ></span>
        </div>
        <H t={7}>{star4}</H>
      </div>
      <div className="rating-info-con">
        <div className="flex-e" style={{ width: "20%" }}>
          <Stars rat={5} width={"100%"} />
        </div>

        <div className="rating-info-progress-bar">
          <span
            style={{ width: `${(star5 / average) * 100}%` }}
          ></span>
        </div>
        <H t={7}>{star5}</H>
      </div>
    </div>
  );
}

export default Rating_card;
