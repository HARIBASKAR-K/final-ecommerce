import express from "express";
import Order from "../models/order.js";
import { protect, admin } from "../middleware/auth.js";

const router = express.Router();

/* Add Order */
router.post("/", protect, async (req, res) => {
  const order = new Order({ ...req.body, user: req.user._id });
  await order.save();
  res.json({ message: "Order placed", order });
});

/* Get User Orders */
router.get("/myorders", protect, async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

/* Admin: Get All Orders */
router.get("/", protect, admin, async (req, res) => {
  const orders = await Order.find().populate("user", "name email");
  res.json(orders);
});

export default router;