import express from "express";
import {
  getProductsByIdCtr,
  createProductByIdCtr,
  deleteProductByIdCtr,
  getProductsCtr,
  editProductByIdCtr,
} from "../controllers/products.controllers.js";
import { auth } from "../Middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", auth, getProductsCtr);
router.get("/:id", auth, getProductsByIdCtr);
router.delete("/del/:id", auth, deleteProductByIdCtr);
router.post("/", auth, createProductByIdCtr);
router.put("/:id", auth, editProductByIdCtr);

export default router;

// index - routes - controller - service
