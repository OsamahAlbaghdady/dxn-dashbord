import React from "react";
import Img from "../../UI/image-circle/image";
import trash from "../../assets/icons/trash";
import edit from "../../assets/icons/edit";
import H from "../../UI/text/text";
import patient from "../../assets/icons/patient";
import phone from "../../assets/icons/phone";
import email from "../../assets/icons/email";
import department from "../../assets/icons/department";
import { useDispatch } from "react-redux";
import { adminAction } from "../../store/slices/admin";
import { uiAction } from "../../store/slices/ui";
import api from "../../helper/httpHelper";
function 
AdminItem({ data }) {
  const dispatch = useDispatch();
  return (
    <div className="department-archive-item-con">
      <div className="department-archive-item-image-con">
        <button
        onClick={() =>{
          dispatch(uiAction.showAlert({
            body:"هل تريد حذف هذا الادمن ؟",
            actionName:"حذف",
            action:()=>{
              api({
                method:'post',
                url:"restuarants/delete-manager",
                data:{id:data.id}
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
        <Img
          ZP={90}
          ZM={90}
          ZU={"px"}
          style={{ border: "2px solid #006d77" }}
          src={data.image}
        />
        <button
          onClick={() => {
            dispatch(adminAction.editAdmin({ ...data,type:data.account_type}));
          }}
          className="department-archive-item-edit flex-c"
        >
          {edit}
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
        <h2>{data.email}</h2>
        {email}
      </div>
      <div className="admin-info">
        <h2>{data.specialty}</h2>
        {department}
      </div> */}
    </div>
  );
}

export default AdminItem;
