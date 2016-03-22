import { Promise } from 'es6-promise'
import { EventEmitter } from 'events'
import $ from 'jquery'

const store = new EventEmitter()

export default store

store.fetchAll = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'GET',
      url: '/users',
      dataType: 'json',
      success: (result) => {
        resolve(result)
      },
      error: (error) => {
        reject(error)
      }
    })
  })
}
