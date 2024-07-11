"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cart_service_1 = __importDefault(require("../service/cart.service"));
class CartController {
    async getAllCarts(req, res) {
        try {
            const carts = await cart_service_1.default.getAllCarts();
            res.status(200).json(carts);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async addCart(req, res) {
        try {
            // const validatedData = await cartSchema.validateAsync(req.body);
            // const cart = await CartService.addCart(validatedData);
            const cart = await cart_service_1.default.addCart(req.body);
            res.status(201).json(cart);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async getCartById(req, res) {
        try {
            const cartId = req.params.cartId;
            const cart = await cart_service_1.default.getCartById(cartId);
            if (!cart) {
                res.status(404).json({ message: 'cart not found' });
                return;
            }
            res.status(200).json(cart);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async updateCart(req, res) {
        try {
            const cartId = req.params.cartId;
            // const validatedData = await cartSchema.validateAsync(req.body);
            const updatedcart = await cart_service_1.default.updateCart(cartId, req.body);
            if (!updatedcart) {
                res.status(404).json({ message: 'cart not found' });
                return;
            }
            res.status(200).json(updatedcart);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async deleteCart(req, res) {
        try {
            const cartId = req.params.cartId;
            const deletedcart = await cart_service_1.default.deleteCart(cartId);
            if (!deletedcart) {
                res.status(404).json({ message: 'cart not found' });
                return;
            }
            res.status(204).end();
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
exports.default = new CartController();
