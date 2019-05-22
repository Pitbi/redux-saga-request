import { Action, ActionFunc, RequestTypes, RequestFuncs, RequestActionConfig } from './types';
declare class RequestActions {
    type: string;
    action: ActionFunc;
    types: RequestTypes;
    actions: RequestFuncs;
    private _actionName;
    private _actionsPrefix;
    /**
     * @param _actionName Name of the resource (must be unique)
     */
    constructor(actionName: string, config?: RequestActionConfig);
    _build(): void;
    _buildRequestActions(): RequestFuncs;
    _buildRequestTypes(): RequestTypes;
    _action(type: string, data?: object): Action;
}
export default RequestActions;
