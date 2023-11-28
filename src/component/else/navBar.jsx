import Image from "../../UI/image-circle/image";
import { closed, open } from "../../assets/icons/closed";
import logoIcon from "../../assets/icons/logo";
import icons from "../../assets/icons/navIcons";
import not from "../../assets/icons/not";
import React, { useEffect, useState } from "react";
import Logout from "./logout";
import { uiAction } from "../../store/slices/ui";
import { useDispatch } from "react-redux";
import useOrientationChange from "../../hooks/orientationchange";
import { useLocation, useNavigate } from "react-router-dom";

function NavBar({ ws }) {
  const { pathname } = useLocation();
  const nav = useNavigate()
  const {width} = useOrientationChange()
  const dispatch = useDispatch()
  const [showNot, setShowNot] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = React.useState(
    pathname === "/home"
      ? 0
      : pathname === "/department"
        ? 1
        : pathname === "/meals"
          ? 2
          : pathname === "/driver"
            ? 3
            : pathname === "/profile"
              ? 4
              : pathname === "/setting"
                ? 5
                : 0
  );
  useEffect(() => {
    setActive(pathname === "/home"
      ? 0
      : pathname === "/department"
        ? 1
        : pathname === "/meals"
          ? 2
          : pathname === "/driver"
            ? 3
            : pathname === "/profile"
              ? 4
              : pathname === "/setting"
                ? 5
                : 0)
  }, [pathname]);

  return (
    <>
      <Logout show={active == 6} off={() => setActive(0)} />
      <div className="notification-con">
        <button onClick={() => setShowNot((e) => !e)}>{not}</button>
        <ul
          style={{
            left:showNot ? "0px" : "-500px",
            opacity: showNot ? "1" : "0",
          }}
        >
          <li>
            <h2>Alina god</h2>
            <div>
              <span>
                <h3>alina baker</h3>
                <p>17 Nov, 01:30 PM</p>
              </span>
              <Image ZP={50} ZM={50} ZU={"px"} />
            </div>
          </li>
        </ul>
      </div>
      <div className="nav-main-con">
        <span
          onClick={() => {
            ws.send(JSON.stringify({ type: "55" }));
          }}
        >
          {logoIcon}
        </span>
        <ul>
          <a
            style={{ backgroundColor: active === 0 ? "white" : "transparent" }}
            onClick={() =>{
              dispatch(uiAction.startLoading());
              setTimeout(() => {
                nav("/home")
              }, 400);
               setActive(0)
              }}
          >
            {icons.home(active === 0)}
          </a>
          <a
            style={{ backgroundColor: active === 1 ? "white" : "transparent" }}
            onClick={() =>{
              dispatch(uiAction.startLoading());
              setTimeout(() => {
                nav("/department")
              }, 400);
               setActive(1)
              }}
            
          >
            {icons.department(active === 1)}
          </a>
          <a
            style={{ backgroundColor: active === 2 ? "white" : "transparent" }}
            onClick={() =>{
              dispatch(uiAction.startLoading());
              setTimeout(() => {
                nav("/meals")
              }, 400);
               setActive(2)
              }}
            
          >
            {icons.meeles(active === 2)}
          </a>
          <a
            style={{ backgroundColor: active === 3 ? "white" : "transparent" }}
            onClick={() =>{
              dispatch(uiAction.startLoading());
              setTimeout(() => {
                nav("/driver")
              }, 400);
               setActive(3)
              }}
            
          >
            {icons.driver(active === 3)}
          </a>
          <a
            style={{ backgroundColor: active === 4 ? "white" : "transparent" }}
            onClick={() =>{
              dispatch(uiAction.startLoading());
              setTimeout(() => {
                nav("/profile")
              }, 400);
               setActive(4)
              }}
            
          >
            {icons.profile(active === 4)}
          </a>
          <a
            style={{ backgroundColor: active === 5 ? "white" : "transparent" }}
            onClick={() =>{
              dispatch(uiAction.startLoading());
              setTimeout(() => {
                nav("/setting")
              }, 400);
               setActive(5)
              }}
            
          >
            {icons.sitting(active === 5)}
          </a>
          <a
            style={{ backgroundColor: active === 6 ? "white" : "transparent" }}
            onClick={() => setActive(6)}
          >
            {icons.logout(active === 6)}
          </a>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
