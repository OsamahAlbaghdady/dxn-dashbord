import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wsAction } from "../../store/slices/ws";

function Notification({ ws }) {
  const dispatch = useDispatch()
  const errorNotify = (message) =>
    toast.error(message, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const defaultNotify = (message) => toast(message);

  useEffect(() => {
    if (ws) {
      dispatch(wsAction.setWs(ws))
      ws.addEventListener("message", (event) => {
        console.log(JSON.parse(event.data));
        const data = JSON.parse(event.data);
        if (data.state!=0) {
         defaultNotify(data.message) 
        }
        
        // switch (data.state) {
        //   case 10:
        //     defaultNotify(data.message + " " + data.to_address);
        //     break;
        //   case 12:
        //     errorNotify(data.message);
        //     break;
        //   default:
        //     console.log("");
        // }
      });
    }
  }, [ws]);

  return (
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{zIndex:99999}}
      />

  );
}

export default Notification;
