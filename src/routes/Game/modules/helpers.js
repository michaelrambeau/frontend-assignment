// return true if a given marker is at the right position on the map
export function checkMarkerPosition (marker) {
  return comparePositions(marker.position, marker.target)
}

// return true if the marker has been moved on the map
export function isMarkerOnMap (marker) {
  return marker.position.x !== -1
}

export function isMarkerAvailable (marker) {
  return !isMarkerOnMap(marker)
}

// return return if 2 points A and B are the same
export function comparePositions (a, b) {
  return (a.x === b.x) && (a.y === b.y)
}

export const getEmptyGrid = (n) => {
  const grid = []
  for (let i = 0; i < n; i++) {
    let row = []
    for (let j = 0; j < n; j++) {
      row.push(0)
    }
    grid.push(row)
  }
  return grid
}

const getRandomPoint = (gridSize) => (
  {
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize)
  }
)

export function getRandomPoints (gridSize, n) {
  const points = []
  for (let i = 0; i < n; i++) {
    let found = false
    while (!found) {
      const randomPoint = getRandomPoint(gridSize)
      const duplicate = points.some(point => point.x === randomPoint.x && point.y === randomPoint.y)
      if (!duplicate) {
        found = true
        points.push(randomPoint)
      }
    }
  }
  return points
}
