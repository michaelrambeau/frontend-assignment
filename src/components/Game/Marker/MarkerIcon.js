import React from 'react'
import classes from './styles.scss'

const Icon = ({ color }) => {
  const styles = {
    color,
    cursor: 'move'
  }
  return (
    <span style={styles} className={`fa fa-map-marker ${classes.icon}`} />
  )
}

export default Icon
