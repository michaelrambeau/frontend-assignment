import React from 'react'

import Marker from '../Marker/Marker'
import { DropTarget } from 'react-dnd'

function moveMarker (x, y, props) {
  console.log('Move', x, y, props)
}

const ConnectedCell = ({ children, connectDropTarget, isOver, marker, width, move }) => {
  const getColor = () => {
    if (isOver) return '#bbb'
    return '#ddd'
    // return marker ? marker.color : '#ddd'
  }
  const styles = {
    // width: `${width}%`,
    // paddingBottom: `${width}%`,
    flex: `0 0 ${width}%`,
    backgroundColor: getColor()
  }
  return connectDropTarget(
    <div
      style={styles}
    >
      {marker && (
        <Marker
          marker={marker}
          move={move}
        />
      )}
    </div>
  )
}

const cellTarget = {
  drop (props) {
    const { x, y } = props
    moveMarker(x, y, props)
    return {
      x,
      y
    }
  }
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

export default DropTarget('MARKER', cellTarget, collect)(ConnectedCell)

// export default Cell
