import React from 'react'
import classes from './styles.scss'
import Marker from './MarkerContainer'

const Sidebar = ({ markers, moveMarker }) => (
  <div className={classes.sidebar}>
    {markers.all.map((marker, i) => (
      <Marker
        key={i}
        marker={marker}
        move={moveMarker}
        disabled={marker.position.x > -1}
      />
    ))}
  </div>
)
export default Sidebar
