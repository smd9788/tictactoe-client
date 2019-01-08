// start by assigning the cells in our gameboard
const cell0 = document.getElementById('cell-zero').id
const cell1 = document.getElementById('cell-one').id
const cell2 = document.getElementById('cell-two').id
const cell3 = document.getElementById('cell-three').id
const cell4 = document.getElementById('cell-four').id
const cell5 = document.getElementById('cell-five').id
const cell6 = document.getElementById('cell-six').id
const cell7 = document.getElementById('cell-seven').id
const cell8 = document.getElementById('cell-eight').id

// create gameboard array
const gameBoardArray = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8]
// blank array to collect X's moves
let newGameXArray = []
// blank array to collect O's moves
let newGameOArray = []

let turnNumber = 0
// set up click handler to push player move to their array and render a game piece
const clickSquare = (event) => {
  const move = event.target.id
  const placeXpiece = () => {
    // determine index number of square selected
    newGameXArray[turnNumber] = gameBoardArray.indexOf(move)
    document.getElementById(move).append('X')
    turnNumber += 1
    // filter to remove empty values from array
    newGameXArray = newGameXArray.filter(function (notempty) {
      return typeof (notempty) === 'number'
    })
    console.log('X array is:', newGameXArray)
    checkGameOver(newGameXArray)
  }
  const placeOpiece = () => {
    newGameOArray[turnNumber] = gameBoardArray.indexOf(move)
    document.getElementById(move).append('O')
    turnNumber += 1
    newGameOArray = newGameOArray.filter(function (notempty) {
      return typeof (notempty) === 'number'
    })
    console.log('O array is:', newGameOArray)
    checkGameOver(newGameOArray)
  }
  // logic to know when to play X or O
  if (turnNumber % 2) {
    placeOpiece()
  } else {
    placeXpiece()
  }
  // console.log('X array is currently:', newGameXArray)
  // console.log('O array is currently:', newGameOArray)
  // console.log(newGameOArray.filter(function (notempty) {
  //   return typeof (notempty) === 'number'
  // }))
  return gameBoardArray
}

// set up win conditions
function checkGameOver (array) {
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
  winConditions.forEach(function (winCombo) {
    if (newGameXArray === winCombo) {
      console.log('X Wins the Game!')
    } else if (newGameXArray === winCombo) {
      console.log('O Wins the Game!')
    }
  })
  return true
}

module.exports = {
  checkGameOver,
  clickSquare
}
