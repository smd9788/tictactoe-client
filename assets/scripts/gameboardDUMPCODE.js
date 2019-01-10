// start by assigning the cells in our gameboard
const cell0 = document.getElementById('cell-zero')
const cell1 = document.getElementById('cell-one')
const cell2 = document.getElementById('cell-two')
const cell3 = document.getElementById('cell-three')
const cell4 = document.getElementById('cell-four')
const cell5 = document.getElementById('cell-five')
const cell6 = document.getElementById('cell-six')
const cell7 = document.getElementById('cell-seven')
const cell8 = document.getElementById('cell-eight')

// create gameboard array
const gameBoardArray = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8]
// blank array to collect X's moves
const newGameXArray = ['', '', '', '', '', '', '', '', '']
// blank array to collect O's moves
const newGameOArray = ['', '', '', '', '', '', '', '', '']

let turnNumber = 0
// set up click handler to push player move to their array and render a game piece
const clickSquare = (event) => {
  const move = event.target.id
  const placeXpiece = (checkGameOver) => {
    newGameXArray[turnNumber] = 'X'
    document.getElementById(move).append('X')
    turnNumber += 1
    if (newGameXArray[0] && newGameXArray[2] && newGameXArray[4] === 'X') {
      console.log('X Wins the game')
    }
  }
  const placeOpiece = () => {
    newGameOArray[turnNumber] = move
    document.getElementById(move).append('O')
    turnNumber += 1
    if (newGameOArray[1] && newGameOArray[3] && newGameOArray[5] === 'O') {
      console.log('O Wins the game')
    }
  }
  // logic to know when to play X or O
  if (turnNumber % 2) {
    placeOpiece()
  } else {
    placeXpiece()
  }
  return gameBoardArray
}
console.log(cell0)
// set up win conditions
function checkGameOver (array) {
  const winConditions = () => {
    if (newGameXArray[0] && newGameXArray[2] && newGameXArray[4] === 'X') {
      console.log('X Wins the game')
    }
  }
  return winConditions
}

// const winConditions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

// filter to remove empty values from array
// newGameXArray = newGameXArray.filter(function (notempty) {
//   return typeof (notempty) === 'number'

module.exports = {
  checkGameOver,
  clickSquare
}
