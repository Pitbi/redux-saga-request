"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RequestActions_1 = require("./RequestActions");
var types_1 = require("./types");
var RestActions = /** @class */ (function () {
    /**
    * @param _actionName Name of the resource (must be unique)
    */
    function RestActions(actionName, config) {
        if (config === void 0) { config = {}; }
        this._actionName = actionName;
        this._config = config;
        this._build();
    }
    RestActions.prototype._build = function () {
        var _this = this;
        Object.keys(types_1.RestMethods).forEach(function (method) {
            _this[method] = new RequestActions_1.default(method.toUpperCase() + "_" + _this._actionName, _this._config);
        });
    };
    return RestActions;
}());
exports.default = RestActions;
//# sourceMappingURL=RestActions.js.map