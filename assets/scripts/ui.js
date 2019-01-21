'use strict'
const store = require('./store')

$('#change-password-button').hide()
$('#sign-out-button').hide()
$('#game-history-button').hide()

// AUTHENTICATION API UI MESSAGING

const onSignUpSuccess = (responseData) => {
  $('#user-message').text('Registration successful!')
}
const onSignUpFailure = () => {
  $('#user-message').text('Sorry. That email address is already registered')
}
const onSignInSuccess = (responseData) => {
  $('#user-message').text('signed in successfully')
  $('#modalLoginForm').modal('hide')
  $('#change-password-button').show()
  $('#sign-out-button').show()
  $('#game-history-button').show()
  $('#sign-up-button').hide()
  $('#sign-in-button').hide()
  store.user = responseData.user
}
const onSignInFailure = () => {
  $('#user-message').text('incorrect email or password. Try again')
}
const onChangePasswordSuccess = (responseData) => {
  $('#user-message').text('passwored changed successfully')
}
const onChangePasswordFailure = () => {
  $('#user-message').text('error. invalid new password')
}
const onSignOutSuccess = (responseData) => {
  $('#user-message').text('user signed out successfully')
  $('#change-password-button').hide()
  $('#sign-out-button').hide()
  $('#game-history-button').hide()
  $('#sign-up-button').show()
  $('#sign-in-button').show()
  store.user = null
}
const onSignOutFailure = () => {
  $('#user-message').text('error. you are not logged in')
}

// GAME API MESSAGING

const onStartGameSuccess = (response) => {
  const gameData = response.game
  const cells = gameData.cells
  for (let i = 0; i < cells.length; i++) {
    const cellId = 'cell' + i.toString()
    $(cellId).text = cells[i]
  }
  store.game = gameData
  $('.box').html('')
  $('#user-message').text('Successfully created a new game. Player one\'s turn.')
  store.turn = 0
}

const onStartGameFailure = (response) => {
  $('#user-message').text('Error creating a game. Please sign in.')
}

const onFindGamesSuccess = (response) => {
  $('#game-history-list').html(`Total Games Played: ${response.games.length}`)
}
const onFindGamesFailure = (response) => {
  $('#user-message').text('Error finding games.')
}
const onUpdateGameSuccess = (response) => {
  console.log(response)
  console.log(store.game = response.game)
}
const onUpdateGameFailure = (response) => {
  $('#user-message').text('Error updating game.')
}
module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInSuccess: onSignInSuccess,
  onSignInFailure: onSignInFailure,
  onChangePasswordSuccess: onChangePasswordSuccess,
  onChangePasswordFailure: onChangePasswordFailure,
  onSignOutSuccess: onSignOutSuccess,
  onSignOutFailure: onSignOutFailure,
  onStartGameSuccess: onStartGameSuccess,
  onStartGameFailure: onStartGameFailure,
  onFindGamesSuccess: onFindGamesSuccess,
  onFindGamesFailure: onFindGamesFailure,
  onUpdateGameFailure: onUpdateGameFailure,
  onUpdateGameSuccess: onUpdateGameSuccess
}
