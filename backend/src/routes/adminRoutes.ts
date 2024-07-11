// adminRoutes.ts

import express, { Router } from 'express';
import adminController from '../controllers/adminController';

const router: Router = express.Router();

// Kickout endpoint (admin)
router.post('/kickout', adminController.kickoutUser);

export default router;
