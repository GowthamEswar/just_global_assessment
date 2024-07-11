"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productMiddleware = (req, res, next) => {
    if (req.query.sort) {
        req.query.sort = req.query.sort.toString();
    }
    if (req.query.search) {
        req.query.search = req.query.search.toString();
    }
    if (req.query.limit) {
        req.query.limit = parseInt(req.query.limit.toString(), 10);
    }
    next();
};
exports.default = productMiddleware;
