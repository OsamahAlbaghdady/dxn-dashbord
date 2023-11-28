import React from 'react'
import H from "../../UI/text/text"
import up from '../../assets/icons/up'
import low from '../../assets/icons/low'

function Single_info_card({title,number,upper}) {
  return (
    <div className='Single_info_card-con'>
        <h2>{title}</h2>
        <h1> {upper===true?up:upper===false&&low}{number}</h1>
    </div>
  )
}

export default Single_info_card