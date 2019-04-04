import * as _ from 'lodash'
import {
  Action,
  ActionTypes,
  ActionFunc,
  RequestTypes,
  RequestFuncs,
  RequestActionConfig
} from './types'

class RequestActions {
  public type: string
  public action: ActionFunc
  public types: RequestTypes
  public actions: RequestFuncs

  private _actionName: string
  private _actionsPrefix: string

  /**
   * @param _actionName Name of the resource (must be unique)
   */
  constructor(actionName: string, config: RequestActionConfig = {}) {
    this._actionName = actionName
    this._actionsPrefix = config.actionsPrefix || '@@RA'
    this._build()
  }

  _build() {
    this.type = `${this._actionsPrefix}_${this._actionName}`
    this.action = (data?: object): Action => this._action(this.type, data)
    this.types = this._buildRequestTypes()
    this.actions = this._buildRequestActions()
  }

  _buildRequestActions(): RequestFuncs {
    return Object.keys(ActionTypes).reduce((actions, type) => {
      actions[type] = (data: object): Action => this._action(this.types[type], data)
      return actions
    }, {}) as RequestFuncs
  }

  _buildRequestTypes(): RequestTypes {
    return Object.keys(ActionTypes).reduce((types, type) => {
      types[type] = `${this.type}_${type.toUpperCase()}`
      return types
    }, {}) as RequestTypes
  }

  _action(type: string, data: object = {}): Action {
    return { type, ...data }
  }
}

export default RequestActions