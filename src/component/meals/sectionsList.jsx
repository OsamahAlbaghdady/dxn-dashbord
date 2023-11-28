import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeAction } from "../../store/slices/home";
import Scroll from "../../UI/scrol/scrol";
import "./section.css"
import { useState } from "react";
import { useEffect } from "react";
import api from "../../helper/httpHelper";
const SectionsList = ({selectedSection,setselectedSection}) => {
  const dispatch = useDispatch();
  // const { section, selectedSection } = useSelector((state) => state.home.data);
  const [cateoryList,setcateoryList] = useState([{id:0,name:"الكل"}]) 
  useEffect(()=>{
    api({
      url:"category"
    }).then(res=>{
      setcateoryList(e=>[...e,...res.data.data])
    })
  },[])
  return (
    <div className="sectionsList-main-con">
      <Scroll>
        {cateoryList.map((e, i) => {
          return (
            <>
            <div style={{width:"10px"}}></div>
              <button
                className=""
                onClick={() => {
                  setselectedSection(e.id)
                }}
                style={{ color: selectedSection == e.id ? "#edf6f9" : "#83c5be" }}
                key={i}
              >
                {e.name}
              </button>
            </>
          );
        })}
      </Scroll>
    </div>
  );
};

export default SectionsList;
