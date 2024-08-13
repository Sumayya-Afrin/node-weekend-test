import express from "express";
import {
  createOrderCtr,
  getOrdersCtr,
} from "../controllers/orders.controller.js";
import { auth } from "../Middlewares/auth.middleware.js";

const router = express.Router();

router.get("/:id", createOrderCtr);
router.get("/:id", getOrdersCtr);

export default router;

// index - routes - controller - service
