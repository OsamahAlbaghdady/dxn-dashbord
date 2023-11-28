import AddDepartment from '../component/department/addDepartment'
import ArchiveList from '../component/department/archiveList'
import { uiAction } from '../store/slices/ui'
import React from 'react'
import { useDispatch } from 'react-redux'

function Department() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    setTimeout(() => {
      dispatch(uiAction.closeLoading())
    }, 400);
  },[])
  return (
    <div className="main-department-con">
        <ArchiveList/>
        <AddDepartment/>
    </div>
  )
}

export default Department