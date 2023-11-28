import React from "react";
import trash from "../../assets/icons/trash";
import edit from "../../assets/icons/edit";
import patient from "../../assets/icons/patient";
import phone from "../../assets/icons/phone";
import { useDispatch } from "react-redux";
import { adminAction } from "../../store/slices/admin";
import { uiAction } from "../../store/slices/ui";
import api from "../../helper/httpHelper";
function 
AdminItem({ data }) {
  const dispatch = useDispatch();
  return (
    <div style={{marginTop:"10px"}} className="department-archive-item-con">
      <div style={{top:"3px"}} className="department-archive-item-image-con">
        <button
        onClick={() =>{
          dispatch(uiAction.showAlert({
            body:"هل تريد حذف هذا الادمن ؟",
            actionName:"حذف",
            action:()=>{
              api({
                method:'post',
                url:`user/delete/${data.id}`,
              }).then((res)=>{
                dispatch(uiAction.done());
                dispatch(uiAction.onSnack({
                  body:res.data.message,
                  status:res.data.status,
                }))
                if (res.data.status) {
                  dispatch(adminAction.remove(data.id))
                  dispatch(uiAction.closeAlert())
                }
              })
            }
          }))
        }}
         className="department-archive-item-trash flex-c">
          {trash}
        </button>

      </div>
      <div className="admin-info">
        <h2>{data.name}</h2>
        {patient}
      </div>
      <div className="admin-info">
        <h2>{data.phone}</h2>
        {phone}
      </div>

      {/* <div className="admin-info">
        <h2>{data.specialty}</h2>
        {department}
      </div> */}
    </div>
  );
}

export default AdminItem;
