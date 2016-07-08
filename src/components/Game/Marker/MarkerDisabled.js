import React from 'react'

import MarkerIcon from './MarkerIcon'
import classes from './styles.scss'

const MarkerDisabled = ({ correct }) => {
  return (
    <div
      className={classes.Marker}
    >
      {correct ? (
        <span className={`fa fa-check ${classes.icon} ${classes.iconOk}`} />
      ) : (
        <MarkerIcon color={'#ccc'} />
      )}
    </div>
  )
}

export default MarkerDisabled
