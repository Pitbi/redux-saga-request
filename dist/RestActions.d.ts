import RequestActions from './RequestActions';
import { RequestActionConfig, RestActionsMethods } from './types';
declare class RestActions implements RestActionsMethods {
    get: RequestActions;
    getOne: RequestActions;
    post: RequestActions;
    put: RequestActions;
    delete: RequestActions;
    patch: RequestActions;
    private _actionName;
    private _config;
    /**
    * @param _actionName Name of the resource (must be unique)
    */
    constructor(actionName: string, config?: RequestActionConfig);
    _build(): void;
}
export default RestActions;
