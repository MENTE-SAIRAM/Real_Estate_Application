import express from "express";
import { verifyToken } from "../verfiyuser.js";
import { createListing, deleteListing, updateListing, getListing, getListings } from "../Controller/Listing_controller.js";


const router = express.Router();

router.post("/create",  createListing);
router.delete("/delete/:id",  deleteListing);
router.post("/update/:id",updateListing);
router.get("/get/:id", getListing);
router.get("/get", getListings);



export default router;