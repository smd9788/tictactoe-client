'use strict'
const gameEvents = require('./events')
const gameboardFile = require('./gameboard.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', gameEvents.onSignUp)
  $('#sign-in').on('submit', gameEvents.onSignIn)
  $('#change-password').on('submit', gameEvents.onChangePassword)
  $('#sign-out').on('click', gameEvents.onSignOut)
  $('#reset-game').on('click', gameEvents.onStartGame)
  $('#reset-game').on('click', gameboardFile.gamePlay.resetGame)
  $('#game-history-button').on('click', gameEvents.onFindGames)
  $('#modal-form').on('submit', gameEvents.onSubmitForm)
})
