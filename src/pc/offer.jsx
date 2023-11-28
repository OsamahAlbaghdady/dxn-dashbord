import AddOffer from '../component/offre/addOffer'
import OfferList from '../component/offre/offerList'
import { uiAction } from '../store/slices/ui'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function Offer() {
  const [get,setGet] = useState(0)
  return (
    <div className="offer-main-con">
      <AddOffer get={setGet}/>
        <OfferList get={get}/>
    </div>
  )
}

export default Offer