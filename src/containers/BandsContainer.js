import React from 'react'
import {connect} from 'react-redux'
import BandInput from "../components/BandInput"

function BandsContainer(props) {
  return(
    <div>
      BandsContainer
      All bands:
      <ul>
        {props.bands.map(b=><li>{b.name}</li>)}
      </ul>
      Add a new band:
      <BandInput addBand={props.addBand} />
    </div>
  )
}

const addBand = band => {
  return {
    type: "ADD_BAND",
    band
  }
}

export default connect(state=>({bands: state.bands}),{addBand})(BandsContainer)
