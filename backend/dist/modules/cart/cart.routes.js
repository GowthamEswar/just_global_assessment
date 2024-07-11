"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// modules/product/product.routes.ts
const express_1 = __importDefault(require("express"));
const cart_controller_1 = __importDefault(require("./controller/cart.controller"));
const router = express_1.default.Router();
router.post('', cart_controller_1.default.addCart);
router.get('', cart_controller_1.default.getAllCarts);
router.get('/:cartId', cart_controller_1.default.getCartById);
router.put('/:cartId', cart_controller_1.default.updateCart);
router.delete('/:cartId', cart_controller_1.default.deleteCart);
exports.default = router;
