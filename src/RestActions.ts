import RequestActions from './RequestActions'
import {
  RestMethods,
  RequestActionConfig,
  RestActionsMethods
} from './types'

class RestActions implements RestActionsMethods {
  public get: RequestActions
  public getOne: RequestActions
  public post: RequestActions
  public put: RequestActions
  public delete: RequestActions
  public patch: RequestActions

  private _actionName: string
  private _config: RequestActionConfig

  /**
  * @param _actionName Name of the resource (must be unique)
  */
  constructor(actionName: string, config: RequestActionConfig = {}) {
    this._actionName = actionName
    this._config = config
    this._build()
  }

  _build() {
    Object.keys(RestMethods).forEach((method) => {
      this[method] = new RequestActions(`${method.toUpperCase()}_${this._actionName}`, this._config)
    })
  }
}

export default RestActions