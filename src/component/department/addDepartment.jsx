import React, { useEffect, useState } from "react";
import img from "../../assets/gif/department.png";
import icons from "../../assets/icons/navIcons";
import H from "../../UI/text/text";
import DropList from "../../UI/dropList/dropList";
import priorityIcon from "../../assets/icons/priority";
import { useDispatch, useSelector } from "react-redux";
import { departmentAction } from "../../store/slices/department";
import api from "../../helper/httpHelper";
import { uiAction } from "../../store/slices/ui";
import Loading from "../else/newloading";
function AddDepartment() {
  const [departmentList, setDepartmentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  function getIdByName(nameToFind) {
    if (departmentList) {
      for (const obj of departmentList) {
        if (obj.name === nameToFind) {
          return obj.id; // Return the ID when a match is found
        }
      }
    }
    return null; // Return null if the name is not found in the array
  }
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const { department, isEdit } = useSelector((state) => state.department.data);
  const isValid = getIdByName(department.name) && department.priority != 0;
  useEffect(() => {
    console.log(department.name);
    setName(department.name);
  }, [isEdit]);
  return (
    <div className="AddDepartment-con">
      <h1>اضافة قسم</h1>
      <div className="AddDepartment-input-con">
        <span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="الاسم"
          />
          {icons.department(true)}
        </span>
      </div>
      {/* <img className="AddDepartment-img" src={img} alt="" /> */}
      <button
        style={{
          backgroundColor: isValid && "#006d77",
          marginTop: "10px",
          color: isValid && "white",
          position: "relative",
          overflow: "hidden",
        }}
        className="flex-c"
        onClick={() => {
          if (!isLoading) {
            setIsLoading(true);
            api({
              method: "post",
              url: isEdit
                ? `category/update/${department.id}`
                : "category/store",
              isJSON: true,
              data: {
                // categories_id: 8,
                // priority: department.priority,
                name: name,
              },
            }).then((res) => {
              setIsLoading(false);
              dispatch(
                uiAction.onSnack({
                  body: res.data.message,
                  status: res.data.status,
                })
              );
              if (isEdit) {
                res.data.status &&
                  dispatch(departmentAction.remove(department.id));
              }
              res.data.status && dispatch(departmentAction.add(res.data.data));
            });
          }
        }}
      >
        <H t={5}>اضافة</H>

        {isLoading && <Loading size={"28px"} color={"#006d77"} />}
      </button>
      {isEdit && (
        <button
          style={{
            backgroundColor: isValid && "#006d77",
            marginTop: "10px",
            color: isValid && "white",
            position: "relative",
            overflow: "hidden",
          }}
          className="flex-c"
          onClick={() => {
            dispatch(
              departmentAction.edit({
                is: false,
                name: "",
                id: 0,
              })
            );
          }}
        >
          <H t={5}>الغاء</H>
        </button>
      )}
    </div>
  );
}

export default AddDepartment;
