import express from "express";
import { test, updateUser, deleteUser, getUserListings, getUser } from "../Controller/Usercontroller.js";
import { verifyToken } from "../verfiyuser.js";

const router = express.Router();


router.get("/test", test);
router.post("/update/:id",updateUser);
router.delete("/delete/:id", deleteUser);
router.get("/listings/:id", getUserListings);
router.get("/:id",  getUser);

export default router;