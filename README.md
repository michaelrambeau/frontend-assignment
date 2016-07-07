# frontend-assignment by Michael Rambeau

## How to check

Go to 'Game' menu (http://localhost:8080/game) to check the '4-marker game' I did (see requirement below)

Note: once the markers are placed on the grid, they can be moved by drag and drop.

TO DO

* Mobile friendly: the layout is responsive but drag and drop tap events MUST be implemented
* Add a reset button to restart the game
* Add X and Y numbers on the grid, to be able to understand what the number mean (using `D3` library ?)
* Prevent the user from placing 2 markers at the same place on the grid
* Improve the layout, the current menu (from the boilerplate used to create the project) does not look very good.
* Build the project in production mode and deploy on a free static hosting service (surge.sh for example).
* Add a screenshot in the README.md file
* Add an implementation section in the README.md to explain how the game was implemented, using [ReactDnD](https://github.com/gaearon/react-dnd) library.


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
