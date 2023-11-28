import React, { useEffect } from "react";
import H from "../../UI/text/text";
import AdminItem from "./adminItem";
import { useDispatch, useSelector } from "react-redux";
import api from "../../helper/httpHelper";
import { adminAction } from "../../store/slices/admin";
import { uiAction } from "../../store/slices/ui";
function AdminList() {
  const data = useSelector((state) => state.admin.data.admins);
  const dispatch = useDispatch();
  useEffect(() => {
    api({
      url: "user/admins",
    }).then((res) => {
      dispatch(adminAction.setAdmins(res.data.data));
    });
    setTimeout(() => {
      dispatch(uiAction.closeLoading());
    }, 200);
  }, []);
  return (
    <div className="order-archive-list-con">
      <H id="order-archive-list-conH1" t={1}>
        الادمنية
      </H>
      <br />
      <div className="archive-scroll">
        <div className="ArchiveList-department">
          {data ? (
            data.map((e) => {
              return <AdminItem data={e} />;
            })
          ) : (
            <H t={1}>لا يوجد الادمنية </H>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminList;
