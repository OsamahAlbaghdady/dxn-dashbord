import React from 'react'
import Img from "../../UI/image-circle/image"
import img from "../../assets/image/meel.png"
import H from "../../UI/text/text"
import point from '../../assets/icons/point';
import profile from '../../assets/icons/profile';
import phone from '../../assets/icons/phone';
import price from '../../assets/icons/price';
function ArchiveItem({data}) {
  return (
    <div className='order-archive-item-con'>
      <div className="order-archive-item-img-con">
        <Img src={img.src} />
        <a className='flex-c'>{point}</a>
      </div>
      <div className="order-archive-item-info-con">
        <H style={{alignSelf:"center"}} t={4}>{data.name}</H>
        <div>
          <span>
          <H t={6}>{data.userName}</H>
          {profile}
          </span>
          <span><H id={"order-archive-completed"} t={5}>واصل</H>
          <H t={6}>{data.phoneNumber}</H>
          {phone}

          </span>
          <span>
          <H t={6}>{data.price}</H>
          {price}
          </span>
          
        </div>
      </div>
    </div>
  )
}

export default ArchiveItem