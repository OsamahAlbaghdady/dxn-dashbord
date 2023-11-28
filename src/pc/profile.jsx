import AddAdmin from '../component/admin/addAdmin'
import AdminList from '../component/admin/adminList'
import ArchiveList from '../component/department/archiveList'
import { uiAction } from '../store/slices/ui'
import React from 'react'
import { useDispatch } from 'react-redux'

function Profile() {
  
  return (
    <div className="main-department-con">
        <AdminList/>
        <AddAdmin/>
    </div>
  )
}

export default Profile