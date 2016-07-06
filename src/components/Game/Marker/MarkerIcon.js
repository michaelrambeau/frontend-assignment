import React from 'react'

const Icon = ({ color }) => {
  const styles = {
    color,
    fontSize: 36,
    cursor: 'move'
  }
  return (
    <span style={styles} className="fa fa-map-marker" />
  )
}

export default Icon
