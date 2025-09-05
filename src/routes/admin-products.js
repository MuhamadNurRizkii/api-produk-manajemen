import express from "express";
import {
  createProductController,
  getProductByIdController,
  getProductsController,
} from "../controllers/admin-products-controllers.js";
const admin = express.Router();

admin.post("/api/products/add", createProductController);
admin.get("/api/products", getProductsController);
admin.get("/api/products/:id", getProductByIdController);

export default admin;
