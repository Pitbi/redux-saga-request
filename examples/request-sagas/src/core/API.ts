import { eventChannel, END, buffers } from 'redux-saga'
import { put, call, delay } from 'redux-saga/effects'

const increasePercent = function* (actions, percent) {
  percent += 30
  yield put(actions.progress({
    payload: {
      percent
    }
  }))
  return percent
}

const API = function* (action:any, apiConfig:any, actions:any)  {
  let percent = 0
  yield put(actions.request())
  yield delay(500)
  percent = yield increasePercent(actions, percent)
  yield delay(500)
  percent = yield increasePercent(actions, percent)
  yield delay(500)
  percent = yield increasePercent(actions, percent)
  yield delay(500)
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