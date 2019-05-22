import RequestActions from './RequestActions';
import * as reduxSagaEffects from 'redux-saga/effects';
import { Action, RequestSagasConfig, RequestSagasApiConfig } from './types';
declare class RequestSagas {
    private _requestActions;
    private _apiConfig;
    private _config?;
    constructor(requestActions: RequestActions, apiConfig: RequestSagasApiConfig, config?: RequestSagasConfig);
    static setAPI(API: any): void;
    static API(): void;
    start(action: Action): IterableIterator<reduxSagaEffects.SimpleEffect<"CALL", reduxSagaEffects.CallEffectDescriptor>>;
    request(action: Action): IterableIterator<any>;
    success(action: Action): IterableIterator<any>;
    failure(action: Action): IterableIterator<any>;
    progress(action: Action): IterableIterator<any>;
    cancel(action: Action): IterableIterator<any>;
    saga(): IterableIterator<import("@redux-saga/types").CombinatorEffect<"ALL", any>>;
}
export default RequestSagas;
