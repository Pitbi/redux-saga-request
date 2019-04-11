import { eventChannel, END, buffers } from 'redux-saga'
import { put, call, delay } from 'redux-saga/effects'

const increasePercent = function* (actions: any, percent: number) {
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
        _id: 0,
        firstName: 'Michael',
        lastName: 'Jordan'
      }, {
        _id: 1,
        firstName: 'Shaquille',
        lastName: 'O\'Neal'
      }, {
        _id: 2,
        firstName: 'Charles',
        lastName: 'Barkley'
      }]
    }
  }))
}

export default API