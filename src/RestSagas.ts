import RequestSagas from './RequestSagas'
import { fork } from 'redux-saga/effects'

import {
  RestMethods,
  RequestActionConfig,
  RestActionsMethods,
  RestSagasMethods,
  RestSagasConfig
} from './types'

class RestSagas implements RestSagasMethods {
  public get: RequestSagas
  public getOne: RequestSagas
  public post: RequestSagas
  public put: RequestSagas
  public delete: RequestSagas
  public patch: RequestSagas
  public sagas: Array<any>
  private _restActions: RestActionsMethods
  private _config: RestSagasConfig

  constructor(restActions: RestActionsMethods, config: RestSagasConfig) {
    this._restActions = restActions
    this._config = config
    this.sagas = []
    this._build()
  }

  get forkSagas() {
    return this.sagas.map(saga => fork(saga))
  }

  _build() {
    Object.keys(RestMethods).forEach((method: RestMethods) => {
      this[method] = new RequestSagas(
        this._restActions[method],
        {
          baseUrl: this._buildUrl(method),
          method
        }
      )
      this.sagas.push(this[method].saga)
    })
  }

  _buildUrl(method: string) {
    const itemMethods = ['getOne', 'put', 'delete', 'patch']
    if (itemMethods.includes(method))
      return `${this._config.baseUrl}/:id`
    return this._config.baseUrl
  }
}

export default RestSagas