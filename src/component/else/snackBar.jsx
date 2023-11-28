import { uiAction } from '../../store/slices/ui'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function SnackBar() {
  const {show,status,body} =useSelector(state=>state.ui.data.snackBar)
  const dispatch= useDispatch()
  useEffect(()=>{
    show==true&&setTimeout(() => {
    dispatch(uiAction.close())  
    }, 2000);
  },[show])
  return (
    <div style={{
      left:show?"10px":"-550px",
      borderColor:status?"#559E8D":"#006d77",
      color:status?"#559E8D":"#006d77",
    }}  className="snackBar">
      <h2>{body}</h2>
    </div>
  )
}

export default SnackBar