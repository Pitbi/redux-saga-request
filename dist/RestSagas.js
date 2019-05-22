"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RequestSagas_1 = require("./RequestSagas");
var effects_1 = require("redux-saga/effects");
var types_1 = require("./types");
var RestSagas = /** @class */ (function () {
    function RestSagas(restActions, config) {
        this._restActions = restActions;
        this._config = config;
        this.sagas = [];
        this._build();
    }
    Object.defineProperty(RestSagas.prototype, "forkSagas", {
        get: function () {
            return this.sagas.map(function (saga) { return effects_1.fork(saga); });
        },
        enumerable: true,
        configurable: true
    });
    RestSagas.prototype._build = function () {
        var _this = this;
        Object.keys(types_1.RestMethods).forEach(function (method) {
            _this[method] = new RequestSagas_1.default(_this._restActions[method], {
                baseUrl: _this._buildUrl(method),
                method: method
            });
            _this.sagas.push(_this[method].saga);
        });
    };
    RestSagas.prototype._buildUrl = function (method) {
        var itemMethods = ['getOne', 'put', 'delete', 'patch'];
        if (itemMethods.includes(method))
            return this._config.baseUrl + "/:id";
        return this._config.baseUrl;
    };
    return RestSagas;
}());
exports.default = RestSagas;
//# sourceMappingURL=RestSagas.js.map