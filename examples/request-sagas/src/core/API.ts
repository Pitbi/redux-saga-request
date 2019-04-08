import { eventChannel, END, buffers } from 'redux-saga'
import { put, call, delay } from 'redux-saga/effects'

const API = function* (action:any, apiConfig:any, actions:any)  {
  yield put(actions.request())
  yield delay(100)
  yield put(actions.progress({
    payload: {
      percent: 50
    }
  }))
  yield delay(100)
  yield put(actions.progress({
    payload: {
      percent: 80
    }
  }))
  yield delay(100)
  yield put(actions.success({
    payload: {
      members: [{
        firstName: 'Michael',
        lastName: 'Jordan'
      }, {
        firstName: 'Shaquille',
        lastName: 'O\'Neal'
      }, {
        firstName: 'Charles',
        lastName: 'Barkley'
      }]
    }
  }))
}

export default API