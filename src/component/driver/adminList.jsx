import React, { useEffect } from "react";
import H from "../../UI/text/text";
import AdminItem from "./adminItem";
import { useDispatch, useSelector } from "react-redux";
import api from "../../helper/httpHelper";
import { uiAction } from "../../store/slices/ui";
import { driverAction } from "../../store/slices/driver";
function AdminList() {
  const data = useSelector((state) => state.admin.data.admins);
  const dispatch = useDispatch();
  useEffect(() => {
    api({
      url: "user/drivers",
    }).then((res) => {
      console.log(res.data.data);
      dispatch(driverAction.setDrivers(res.data.data));
      dispatch(uiAction.closeLoading());
    });
  }, []);
  return (
    <div className="order-archive-list-con">
      <H id="order-archive-list-conH1" t={1}>
        السواق
      </H>
      <br />
      <div className="archive-scroll">
        <div className="ArchiveList-department">
          {data ? (
            data.map((e) => {
              return <AdminItem data={e} />;
            })
          ) : (
            <H t={1}>لا يوجد سواق </H>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminList;
