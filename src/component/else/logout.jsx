import React from "react";
import img from "../../assets/gif/logout.gif";
function Logout({ show ,off }) {
  return (
    <>
      <div onClick={()=>off()} style={{left:show?"0vw":"100vw"}} className="alert"></div>
      <div style={{left:show?"0vw":"100vw"}} className="logout-con">
        <div className="logout">
          <h2>تأكيد تسجيل الخروج</h2>
          <img src={img} />
          <div>
            <button onClick={()=>off()}>الغاء</button>
            <button onClick={()=>{
              localStorage.clear()
              window.location.reload()
            }}> تسجيل الخروج</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logout;
