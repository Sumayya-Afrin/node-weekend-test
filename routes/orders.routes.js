import express from "express";
import {
  createOrderCtr,
  getOrdersByIdCartCtr,
} from "../controllers/orders.controller.js";
import { auth } from "../Middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", auth, createOrderCtr);
router.get("/:id", auth, getOrdersByIdCartCtr);

export default router;

// index - routes - controller - service
