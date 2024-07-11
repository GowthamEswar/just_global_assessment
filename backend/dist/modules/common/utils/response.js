"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
const successResponse = (data, message = 'Request successful') => {
    return {
        success: true,
        data,
        message
    };
};
exports.successResponse = successResponse;
const errorResponse = (error, message = 'Request failed') => {
    return {
        success: false,
        error,
        message
    };
};
exports.errorResponse = errorResponse;
