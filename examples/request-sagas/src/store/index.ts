import { combineReducers, createStore as createReduxStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { MembersState, membersReducer } from './members'
import MembersSagas from './members/sagas'
import RequestSagas from '../../../../src/RequestSagas'
import API from '../core/API'

//CONFIG

export interface ApplicationState {
  members: MembersState
}


//SAGAS
RequestSagas.API = API

const sagas = function* () {
  yield all([
    ...MembersSagas
  ])
}

//STORE
declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION__: any }
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const rootReducer = combineReducers<ApplicationState>({
  members: membersReducer,
})

export const createStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createReduxStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

  //store.runSaga = sagaMiddleware.run
  sagaMiddleware.run(sagas)

  return store
}

export type AppState = ReturnType<typeof rootReducer>