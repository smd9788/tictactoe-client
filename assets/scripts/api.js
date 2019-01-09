'use strict'
const config = require('./config')
const store = require('./store')

const signUp = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}
const signIn = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}
const changePassword = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE'
  })
}
const startGame = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
const getGameIndex = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateGame = (id, value) => {
  // console.log('hi')
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': id,
          'value': value
        },
        'over': false
      }
    }
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  store,
  getGameIndex,
  startGame,
  updateGame
}
