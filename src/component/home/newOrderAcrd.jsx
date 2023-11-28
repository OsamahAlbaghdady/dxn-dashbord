import Image from '../../UI/image-circle/image';
import React from 'react'
import img from "../../assets/image/meel.png"
function NewOrderCrd({data}) {
  console.log(data);
  return (
    <div className='n-order-card-con'>
      <div className="costumer-info">
      <Image ZP={100} ZU={"px"} src={img.src} idC="n-order-card-img" />
      <span>
        <h2>Name : {data.name}</h2>
        <h2>{data.address}</h2>
        <h2>{data.phoneNumber}</h2>
        <p>{data.time}</p>
      </span>
      </div>
    </div>
  )
}

export default NewOrderCrd