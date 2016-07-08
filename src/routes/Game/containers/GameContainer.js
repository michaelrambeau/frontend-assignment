import { connect } from 'react-redux'
import { moveMarker, checkRequest, reset } from '../modules/game'
import { checkMarkerPosition, isMarkerOnMap, isMarkerAvailable } from '../modules/helpers'

import Game from 'components/Game/Game'

const mapActionCreators = {
  moveMarker,
  checkRequest,
  reset
}

const mapStateToProps = (state) => {
  const canBeChecked = state.game.markers.every(isMarkerOnMap)
  const checkResult = state.game.markers.every(checkMarkerPosition)
  const all = state.game.markers
    .map(marker => Object.assign({}, marker, {
      correct: checkMarkerPosition(marker)
    }))
  return ({
    markers: {
      available: state.game.markers.filter(isMarkerAvailable),
      onMap: state.game.markers.filter(isMarkerOnMap),
      all
    },
    rows: state.game.rows,
    canBeChecked,
    checkResult
  })
}

export default connect(mapStateToProps, mapActionCreators)(Game)
