"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// modules/product/repository/product.repository.ts
const product_model_1 = __importDefault(require("../model/product.model"));
const base_repository_1 = __importDefault(require("../../common/base.repository"));
class ProductRepository extends base_repository_1.default {
    constructor() {
        super(product_model_1.default);
    }
}
exports.default = new ProductRepository();
