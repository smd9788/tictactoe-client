const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const gameboard = require('./gameboard')

// AUTHENTICATION API EVENTS
const onSignUp = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
  $('form').trigger('reset')
  $('#modalRegisterForm').modal('hide')
}
const onSignIn = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
  $('form').trigger('reset')
  $('#modalLoginForm').modal('hide')
  $('#change-password-button').show()
  $('#sign-out-button').show()
  $('#sign-up-button').hide()
  $('#sign-in-button').hide()
  gameboard.gameplay()
}
const onChangePassword = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
  $('form').trigger('reset')
  $('#modalChangePasswordForm').modal('hide')
}
const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
  $('#change-password').hide()
  $('#sign-out').hide()
}

// GAME API EVENTS
const onStartGame = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.startGame(data)
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailure)
}
const onFindGames = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.findGames(data)
    .then(ui.onFindGamesSuccess)
    .catch(ui.onFindGamesFailure)
}
const onUpdateGame = (id, value) => {
  api.updateGame(id, value)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}
const onSubmitForm = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onStartGame,
  onFindGames,
  onUpdateGame,
  onSubmitForm
}
