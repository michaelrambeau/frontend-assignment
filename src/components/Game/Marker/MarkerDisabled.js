import React from 'react'

import MarkerIcon from './MarkerIcon'
import classes from './styles.scss'

const MarkerDisabled = () => {
  return (
    <div
      className={classes.Marker}
    >
      <MarkerIcon color={'#ccc'} />
    </div>
  )
}

export default MarkerDisabled
