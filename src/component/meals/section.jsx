import React, { useEffect, useState } from "react";
import "./section.css";
import api from "../../helper/httpHelper"
import SectionsList from "./sectionsList";
import SectionItem from "./sectionItem";
import { useDispatch, useSelector } from "react-redux";
import arrow from "../../assets/image/arrow";
import { uiAction } from "../../store/slices/ui";
const Section = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cateory, setcateory] = useState([]);
  const [pagenum, setPagenum] = useState(1);
  const [value, setvalue] = useState("");
  const [selectedSection,setselectedSection] = useState(0)
  const [maxPageNum, setmaxPageNum] = useState(5);
  const dispatch = useDispatch()
  useEffect(() => {
    setIsLoading(true);
    api({
      url: `products?categoryId=${selectedSection}&page=${pagenum}`,
    }).then((res) => {
      console.log(res.data);
      setcateory(res.data.data.products)
      setmaxPageNum(res.data.data.totalPages)
      dispatch(uiAction.closeLoading());
      setIsLoading(false);
    });
  }, [selectedSection, pagenum]);
  return (
    <div className="section-main-con">
      <SectionsList selectedSection={selectedSection} setselectedSection={(e)=>setselectedSection(e)} />
      <div className="section-item-con">
        {cateory?.map((e, i) => {
          return <SectionItem isLoading={isLoading} data={e} />;
        })}
      </div>
      <div className="pages-con">
        {pagenum < maxPageNum && (
          <button
            onClick={() => {
              setIsLoading(true);
              setPagenum((e) => e + 1);
            }}
          >
            التالي
          </button>
        )}
        <a style={{ transform: "rotateZ(180deg)" }}>{arrow}</a>
        <h1>{pagenum}</h1>
        <a className="">{arrow}</a>
        {pagenum > 1 && (
          <button
            onClick={() => {
              setIsLoading(true);
              setPagenum((e) => e - 1);
            }}
          >
            السابق
          </button>
        )}
      </div>
    </div>
  );
};

export default Section;
