import React from 'react'
import ArchiveItem from './archiveItem'
import H from "../../UI/text/text"
function ArchiveList() {
  const data = [
    {
      name: "كباب",
      userName:"محمد صادق علوان",
      price:"5,000",
      phoneNumber:"077290044837"
    },    {
      name: "كباب",
      userName:"محمد صادق علوان",
      price:"5,000",
      phoneNumber:"077290044837"
    },    {
      name: "كباب",
      userName:"محمد صادق علوان",
      price:"5,000",
      phoneNumber:"077290044837"
    },    {
      name: "كباب",
      userName:"محمد صادق علوان",
      price:"5,000",
      phoneNumber:"077290044837"
    }
  ]
  return (
    <div className='order-archive-list-con'>
      <H id="order-archive-list-conH1" t={3}>أرشيف الطلبات الاخيرة</H>
      <br />
      <div className="archive-scroll">
       {
        data.map((e)=>{
          return<ArchiveItem data={e}/>
        })
      } 
      </div>
      
    </div>
  )
}

export default ArchiveList