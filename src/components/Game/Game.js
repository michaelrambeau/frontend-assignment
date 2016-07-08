import React from 'react'

import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
//import { default as TouchBackend } from 'react-dnd-touch-backend';

import classes from './Game.scss'
import Grid from './Grid'
import Sidebar from './Sidebar'

const View = React.createClass({
  render () {
    const { markers, rows, moveMarker, canBeChecked, checkRequest, reset } = this.props
    return (
      <div className={classes.gameContainer}>
        <nav className="level">
          <div className="level-left">
            <p className="level-item">
            Drag and drop the 4 markers
            {' '}<span className="fa fa-map-marker" />{' '}
            from the sidebar to the grid.
            </p>
          </div>
          <div className="level-right">
            <div className="level-item">
              <button className="button" onClick={reset}>
                RESET
              </button>
            </div>
          </div>
        </nav>
        <div className={classes.gameLayout}>
          <Sidebar markers={markers} moveMarker={moveMarker} />
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
