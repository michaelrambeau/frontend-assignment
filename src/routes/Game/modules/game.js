import {
  getRandomPoints,
  getEmptyGrid,
  checkMarkerPosition
} from './helpers'

import msgbox from './msgbox'

// Colors of the 4 markers
const colors = ['#ffae63', '#f76d42', '#d63c4a', '#9c0042']

// The size of the grid (number of row)
const X = 10

// Targets where the user has to drag and drop the markers
const targets = getRandomPoints(X, 4)

// The markers the user has to drag and drop
// position {x: -1, y:-1} means the initial position, before any drag and drop, in the sidebar
const markers = targets.map((target, i) => ({
  id: i,
  color: colors[i],
  target,
  position: {
    x: -1,
    y: -1
  }
}))

// Genenerate an empty grid of X rows and columns
const rows = getEmptyGrid(X)

// ================
// ACTION HANDLERS
// ===============

const ACTION_HANDLERS = {
  MOVE_MARKER: (state, action) => {
    const { id, x, y } = action.payload
    const markers = state.markers.map(marker => {
      if (marker.id !== id) return marker
      return Object.assign({}, marker, {
        position: {
          x,
          y
        }
      })
    })
    return Object.assign({}, state, {
      markers
    })
  },
  CHECK: (state, action) => {
    return Object.assign({}, state, {
      checked: true,
      lastCheckResult: action.payload.result
    })
  },
  RESET: (state, action) => {
    return defaultState
  }
}

// ============
// REDUCER
// ============

const defaultState = {
  markers,
  rows,
  checked: false,
  lastCheckResult: false
}

export default function gameReducer (state = defaultState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

// ===========
// ACTIONS
// ===========

export function checkRequest () {
  return (dispatch, getState) => {
    const state = getState()
    const checkResult = state.game.markers.every(checkMarkerPosition)
    dispatch({
      type: 'CHECK',
      payload: {
        result: checkResult
      }
    })
    showCheckMessage(checkResult)
  }
}

function showCheckMessage (result) {
  const msg = result ? (
    'You have won the game, congratulations!'
  ) : (
    'This is not good, try again!'
  )
  msgbox(msg, {
    type: result ? 'SUCCESS' : 'WARNING'
  })
}

export function moveMarker (id, x, y) {
  return {
    type: 'MOVE_MARKER',
    payload: {
      id,
      x,
      y
    }
  }
}

export function reset () {
  return {
    type: 'RESET'
  }
}
