"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var RequestActions = /** @class */ (function () {
    /**
     * @param _actionName Name of the resource (must be unique)
     */
    function RequestActions(actionName, config) {
        if (config === void 0) { config = {}; }
        this._actionName = actionName;
        this._actionsPrefix = config.actionsPrefix || '@@RA';
        this._build();
    }
    RequestActions.prototype._build = function () {
        var _this = this;
        this.type = this._actionsPrefix + "_" + this._actionName;
        this.action = function (data) { return _this._action(_this.type, data); };
        this.types = this._buildRequestTypes();
        this.actions = this._buildRequestActions();
    };
    RequestActions.prototype._buildRequestActions = function () {
        var _this = this;
        return Object.keys(types_1.ActionTypes).reduce(function (actions, type) {
            actions[type] = function (data) { return _this._action(_this.types[type], data); };
            return actions;
        }, {});
    };
    RequestActions.prototype._buildRequestTypes = function () {
        var _this = this;
        return Object.keys(types_1.ActionTypes).reduce(function (types, type) {
            types[type] = _this.type + "_" + type.toUpperCase();
            return types;
        }, {});
    };
    RequestActions.prototype._action = function (type, data) {
        if (data === void 0) { data = {}; }
        return __assign({ type: type }, data);
    };
    return RequestActions;
}());
exports.default = RequestActions;
//# sourceMappingURL=RequestActions.js.map