import React from 'react'

import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import classes from './Game.scss'
import Grid from './Grid'
import Marker from './Sidebar/MarkerContainer'

const View = React.createClass({
  render () {
    const { markers, rows, moveMarker, canBeChecked, checkRequest } = this.props
    return (
      <div className={classes.gameContainer}>
        <div className="notification" style={{ backgroundColor: 'white' }}>
          Drag and drop the 4 markers
          {' '}<span className="fa fa-map-marker" />{' '}
          from the sidebar to the grid.
        </div>
        <div className={classes.gameLayout}>
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
          <div>
            <Grid
              rows={rows}
              markers={markers.onMap}
              move={moveMarker}
            />
          </div>
        </div>
        <button
          className={`button is-info is-large btn-block${!canBeChecked ? ' is-disabled' : ''}`}
          disabled={!canBeChecked}
          style={{ margin: '1rem 0', width: '100%' }}
          onClick={checkRequest}
          >
          <span className="icon">
            <span className="fa fa-check"></span>
          </span>
          <span>CHECK</span>
        </button>
      </div>
    )
  }
})

export default DragDropContext(HTML5Backend)(View)
