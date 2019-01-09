const gameBoard = (function () {
  // select game board container
  const gameBoardContainer = document.getElementById('game-board')
  // draw gameboard by creating new div's. assign them classes and ids
  const drawGameBoard = () => {
    for (let i = 0; i < 9; i++) {
      const gameBoardCell = document.createElement('div')
      gameBoardCell.className = 'grid-item'
      gameBoardCell.id = i
      // setup click action to start the game. then initilize function
      gameBoardContainer.appendChild(gameBoardCell)
    }
  }
  return { drawGameBoard }
})()

gameBoard.drawGameBoard()

module.exports = {
  gameBoard
}
