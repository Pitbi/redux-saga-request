import { fork, put, delay } from 'redux-saga/effects'
import RequestSagas from '../../../../../src/RequestSagas'
import { MembersRestActions } from './actions'
import { ActionType as FlashesActionTypes } from '../flashes/actions'
import {
  Action
} from '../../../../../src/types'

const getMembersSagas = new RequestSagas(MembersRestActions.get, {
  url: '/members',
  method: 'GET'
})
getMembersSagas.request = function* (action: Action) {
  yield put({
    type: FlashesActionTypes.ShowFlash,
    payload: {
      message: 'Fetch members in progress'
    }
  })
}
getMembersSagas.progress = function* (action: Action) {
  yield put({
    type: FlashesActionTypes.ShowFlash,
    payload: {
      message: `It\'s coming soon !! (${action.payload.percent}%)`
    }
  })
}
getMembersSagas.success = function* (action: Action) {
  yield put({
    type: FlashesActionTypes.ShowFlash,
    payload: {
      message: 'Ok, finally! What is this slowness ?! Shaquille O\'Neal is really heavy to load... ;)'
    }
  })
  yield delay(5000)
  yield put({
    type: FlashesActionTypes.HideFlash
  })
}
getMembersSagas.failure = function* (action: Action) {
  yield put({
    type: FlashesActionTypes.ShowFlash,
    payload: {
      message: 'OooOOOops!'
    }
  })
}


const sagas = [
  fork(getMembersSagas.saga)
]

export default sagas