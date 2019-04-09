import RequestSagas from './RequestSagas'

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
          baseUrl: this._buildUrl(method),
          method
        }
      )
    })
  }

  _buildUrl(method:string) {
    const itemMethods = ['getOne', 'put', 'delete', 'patch']
    if (itemMethods.includes(method))
      return `${this._config.baseUrl}/:id`
    return this._config.baseUrl
  }
}

export default RestSagas