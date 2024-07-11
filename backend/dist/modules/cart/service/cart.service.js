"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// modules/product/service/product.service.ts
const cart_repository_1 = __importDefault(require("../repository/cart.repository"));
// import { productSchema } from '../validation/product.validation';
class ProductService {
    async getAllCarts() {
        return await cart_repository_1.default.findAll();
    }
    async addCart(productData) {
        // await productSchema.validateAsync(productData);
        return await cart_repository_1.default.create(productData);
    }
    async getCartById(id) {
        return await cart_repository_1.default.findById(id);
    }
    async updateCart(id, productData) {
        return await cart_repository_1.default.update(id, productData);
    }
    async deleteCart(id) {
        return await cart_repository_1.default.delete(id);
    }
}
exports.default = new ProductService();
