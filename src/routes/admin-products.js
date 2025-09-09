import express from "express";
import {
  createProductController,
  deleteProductById,
  getProductByIdController,
  getProductsController,
  updateProductById,
} from "../controllers/admin-products-controllers.js";
const admin = express.Router();

// route product manajemen
admin.post("/api/products/add", createProductController);
admin.get("/api/products", getProductsController);
admin.get("/api/products/:id", getProductByIdController);
admin.put("/api/products/edit/:id", updateProductById);
admin.delete("/api/products/delete/:id", deleteProductById);

export default admin;
