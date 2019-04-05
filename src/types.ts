import RequestActions from './RequestActions'

//Request Actions
export interface Action {
  type: string,
  [key: string]: any
}

export enum ActionTypes {
  request = 'request',
  success = 'success',
  failure = 'failure',
  cancel = 'cancel',
  progress = 'progress'
}

export interface ActionFunc {
  (payload?: object): Action;
}

//To check: Is it possible to generate an interface from an enum?
export interface RequestTypes {
  request: string,
  success: string,
  failure: string,
  cancel: string,
  progress: string
}

export interface RequestFuncs {
  request: ActionFunc,
  success: ActionFunc,
  failure: ActionFunc,
  cancel: ActionFunc,
  progress: ActionFunc
}

/**
 * RequestActionConfig (request action constructors config)
 * @param actionsPrefix Prefix for redux actions (@@RA by default)
 */
export interface RequestActionConfig {
  /** Prefix of redux actions (@@RA by default) */
  actionsPrefix?: string
}


//REST
export enum RestMethods {
  get = 'gest',
  head = 'head',
  post = 'post',
  put = 'put',
  delete = 'delete',
  patch = 'patch'
}

export interface RestActionsMethods {
  get: RequestActions,
  head: RequestActions,
  post: RequestActions,
  put: RequestActions,
  delete: RequestActions,
  patch: RequestActions
}

//Request Sagas

export interface RequestSagasConfig {
  reduxSagaEffect?: string
}

export interface RequestSagasApiConfig {
  url: string,
  method: string,
  [key: string]: any
}