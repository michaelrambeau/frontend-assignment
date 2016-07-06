import React from 'react'

import Marker from '../Marker/Marker'
import MarkerIcon from '../Marker/MarkerIcon'
import classes from './styles.scss'

const MarkerContainer = ({ marker, move, disabled }) => (
  <div className={classes.markerContainer} style={{ borderColor: marker.color }}>
    <div className={classes.xy} style={{ backgroundColor: marker.color }}>
      <div>
        {marker.target.x + 1}
      </div>
      <div>
        {marker.target.y + 1}
      </div>
    </div>
    <div className={classes.markerRow}>
      {disabled ? (
        <MarkerIcon color={'#ddd'} />
      ) : (
        <Marker marker={marker} move={move} />
      )}
    </div>
  </div>
)

export default MarkerContainer
