import express from "express";
import { createProductController } from "../controllers/admin-products-controllers.js";
const admin = express.Router();

admin.post("/api/products/add", createProductController);

export default admin;
