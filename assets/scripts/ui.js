'use strict'
// const store = require('../store')

const onSignUpSuccess = (responseData) => {
  $('#user-message').text('Registration successful!')
}
const onSignUpFailure = () => {
  $('#user-message').text('Sorry. That email address is already registered')
}

module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure
}
