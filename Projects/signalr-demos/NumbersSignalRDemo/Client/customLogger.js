"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLogger = void 0;
var CustomLogger = /** @class */ (function () {
    function CustomLogger() {
    }
    CustomLogger.prototype.log = function (logLevel, message) {
        // Use `message` and `logLevel` to record the log message to your own system
        console.log(logLevel + " :: " + message);
    };
    return CustomLogger;
}());
exports.CustomLogger = CustomLogger;
