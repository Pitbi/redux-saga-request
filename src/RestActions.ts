import RequestActions from './RequestActions'
import {
  RestMethods,
  RequestActionConfig,
  RestActionsMethods
} from './types'

class RestActions implements RestActionsMethods {
  private _actionName: string
  private _config: RequestActionConfig

  public get: RequestActions
  public head: RequestActions
  public post: RequestActions
  public put: RequestActions
  public delete: RequestActions
  public patch: RequestActions

  /**
  * @param _actionName Name of the resource (must be unique)
  */
  constructor(actionName: string, config: RequestActionConfig = {}) {
    this._actionName = actionName
    this._config = config
    this.build()
  }

  build() {
    Object.keys(RestMethods).forEach((method) => {
      this[method] = new RequestActions(`${method.toUpperCase()}_${this._actionName}`, this._config)
    })
  }
}

export default RestActions