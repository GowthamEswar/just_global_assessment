"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoURI = 'mongodb+srv://gowtham:wjtl42mIIsLpcI9M@cluster0.ovgstfb.mongodb.net/ecommerce?retryWrites=true&w=majority';
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(mongoURI);
        console.log('MongoDB Connected');
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
};
exports.default = connectDB;
