import express from "express";
import {
  addProductCartCtr,
  deleteProductInCartCtr,
  getProductsCartCtr,
} from "../controllers/cart.controllers.js";

const router = express.Router();

// router.get("/", getProductsCtr);
router.get("/:id", getProductsCartCtr);
router.delete("/del/:id", deleteProductInCartCtr);
router.post("/", addProductCartCtr);

export default router;

// index - routes - controller - service
