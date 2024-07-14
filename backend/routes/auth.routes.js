import express from 'express';
const router = express.Router();
import {login,logout,signup} from '../controllers/auth.controllers.js';

router.post("/login",login);

router.post("/logout",logout);

router.post("/signup",signup);

export default router;

