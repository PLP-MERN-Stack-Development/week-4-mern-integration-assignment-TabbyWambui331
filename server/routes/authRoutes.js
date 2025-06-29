import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
// This file defines the authentication routes for user registration and login.
// It uses the authController to handle the logic for these routes.