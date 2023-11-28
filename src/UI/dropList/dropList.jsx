
import arrow from '../../assets/icons/arrow';
import React, { useState } from 'react'

function DropList({data,name,icon,select,selected,style}) {
    const [showList,setShowList] = useState(false)
  return (
    <div style={style} className="add-meals-con3">
    <a
      onClick={() => setShowList((e) => !e)}
      className="add-meals-icon flex-c"
    >
      <li style={{ rotate: showList ? "0deg" : "90deg" }}></li>
      <span style={{marginTop:"0",padding:"0",border:"0"}}></span>
    </a>
    <div
      onClick={() => setShowList((e) => !e)}
      className="add-meals-drop-list-con"
    >
      <ul
        style={{
          height: showList ? "220px" : "0px",
          top: showList ? "110%" : "0%",
          opacity: showList ? "1" : "0",
        }}
        className="add-meals-drop-list"
      >
        {data.map((e, i) => {
          return (
            <li
            style={{
                color:selected?.id===e.id?"#006d77":""
            }}
              onClick={() => {
                select(e)
              }}
              key={i}
            >
              {e.name}
            </li>
          );
        })}
      </ul>
      {icon?icon:""}
      <h2>{name}</h2>
      
      <a
        className="flex-c"
        style={{ rotate: showList ? "180deg" : "0deg" }}
      >
        {arrow}
      </a>
    </div>
  </div>
  )
}

export default DropList