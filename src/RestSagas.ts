import RequestSagas from './RequestSagas'

import {
  RestMethods,
  RequestActionConfig,
  RestActionsMethods,
  RestSagasMethods,
  RestSagasConfig
} from './types'

export interface RestSagasConfig {

}

class RestSagas implements RestSagasMethods {
  public get: RequestSagas
  public head: RequestSagas
  public post: RequestSagas
  public put: RequestSagas
  public delete: RequestSagas
  public patch: RequestSagas
  private _restActions: RestActionsMethods
  private _config: RestSagasConfig

  constructor(restActions: RestActionsMethods, config: RestSagasConfig) {
    this._restActions = restActions
    this._config = config
    this._build()
  }

  _build() {
    Object.keys(RestMethods).forEach((method: RestMethods) => {
      this[method] = new RequestSagas(
        this._restActions[method],
        {
          url: this._buildUrl(method),
          method
        }
      )
    })
  }

  _buildUrl(method:RestMethods) {
    return `${this._config.resource}/method`
  }
}

export default RestSagas