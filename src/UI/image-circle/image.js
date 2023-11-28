import useOrientationchange from "../../hooks/orientationchange";
import React from "react";
function Image(props) {
  const { ZP, ZM, src, style, idC, idM ,onClick,ZU,BR } = props;
  const isPC = !useOrientationchange()
  return (
    <div
      onClick={onClick}
      className="img-ui"
      id={idC}
      style={{ width: `${isPC?ZP:ZM}${ZU?ZU:"vw"}`, height: `${isPC?ZP:ZM}${ZU?ZU:"vw"}`,borderRadius:BR?BR:"" ,...style }}
    >
      <img
        id={idM}
        src={src}
        onLoad={(e) => {
          e.target.style.opacity = "1";
        }}
      />
      <span
        style={{
          height: `${isPC?ZP*2:ZM*2}${ZU?ZU:"vw"}`,
          width: `${isPC?ZP/5:ZM/5}${ZU?ZU:"vw"}`,
        }}
      ></span>
    </div>
  );
}

export default Image;
