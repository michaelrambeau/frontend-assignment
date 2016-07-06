# frontend-assignment by Michael Rambeau

## How to check

Go to 'Game' menu (http://localhost:8080/game) to check the '4-marker game' I did (see requirement below)

TO DO

* Mobile friendly: the layout is responsive but tap events MUST be implemented
* Add a reset button to restart the game
* Add X and Y numbers on the grid, to be able to understand what the number mean (using 3D library ?)


## Requirements
Create a webpage that has a main content area with a left sidebar.
In the sidebar, create a list of 4 markers.
Each marker displays the X and Y coordinate they should be placed on.
In the main content area, use the D3 library to create a 10x10 grid.
Below the grid, create a "check" button that is disabled until all items are dragged onto the grid.
After the user clicks the "check" button, display correct or incorrect on the screen.

## Includes
React, Redux, Webpack, KOA, Babel, ESLint

## Installation
```node
//  Install local dependencies
npm install
```

## Build Tasks
```node
// Start dev server
npm start

//  Start dev server with nodemon
npm run dev

// Run tests
npm run test

// Run linter
npm run lint
```
