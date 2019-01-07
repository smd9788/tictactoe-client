// start with blank gameboard gameboard array
const gameBoardArray = []

// set up click handler to push player move to array and render an 'X'
const clickSquare = (event) => {
  const move = event.target.id
  gameBoardArray.push(move)
  document.getElementById(move).append('X')
}
// while (gameBoardArray.length < 9) {
// // playerMove = gameBoard(event.target)
//   // console.log(event.target)
//   gameBoardArray.push(gameBoard)
// }
// console.log('contents are: ', gameBoardArray)
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
  clickSquare
  // placeGameMarker
}
