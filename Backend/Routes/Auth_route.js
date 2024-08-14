import express from 'express';
import { signup, signin,  google, signOut } from '../Controller/Auth_countroller.js';
const router=express.Router();

router.post("/signup",signup);
router.post('/signin',signin);
router.post("/google", google);
router.get('/signout', signOut);
export default router;