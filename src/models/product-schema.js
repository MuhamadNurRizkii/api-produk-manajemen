import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  imageId: { type: String, required: true },
});

const product = mongoose.model("products", productSchema);

export default product;
