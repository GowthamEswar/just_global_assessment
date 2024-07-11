// authRoutes.ts

import express, { Router } from 'express';
import authController from '../controllers/authController';
import rateLimitMiddleware from '../Middlewares/rateLimitMiddleware';

const router: Router = express.Router();

// Login endpoint
router.post('/login', rateLimitMiddleware, authController.login);

// One-time link endpoint
router.post('/one-time-link', authController.generateOneTimeLink);

// Get time endpoint (protected)
router.get('/get-time', authController.getTime);

export default router;
