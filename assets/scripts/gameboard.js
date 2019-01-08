// start with blank gameboard gameboard array
const gameBoardArray = []
const startTurn = 0
// const p1select = document.getElementById('player-one-select')
// const p2select = document.getElementById('player-two-select')
// choose player
// const choosePlayer = (event) => {
//                          players array. X and O are the values
//   const players = [selectP1.value, selectP2.value]
//   const selection = (click) => {
//   }
// }

// set up click handler to push player move to array and render a game piece
const clickSquare = (event) => {
  const move = event.target.id
  const placeXpiece = () => {
    gameBoardArray.push('X')
    document.getElementById(move).append('X')
  }
  const placeOpiece = () => {
    gameBoardArray.push('O')
    document.getElementById(move).append('O')
  }
  if (gameBoardArray.length % 2) {
    placeOpiece()
  } else {
    placeXpiece()
  }
  console.log('Gameboard array is:', gameBoardArray)
}

// // setup click handler to display 'X' in cell on click
// const placeGameMarker = (gameBoard) => {
//   if (gameBoard.gameBoardArray.length === ) {
//
//   }
// }

// set up win conditions
function checkGameOver (gameBoard) {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  return winConditions
}

module.exports = {
  checkGameOver,
  clickSquare,
  startTurn
}
