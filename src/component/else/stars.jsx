import star from '../../assets/icons/star'
import React from 'react'

function Stars({rat,className,width,showAll}) {
  return (
    <div 
    style={{
        width:width?width:""
    }}
     className={`stars-con ${!showAll&&"star"+rat}`}>
        {showAll?<>
            {star(rat>0)}
        {star(rat>1)}
        {star(rat>2)}
        {star(rat>3)}
        {star(rat>4)}
        </>:<>
        {rat>0&&star(true)}
        {rat>1&&star(true)}
        {rat>2&&star(true)}
        {rat>3&&star(true)}
        {rat>4&&star(true)}
        </>}

    </div>
  )
}

export default Stars