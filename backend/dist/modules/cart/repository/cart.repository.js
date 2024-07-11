"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// modules/cart/repository/cart.repository.ts
const cart_model_1 = __importDefault(require("../model/cart.model"));
const base_repository_1 = __importDefault(require("../../common/base.repository"));
class CartRepository extends base_repository_1.default {
    constructor() {
        super(cart_model_1.default);
    }
}
exports.default = new CartRepository();
