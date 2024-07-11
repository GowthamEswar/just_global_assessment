"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productUpdateSchema = exports.productSchema = void 0;
// modules/product/dto/product.dto.ts
const joi_1 = __importDefault(require("joi"));
exports.productSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    price: joi_1.default.number().min(0).required()
});
exports.productUpdateSchema = joi_1.default.object({
    name: joi_1.default.string(),
    description: joi_1.default.string(),
    price: joi_1.default.number().min(0),
}).min(1);
