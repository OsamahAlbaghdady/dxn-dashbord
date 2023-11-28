import React, { useEffect } from "react";

const Scroll = ({ children }) => {
  const elementID = `Scroll-Scroll-container-712483-6789120${Math.random(0,100)}`
  const containerID = `container-712483-6789120${Math.random(0,100)}`
  var isClicked = false;
  var xStartAt = 0;
  var last = 0;
  var lastMove = 0;
  useEffect(()=>{
    window.addEventListener("resize",()=>{
    const element = document.getElementById(containerID);
    if (element) {
      element.style.transform = `translateX(0px)`;
      isClicked = false;
      xStartAt = 0;
      last = 0;
      lastMove = 0;
    }
    })
  },[])
  function start(event,isTouch) {
    isClicked = true;
    if (isTouch) {
      xStartAt = event.touches[0].clientX + 10;
    }else{
      xStartAt = event.clientX + 10 
    }
  }
  function move(event,isTouch) {
    const container = document.getElementById(containerID);
    const element = document.getElementById(elementID);
    if (isTouch) {
      var move = xStartAt-event.touches[0].clientX;
    }else{
      var move = xStartAt-event.clientX;
    }
    var EWidth = element.clientWidth;
    var SEWidth = element.clientWidth / children.length;
    var CWidth = container.clientWidth;
    if (isClicked) {
      if (-(move + last) > - EWidth + CWidth&& -(move + last) < 0) {
        lastMove = move + last;
        element.style.transform = `translateX(${-(move + last)}px)`;
      }
    }
  }
  function end(event) {
    last = lastMove;
    isClicked = false;
  }
  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        transition:"ease-in-out"
      }}
      id={containerID}
    >
      <div
        onMouseDown={(event)=>start(event,false)}
        onMouseUp={end}
        onMouseLeave={end}
        onMouseMove={(event)=>move(event,false)}
        onTouchStart={(event)=>start(event,true)}
        onTouchMove={(event)=>move(event,true)}
        onTouchEnd={end}
        id={elementID}
        style={{
          width: "fit-content",
          height: "fit-content",
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Scroll;
