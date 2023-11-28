import React, { useEffect, useState } from "react";
import ArchiveItem from "./archiveItem";
import H from "../../UI/text/text";
import api from "../../helper/httpHelper";
import { useDispatch, useSelector } from "react-redux";
import { departmentAction } from "../../store/slices/department";
function ArchiveList() {
  const data = useSelector(state=>state.department.data.departments)
  const dispatch = useDispatch()
  useEffect(()=>{
    api({
      url:"category"
    }).then((res)=>{
      dispatch(departmentAction.newDepartment(res.data.data))
      console.log(res.data);
    })
  },[])
  return (
    <div className="order-archive-list-con">
      <H id="order-archive-list-conH1" t={3}>
        الاقسام
      </H>
      <br />
      <div className="archive-scroll">
        <div className="ArchiveList-department">
          {data?data.map((e) => {
            return <ArchiveItem data={e} />;
          }):<H  t={3}>
          لا يوجد اقسام 
        </H>}
        </div>
      </div>
    </div>
  );
}

export default ArchiveList;
