import logoIcon from "../assets/icons/logo";
import React, { useState } from "react";
import api from "../helper/httpHelper";
import { useEffect } from "react";
import { uiAction } from "../store/slices/ui";
import { useDispatch } from "react-redux";
import Loading from "../component/else/newloading";
function Login() {
  const [isLoading, setIsloading] = useState(false);
  const [Form, setForm] = React.useState({
    phone: "",
    password: "",
  });
  const dispatch = useDispatch();
  React.useEffect(() => {
    setTimeout(() => {
      dispatch(uiAction.closeLoading());
    }, 400);
  }, []);
  function handelLogin(event) {
    event.preventDefault();
    if (isLoading == false) {
      setIsloading(true);
      if ((Form.password.length > 1, Form.phone.length > 1)) {
        api({
          method: "post",
          data:Form,
          url: "auth/login",
          isJSON:true
        }).then((res) => {
          setIsloading(false)
          console.log(res.data.data);
          dispatch(
            uiAction.onSnack({
              body: res.data.message,
              status: res.data.status,
            })
          );
          if (res.data.status) {
            localStorage.setItem(
              "onLine",
              true
            );
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.data));
            window.location.pathname="/home"
          }
        });
      } else {
        setIsloading(false)
        dispatch(
          uiAction.onSnack({
            body:
              Form.password.length > 1
                ? "رمز الدخول مطلوب"
                : "البريد الالكتروني مطلوب",
            status: false,
          })
        );
      }
    }
  }
  return (
    <div className="flex-c main">
      <form onSubmit={handelLogin} className="login-con">
        {logoIcon}
        <span>
          <h1>phone number:</h1>
          <input
            type="text"
            placeholder="enter phone number hear"
            onChange={(e) =>
              setForm((old) => {
                return {
                  ...old,
                  phone: e.target.value,
                };
              })
            }
          />
        </span>
        <span>
          <h1>Password:</h1>
          <input
            type="password"
            placeholder="********"
            onChange={(e) =>
              setForm((old) => {
                return {
                  ...old,
                  password: e.target.value,
                };
              })
            }
          />
        </span>
        <button type={"submit"}>
          {isLoading && <Loading size={"30px"} />}
          login
        </button>
      </form>
    </div>
  );
}

export default Login;
