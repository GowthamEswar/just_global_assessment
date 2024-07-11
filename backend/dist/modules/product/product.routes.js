"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// modules/product/product.routes.ts
const express_1 = __importDefault(require("express"));
const product_controller_1 = __importDefault(require("./controller/product.controller"));
const validate_1 = require("../common/middleware/validate");
const product_validation_1 = require("./validation/product.validation");
const query_1 = __importDefault(require("../common/middleware/query"));
const router = express_1.default.Router();
router.post('/', (0, validate_1.validateBody)(product_validation_1.productSchema), product_controller_1.default.addProduct);
router.get('/', query_1.default, product_controller_1.default.getAllProducts);
router.get('/:productId', product_controller_1.default.getProductById);
router.put('/:productId', (0, validate_1.validateBody)(product_validation_1.productUpdateSchema), product_controller_1.default.updateProduct);
router.delete('/:productId', product_controller_1.default.deleteProduct);
exports.default = router;
