import express from "express";
import {
  getProductsByIdCtr,
  createProductByIdCtr,
  deleteProductByIdCtr,
  getProductsCtr,
  editProductByIdCtr,
} from "../controllers/products.controllers.js";

const router = express.Router();

router.get("/", getProductsCtr);
router.get("/:id", getProductsByIdCtr);
router.delete("/del/:id", deleteProductByIdCtr);
router.post("/", createProductByIdCtr);
router.put("/:id", editProductByIdCtr);

export default router;

// index - routes - controller - service
