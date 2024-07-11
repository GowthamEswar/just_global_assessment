"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// modules/product/routes/product.routes.test.ts
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const product_routes_1 = __importDefault(require("../modules/product/product.routes"));
const product_model_1 = __importDefault(require("../modules/product/model/product.model"));
// Setup Express app for testing
const app = (0, express_1.default)();
// @ts-ignore
app.use(express_1.default.json());
app.use('/product', product_routes_1.default);
describe('Product API', () => {
    let server;
    beforeAll(async () => {
        await mongoose_1.default.connect('mongodb+srv://gowtham:wjtl42mIIsLpcI9M@cluster0.ovgstfb.mongodb.net/ecommerce?retryWrites=true&w=majority');
        server = app.listen(4000);
    });
    afterAll(async () => {
        await mongoose_1.default.connection.db.dropDatabase();
        await mongoose_1.default.connection.close();
        server.close();
    });
    describe('POST /product', () => {
        it('should create a new product', async () => {
            const response = await (0, supertest_1.default)(app)
                .post('/product')
                .send({ name: 'Test Product', description: 'Test Description', price: 100 });
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('_id');
            expect(response.body).toHaveProperty('name', 'Test Product');
            expect(response.body).toHaveProperty('description', 'Test Description');
            expect(response.body).toHaveProperty('price', 100);
        });
        it('should return validation error for invalid data', async () => {
            const response = await (0, supertest_1.default)(app)
                .post('/product')
                .send({ name: '', description: 'Test Description', price: -100 });
            expect(response.status).toBe(500);
            expect(response.body).toHaveProperty('error');
        });
    });
    describe('GET /product/:id', () => {
        let productId;
        beforeEach(async () => {
            const product = new product_model_1.default({ name: 'Test Product', description: 'Test Description', price: 100 });
            const savedProduct = await product.save();
            productId = savedProduct._id.toString(); // Explicit type assertion
        });
        it('should fetch a product by id', async () => {
            const response = await (0, supertest_1.default)(app).get(`/product/${productId}`);
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('_id', productId);
            expect(response.body).toHaveProperty('name', 'Test Product');
            expect(response.body).toHaveProperty('description', 'Test Description');
            expect(response.body).toHaveProperty('price', 100);
        });
        it('should return 404 for non-existing product', async () => {
            const response = await (0, supertest_1.default)(app).get(`/product/${new mongoose_1.default.Types.ObjectId()}`);
            expect(response.status).toBe(404);
            expect(response.body).toEqual({ message: 'Product not found' });
        });
    });
    describe('GET /product', () => {
        it('should fetch all products', async () => {
            const response = await (0, supertest_1.default)(app).get('/product');
            expect(response.status).toBe(200);
            expect(response.body).toBeInstanceOf(Array);
        });
    });
    describe('PUT /product/:id', () => {
        let productId;
        beforeEach(async () => {
            const product = new product_model_1.default({ name: 'Test Product', description: 'Test Description', price: 100 });
            const savedProduct = await product.save();
            productId = savedProduct._id.toString(); // Explicit type assertion
        });
        it('should update product details', async () => {
            const response = await (0, supertest_1.default)(app)
                .put(`/product/${productId}`)
                .send({ name: 'Updated Product', description: 'Updated Description', price: 150 });
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('_id', productId);
            expect(response.body).toHaveProperty('name', 'Updated Product');
            expect(response.body).toHaveProperty('description', 'Updated Description');
            expect(response.body).toHaveProperty('price', 150);
        });
        it('should return validation error for invalid data', async () => {
            const response = await (0, supertest_1.default)(app)
                .put(`/product/${productId}`)
                .send({ name: '', description: 'Updated Description', price: -150 });
            expect(response.status).toBe(500);
            expect(response.body).toHaveProperty('error');
        });
        it('should return 404 for non-existing product', async () => {
            const response = await (0, supertest_1.default)(app)
                .put(`/product/${new mongoose_1.default.Types.ObjectId()}`)
                .send({ name: 'Updated Product', description: 'Updated Description', price: 150 });
            expect(response.status).toBe(404);
            expect(response.body).toEqual({ message: 'Product not found' });
        });
    });
});
