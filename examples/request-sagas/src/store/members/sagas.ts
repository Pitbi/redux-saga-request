import { fork } from 'redux-saga/effects'
import RequestSagas from '../../../../../src/RequestSagas'
import { MembersRestActions } from './actions'

const getMembersSagas = new RequestSagas(MembersRestActions.get, {
  url: '/members',
  method: 'GET'
})

const sagas = [
  fork(getMembersSagas.saga)
]

export default sagas