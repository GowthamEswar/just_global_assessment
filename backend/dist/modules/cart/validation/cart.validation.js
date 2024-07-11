"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCartItemQuantitySchema = exports.addToCartSchema = void 0;
// modules/cart/validation/cart.validation.ts
const joi_1 = __importDefault(require("joi"));
exports.addToCartSchema = joi_1.default.object({
    productId: joi_1.default.string().required(),
    quantity: joi_1.default.number().integer().min(1).required(),
});
exports.updateCartItemQuantitySchema = joi_1.default.object({
    quantity: joi_1.default.number().integer().min(1).required(),
});
