"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    let error = Object.assign({}, err);
    error.message = err.message;
    error.statusCode = err.statusCode;
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error",
    });
};
exports.errorHandler = errorHandler;
