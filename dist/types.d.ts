import RequestActions from './RequestActions';
import RequestSagas from './RequestSagas';
export interface Action {
    type: string;
    [key: string]: any;
}
export declare enum ActionTypes {
    request = "request",
    success = "success",
    failure = "failure",
    cancel = "cancel",
    progress = "progress"
}
export interface ActionFunc {
    (payload?: object): Action;
}
export interface RequestTypes {
    request: string;
    success: string;
    failure: string;
    cancel: string;
    progress: string;
}
export interface RequestFuncs {
    request: ActionFunc;
    success: ActionFunc;
    failure: ActionFunc;
    cancel: ActionFunc;
    progress: ActionFunc;
}
/**
 * RequestActionConfig (request action constructors config)
 * @param actionsPrefix Prefix for redux actions (@@RA by default)
 */
export interface RequestActionConfig {
    /** Prefix of redux actions (@@RA by default) */
    actionsPrefix?: string;
}
export declare enum RestMethods {
    get = "get",
    getOne = "getOne",
    post = "post",
    put = "put",
    delete = "delete",
    patch = "patch"
}
export interface RestActionsMethods {
    get: RequestActions;
    getOne: RequestActions;
    post: RequestActions;
    put: RequestActions;
    delete: RequestActions;
    patch: RequestActions;
}
export interface RequestSagasConfig {
    reduxSagaEffect?: string;
}
export interface RequestSagasApiConfig {
    [key: string]: any;
}
export interface RestSagasMethods {
    get: RequestSagas;
    getOne: RequestSagas;
    post: RequestSagas;
    put: RequestSagas;
    delete: RequestSagas;
    patch: RequestSagas;
}
/**
 * @param resource ex: /cars
 */
export interface RestSagasConfig {
    baseUrl: string;
    [key: string]: any;
}
