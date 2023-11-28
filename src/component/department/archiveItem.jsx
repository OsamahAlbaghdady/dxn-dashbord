import React from 'react'
import Img from "../../UI/image-circle/image"
import trash from '../../assets/icons/trash';
import edit from '../../assets/icons/edit';
import H from ".././../UI/text/text"
import blackMeel from '../../assets/icons/blackmeel';
import priority from '../../assets/icons/priority';
import { useDispatch } from 'react-redux';
import { uiAction } from '../../store/slices/ui';
import api from '../../helper/httpHelper';
import { departmentAction } from '../../store/slices/department';
import icons from '../../assets/icons/navIcons';
function ArchiveItem({data}) {
  const dispatch =useDispatch()
  return (
    <div className='department-archive-item-con new-department-archive-item-con'>
      <div className="department-archive-item-image-con">
        <button onClick={()=>{
          dispatch(uiAction.showAlert({
            body:"هل تريد حذف هذا القسم ",
            actionName:"حذف",
            action:()=>{
              api({
                method:"post",
                url:`category/delete/${data.id}`,
                isJSON:true
              }).then((res)=>{
                dispatch(uiAction.done())
                dispatch(uiAction.onSnack({
                  body:res.data.message
                  ,status:res.data.status
                }))
                res.data.status&&dispatch(departmentAction.remove(data.id))
                dispatch(uiAction.closeAlert())
              })
            },
          }))
        }} className='department-archive-item-trash new-department-archive-item-image-con flex-c'>{trash}</button>
        <button
        onClick={()=>{
          dispatch(departmentAction.edit({
            name:data.name,
            id:data.id,
            is:true
          }))
        }}
         style={{left:"unset",right:"10px"}} 
         className='department-archive-item-edit new-department-archive-item-image-con flex-c'>{edit}</button>
      </div>
      <span>
        <H t={4}>{data.name}</H>{icons.department(true)}
      </span>
      {/* <span>
        <H t={3}>{data.priority}</H>{priority(false)}
      </span> */}
    </div>
  )
}

export default ArchiveItem