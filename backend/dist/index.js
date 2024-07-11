"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const product_routes_1 = __importDefault(require("./modules/product/product.routes"));
const cart_routes_1 = __importDefault(require("./modules/cart/cart.routes"));
const app = (0, express_1.default)();
(0, database_1.default)();
// @ts-ignore
app.use(express_1.default.json());
app.use('/api/products', product_routes_1.default);
app.use('/api/carts', cart_routes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// export default app;
