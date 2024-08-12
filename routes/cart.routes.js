import express from "express";
import {
  addProductCartCtr,
  deleteProductInCartCtr,
  getCartCtr,
  getProductsCartCtr,
} from "../controllers/cart.controllers.js";
import { auth } from "../Middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", auth, getCartCtr);
router.get("/:id", auth, getProductsCartCtr);
router.delete("/del/:id", auth, deleteProductInCartCtr);
router.post("/", auth, addProductCartCtr);

export default router;

// index - routes - controller - service
