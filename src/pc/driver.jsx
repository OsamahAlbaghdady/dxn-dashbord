import AddAdmin from "../component/driver/addAdmin";
import AdminList from "../component/driver/adminList";

import React from "react";

function Dreiver() {
  return (
    <div className="main-department-con">
      <AdminList />
      <AddAdmin />
    </div>
  );
}

export default Dreiver;
