"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// modules/product/service/product.service.ts
const product_repository_1 = __importDefault(require("../repository/product.repository"));
const product_model_1 = __importDefault(require("../model/product.model"));
const mongoose_1 = __importDefault(require("mongoose"));
class ProductService {
    async getAllProducts(queryParams) {
        // return await ProductRepository.findAll();
        const { sort, search, limit } = queryParams;
        let aggregationPipeline = [];
        // Sorting
        if (sort) {
            const sortParams = sort.toString().split(',');
            const sortObj = {};
            sortParams.forEach((param) => {
                const [field, order] = param.split(':');
                sortObj[field?.trim()] = order?.trim() === 'desc' ? -1 : 1;
            });
            aggregationPipeline.push({ $sort: sortObj });
        }
        // Filtering
        if (search) {
            const searchObj = { name: { $regex: search, $options: 'i' } }; // case-insensitive search
            aggregationPipeline.push({ $match: searchObj });
        }
        // Limiting
        if (limit) {
            aggregationPipeline.push({ $limit: parseInt(limit.toString(), 10) });
        }
        // If the pipeline is empty, just use a match all documents stage
        if (aggregationPipeline.length === 0) {
            aggregationPipeline.push({ $match: {} });
        }
        return await product_model_1.default.aggregate(aggregationPipeline);
    }
    async addProduct(productData) {
        return await product_repository_1.default.create(productData);
    }
    async getProductById(id) {
        return await product_repository_1.default.findById(id);
    }
    async updateProduct(id, productData) {
        // Validate ObjectId
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid product ID format');
        }
        return await product_repository_1.default.update(id, productData);
    }
    async deleteProduct(id) {
        return await product_repository_1.default.delete(id);
    }
}
exports.default = new ProductService();
