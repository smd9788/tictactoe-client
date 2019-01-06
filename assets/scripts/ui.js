'use strict'
const store = require('./store')

const onSignUpSuccess = (responseData) => {
  $('#user-message').text('Registration successful!')
}
const onSignUpFailure = () => {
  $('#user-message').text('Sorry. That email address is already registered')
}
const onSignInSuccess = (responseData) => {
  console.log('responseData is: ', responseData)
  $('#user-message').text('signed in successfully')
  store.user = responseData.user
  console.log('store is:', store)
}
const onSignInFailure = () => {
  $('#user-message').text('incorrect email or password. Try again')
}
const onChangePasswordSuccess = (responseData) => {
  $('#user-message').text('passwored changed successfully')
  console.log('store is:', store)
}
const onChangePasswordFailure = () => {
  $('#user-message').text('error. invalid new password')
}

module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInSuccess: onSignInSuccess,
  onSignInFailure: onSignInFailure,
  onChangePasswordSuccess: onChangePasswordSuccess,
  onChangePasswordFailure: onChangePasswordFailure
  // onSignOutSuccess: onSignOutSuccess,
  // onSignOutFailure: onSignOutFailure
}
