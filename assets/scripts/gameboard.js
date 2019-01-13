const gameBoard = (function () {
  // select game board container
  const gameBoardContainer = document.getElementById('game-board')
  // draw gameboard by creating new div's. assign them classes and ids
  const drawGameBoard = () => {
    for (let i = 0; i < 9; i++) {
      const gameBoardCell = document.createElement('div')
      gameBoardCell.className = 'grid-item'
      gameBoardCell.id = i
      // this click action starts the game. function initialized below
      gameBoardCell.addEventListener('click', () => {
        gamePlay.playTurn(parseInt(gameBoardCell.id, 10))
      })
      gameBoardContainer.appendChild(gameBoardCell)
    }
  }
  return {
    drawGameBoard
  }
})()

gameBoard.drawGameBoard()

// set up two players as functions that build a score array and return as objects
const playerOne = (function () {
  const score = []
  return { score }
})()

const playerTwo = (function () {
  const score = []
  return { score }
})()

// get the cells we just created in the drawGameBoard function
const gameBoardCells = document.getElementsByClassName('grid-item')
// game logic
const gamePlay = (function () {
  let gridCellsPlayed = []
  let playerTurn = 1
  let playerHasWon = false
  const victoryMessage = document.getElementById('user-message')
  const playTurn = function (score) {
    // first check whos turn it is. then push their marker to their respective score array
    if (playerTurn === 1 && playerHasWon === false && !gridCellsPlayed.includes(score)) {
      playerOne.score.push(score)
      gridCellsPlayed.push(score)
      // check for win immediately after move is pushed to score array
      gamePlay.checkForWin(gamePlay.winConditions, playerOne.score, 'one')
      drawXO(gameBoardCells[score])
      // set playerTurn to player two's turn
      playerTurn = 2
      return playerTurn
    }
    if (playerTurn === 2 && playerHasWon === false && !gridCellsPlayed.includes(score)) {
      playerTwo.score.push(score)
      gridCellsPlayed.push(score)
      gamePlay.checkForWin(gamePlay.winConditions, playerTwo.score, 'two')
      drawXO(gameBoardCells[score])
      playerTurn = 1
      return playerTurn
    }
  }

  const drawXO = function (gameBoardCell) {
    const boardMarker = document.createElement('h2')
    if (playerTurn === 1) {
      boardMarker.innerHTML = 'X'
    } else {
      boardMarker.innerHTML = 'O'
    }
    gameBoardCell.appendChild(boardMarker)
  }

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ]

  // callback function to compare two arrays
  function arrayContainsArray (arrayOne, arrayTwo) {
    return arrayOne.every(function (value) {
      return arrayTwo.indexOf(value) > -1
    })
  }

  // use arrayContainsArray callback to compare X's and O's score to winConditions
  function checkForWin (winConditions, playerScore, playerWinner) {
    for (let i = 0; i < winConditions.length; i++) {
      if (arrayContainsArray(winConditions[i], playerScore) === true) {
        playerHasWon = true
        victoryMessage.innerHTML = 'Player ' + playerWinner + ' wins!'
        return victoryMessage
      } else if (playerOne.score.length > 4) {
        victoryMessage.innerHTML = 'The game is a draw'
      }
    }
  }
  function resetGame () {
    for (let i = 0; i < gameBoardCells.length; i++) {
      gameBoardCells[i].innerHTML = ''
    }
    playerTurn = 1
    playerOne.score = []
    playerTwo.score = []
    gridCellsPlayed = []
    victoryMessage.innerHTML = ''
    playerHasWon = false
  }
  return { gridCellsPlayed, playTurn, checkForWin, winConditions, drawXO, resetGame }
}())

module.exports = {
  gameBoard,
  gameBoardCells,
  gamePlay
}
