"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var reduxSagaEffects = require("redux-saga/effects");
var RequestSagas = /** @class */ (function () {
    function RequestSagas(requestActions, apiConfig, config) {
        this._requestActions = requestActions;
        this._apiConfig = apiConfig;
        this._config = config || {};
        this.saga = this.saga.bind(this);
        this.start = this.start.bind(this);
        this.saga = this.saga.bind(this);
        this.request = this.request.bind(this);
        this.failure = this.failure.bind(this);
    }
    RequestSagas.setAPI = function (API) {
        RequestSagas.API = API;
    };
    RequestSagas.API = function () {
        throw 'No API method setted';
    };
    RequestSagas.prototype.start = function (action) {
        var API;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    API = this._apiConfig.API || RequestSagas.API;
                    return [4 /*yield*/, reduxSagaEffects.call(API, action, this._apiConfig, this._requestActions.actions)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    };
    RequestSagas.prototype.request = function (action) {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    };
    RequestSagas.prototype.success = function (action) {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    };
    RequestSagas.prototype.failure = function (action) {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    };
    RequestSagas.prototype.progress = function (action) {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    };
    RequestSagas.prototype.cancel = function (action) {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    };
    RequestSagas.prototype.saga = function () {
        var effect;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    effect = reduxSagaEffects[this._config.reduxSagaEffect || 'takeLatest'];
                    return [4 /*yield*/, reduxSagaEffects.all([
                            effect(this._requestActions.type, this.start),
                            effect(this._requestActions.types.request, this.request),
                            effect(this._requestActions.types.success, this.success),
                            effect(this._requestActions.types.failure, this.failure),
                            effect(this._requestActions.types.progress, this.progress),
                            effect(this._requestActions.types.cancel, this.cancel)
                        ])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    };
    return RequestSagas;
}());
exports.default = RequestSagas;
//# sourceMappingURL=RequestSagas.js.map