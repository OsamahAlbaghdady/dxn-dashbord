import React from "react";
import img from "../../assets/image/alert.png";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../store/slices/ui";
import Loading from "./newloading";
function Alert() {
  const { show, body, action, actionName,isLoading } = useSelector(
    (state) => state.ui.data.alert
  );
  const dispatch = useDispatch()
  return (
    <>
      <div onClick={()=>dispatch(uiAction.closeAlert())} style={{ top: show ? "0vh" : "-150vh" }} className="alert"></div>
      <div style={{ top: show ? "0vh" : "-150vh" }} className="alert-main-con">
        <div className="alert-con">
          <img src={img.src} />
          <h1>{body}</h1>
          <div className="alert-con-action">
          <button
          className="alert-con-action-cancel"

              onClick={() => {
                dispatch(uiAction.closeAlert())
              }}
            >
              الغاء
            </button>
            <button
                      style={{position:"relative",overflow:"hidden"}}

              onClick={() => {
                if (!isLoading) {
                  dispatch(uiAction.done());
                  action();
                }
              }}
            >
              {actionName}
              {isLoading&&<Loading size={"28px"} color={"#006d77"}/>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Alert;
