const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
  $('form').trigger('reset')
}
const onSignIn = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
  $('form').trigger('reset')
}
const onChangePassword = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
  $('form').trigger('reset')
}
const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}
// const gameBoardArray = () => {
//   const emptyBoard = ['', '', '', '', '', '', '', '', '']
//   return emptyBoard
// }

// const playerMove = () => {
//   gameBoardArray.push(1)
// }
// console.log(playerMove)
// console.log(gameBoardArray)

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
  // gameBoardArray
}
