import RequestSagas from './RequestSagas';
import { RestActionsMethods, RestSagasMethods, RestSagasConfig } from './types';
declare class RestSagas implements RestSagasMethods {
    get: RequestSagas;
    getOne: RequestSagas;
    post: RequestSagas;
    put: RequestSagas;
    delete: RequestSagas;
    patch: RequestSagas;
    sagas: Array<any>;
    private _restActions;
    private _config;
    constructor(restActions: RestActionsMethods, config: RestSagasConfig);
    readonly forkSagas: import("@redux-saga/types").SimpleEffect<"FORK", import("redux-saga/effects").ForkEffectDescriptor>[];
    _build(): void;
    _buildUrl(method: string): string;
}
export default RestSagas;
