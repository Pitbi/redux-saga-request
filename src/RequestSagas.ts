import RequestActions from './RequestActions'
import * as reduxSagaEffects from 'redux-saga/effects'
import {
  RequestSagasConfig,
  RequestSagasApiConfig
} from './types'

class RequestSagas {
  private _requestActions: RequestActions
  private _apiConfig: RequestSagasApiConfig
  private _config: RequestSagasConfig
  
  constructor(requestActions: RequestActions, apiConfig: RequestSagasApiConfig, config: RequestSagasConfig) {
    this._requestActions = requestActions
    this._apiConfig = apiConfig
    this._config = config
  }

  static API() {
    throw 'No API method setted'
  }

  * start(action) {
    const API = this._apiConfig.API || RequestSagas.API
    const emitter = API(action, this._apiConfig, this._requestActions.actions)
    yield reduxSagaEffects.fork(this.progressListener, emitter)
  }

  * request() {
  }

  * success() {
  }

  * failure() {
  }

  * progressListener(chan) {
    while (true) {
      const action = yield reduxSagaEffects.take(chan)
      yield reduxSagaEffects.put(action)
    }
  }

  * saga() {
    const effect = reduxSagaEffects[this._config.reduxSagaEffect || 'takeLatest']
    yield [
      effect(this._requestActions.action, this.start),
      effect(this._requestActions.types.request, this.request),
      effect(this._requestActions.types.success, this.success),
      effect(this._requestActions.types.failure, this.failure)
    ]
  }
}

export default RequestSagas