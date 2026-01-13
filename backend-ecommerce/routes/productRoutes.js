import express from "express";
import Product from "../models/product.js";
import { protect, admin } from "../middleware/auth.js";

const router = express.Router();

/* Add Product (ADMIN ONLY) */
router.post("/add", protect, admin, async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({ message: "Product Added" });
});

/* Bulk Add Products (ADMIN ONLY) */
router.post("/add-bulk", protect, admin, async (req, res) => {
  try {
    await Product.insertMany(req.body);
    res.json({ message: "Products Added Successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error adding products", error: err });
  }
});

/* Get All Products (PUBLIC) */
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

/* Get Single Product (PUBLIC) */
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

/* Update Product (ADMIN ONLY) */
router.put("/:id", protect, admin, async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedProduct);
});

/* Delete Product (ADMIN ONLY) */
router.delete("/:id", protect, admin, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product Deleted" });
});

export default router;