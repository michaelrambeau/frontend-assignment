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
        <p className="alert alert-info">
          Drag and drop the 4 markers
          {' '}<span className="fa fa-map-marker" />{' '}
          from the sidebar to the grid.
        </p>
        <div className={classes.gameLayout}>
          <div>
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
            <button
              className="btn btn-primary btn-block"
              disabled={!canBeChecked}
              style={{ margin: '1rem 0' }}
              onClick={checkRequest}
            >
              <span className="fa fa-check"></span>
              {' '}
              CHECK
            </button>
          </div>
        </div>
      </div>
    )
  }
})

export default DragDropContext(HTML5Backend)(View)
