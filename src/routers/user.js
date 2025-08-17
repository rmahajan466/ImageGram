// After /users the remaining part of url will be handled by this router
// Here all the user related routes will be defined
import express from 'express';
import { getProfile } from '../controllers/userController.js';

const router = express.Router();

router.get('/profile',getProfile);

export default router;