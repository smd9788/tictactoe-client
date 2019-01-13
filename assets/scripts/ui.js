'use strict'
const store = require('./store')

// AUTHENTICATION API UI MESSAGING
$('#change-password-button').hide()
$('#sign-out-button').hide()

const onSignUpSuccess = (responseData) => {
  $('#user-message').text('Registration successful!')
}
const onSignUpFailure = () => {
  $('#user-message').text('Sorry. That email address is already registered')
}
const onSignInSuccess = (responseData) => {
  $('#user-message').text('signed in successfully')
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
  store.user = null
}
const onSignOutFailure = () => {
  $('#user-message').text('error. you are not logged in')
}

// GAME API UI MESSAGING

const onStartGameSuccess = (response) => {
  $('#game-board').removeClass('hide')
  const gameData = response.game
  const cells = gameData.cells
  for (let i = 0; i < cells.length; i++) {
    const cellId = 'cell' + i.toString()
    $(cellId).text = cells[i]
  }
  store.game = gameData
  $('.box').html('')
  $('#user-message').text('Successfully created a new game. Player ones turn.')
  store.turn = 0
}

const onStartGameFailure = (response) => {
  $('#user-message').text('Error creating a game.')
}

const onFindGamesSuccess = (response) => {
  $('#user-message').text(`Game Plays: ${response.games.length}`)
}
const onFindGamesFailure = (response) => {
  $('#user-message').text('Error finding games.')
}
const onUpdateGameSuccess = (response) => {
  // console.log('success response is: ', response)
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
  onUpdateGameSuccess: onUpdateGameSuccess,
  onUpdateGameFailure: onUpdateGameFailure
}
