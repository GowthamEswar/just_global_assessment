"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = __importDefault(require("../service/product.service"));
const response_1 = require("../../common/utils/response");
class ProductController {
    async getAllProducts(req, res) {
        try {
            const queryParams = {
                sort: req.query.sort,
                search: req.query.search,
                limit: req.query.limit,
            };
            const products = await product_service_1.default.getAllProducts(queryParams);
            res.status(200).json((0, response_1.successResponse)(products));
        }
        catch (error) {
            res.status(500).json((0, response_1.errorResponse)(error.message));
        }
    }
    async addProduct(req, res) {
        try {
            const product = await product_service_1.default.addProduct(req.body);
            res.status(201).json((0, response_1.successResponse)(product, 'Product created successfully'));
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async getProductById(req, res) {
        try {
            const productId = req.params.productId;
            const product = await product_service_1.default.getProductById(productId);
            if (!product) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            res.status(200).json((0, response_1.successResponse)(product));
        }
        catch (error) {
            res.status(500).json((0, response_1.errorResponse)(error.message));
        }
    }
    async updateProduct(req, res) {
        try {
            const productId = req.params.productId;
            const updatedProduct = await product_service_1.default.updateProduct(productId, req.body);
            if (!updatedProduct) {
                res.status(404).json((0, response_1.errorResponse)('Product not found'));
                return;
            }
            res.status(200).json((0, response_1.successResponse)(updatedProduct, 'Product updated successfully'));
        }
        catch (error) {
            res.status(500).json((0, response_1.errorResponse)(error.message));
        }
    }
    async deleteProduct(req, res) {
        try {
            const productId = req.params.productId;
            const deletedProduct = await product_service_1.default.deleteProduct(productId);
            if (!deletedProduct) {
                res.status(404).json((0, response_1.errorResponse)('Product not found'));
                return;
            }
            res.status(200).json((0, response_1.successResponse)(deletedProduct, 'Product deleted successfully'));
        }
        catch (error) {
            res.status(500).json((0, response_1.errorResponse)(error.message));
        }
    }
}
exports.default = new ProductController();
