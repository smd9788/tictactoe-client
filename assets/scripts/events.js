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
  onSignUp
  // gameBoardArray
}
