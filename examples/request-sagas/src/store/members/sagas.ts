import { fork, put } from 'redux-saga/effects'
import RequestSagas from '../../../../../src/RequestSagas'
import { MembersRestActions } from './actions'
import { ActionType as FlashesActionTypes } from '../flashes/actions'

const getMembersSagas = new RequestSagas(MembersRestActions.get, {
  url: '/members',
  method: 'GET'
})
getMembersSagas.success = function* (action: any) {
  yield put({
    type: FlashesActionTypes.ShowFlash,
    payload: {
      message: 'Members fetched!'
    }
  })
}


const sagas = [
  fork(getMembersSagas.saga)
]

export default sagas