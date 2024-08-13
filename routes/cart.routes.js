import express from "express";
import {
  addProductCartCtr,
  deleteProductInCartCtr,
  getCartCtr,
  getProductsCartCtr,
} from "../controllers/cart.controllers.js";
import { auth } from "../Middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getCartCtr);
router.get("/:id", getProductsCartCtr);
router.delete("/del/:id", deleteProductInCartCtr);
router.post("/", addProductCartCtr);

export default router;

// index - routes - controller - service
