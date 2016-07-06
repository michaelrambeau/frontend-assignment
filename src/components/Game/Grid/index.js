import React from 'react'

import Cell from './Cell'
import classes from './Grid.scss'

const Grid = ({ rows, markers, move }) => {
  const width = 100 / rows.length
  return (
    <div className={classes.gridContainer}>
      {rows.map((row, i) => {
        return row.map((cell, j) => (
          <Cell
            key={`${j}-${i}`}
            width={width}
            marker={markers.find(marker => marker.position.x === j && marker.position.y === i)}
            x={j}
            y={i}
            move={move}
          />
        ))
      })}
    </div>
) }

export default Grid
