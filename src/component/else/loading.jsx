import fullLogo from "../../assets/icons/fullLogog";
import { uiAction } from "../../store/slices/ui";  
import React from "react"; 
import { useDispatch, useSelector } from "react-redux"; 
 
function Loading() { 
  const { loading } = useSelector((state) => state.ui.data); 
  return ( 
    <div 
      style={{ 
        backgroundColor:"white", 
        left:loading?"0vw":"-100vw" 
      }} 
      className="loading flex-c" 
    > 
      {fullLogo} 
 
    </div> 
  ); 
} 
 
export default Loading;