// The draggable marker used in the sidebar and in the grid

import React from 'react'
import { DragSource } from 'react-dnd'
import classes from './styles.scss'

import MarkerIcon from './MarkerIcon'

const markerSource = {
  beginDrag (props) {
    console.log('beginDrag', props)
    return {
      markerId: props.marker.id
    }
  },
  endDrag (props, monitor, component) {
    const item = monitor.getItem()
    var dropResult = monitor.getDropResult()
    if (!dropResult) return false // drag 'n drop outside the target
    console.log('End drag', item, dropResult)
    props.move(props.marker.id, dropResult.x, dropResult.y)
  }
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const Marker = ({ marker, connectDragSource, isDragging }) => connectDragSource(
  <div
    style={{ opacity: isDragging ? 0.5 : 1 }}
    className={classes.Marker}
  >
    <MarkerIcon color={marker.color} />
  </div>
)

// export default Marker
export default DragSource('MARKER', markerSource, collect)(Marker)
