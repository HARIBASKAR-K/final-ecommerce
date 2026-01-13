import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  orderItems: [],
  shippingAddress: {},
  totalPrice: Number,
  isPaid: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);