import cloudinary from "../utils/cloudinary.js";
import product from "../models/product-schema.js";

export const createProductController = async (req, res) => {
  try {
    const { name, description, price, stock, type } = req.body;
    const { image } = req.files;

    if (!name || !description || !price || !stock || !image || !type) {
      return res.status(400).json({ message: "Semua field wajib diisi" });
    }

    const uploadImage = await cloudinary.uploader.upload(image.tempFilePath, {
      folder: "products",
      width: 300,
      crop: "scale",
    });

    console.log(uploadImage);

    const newProduct = await product.create({
      name,
      description,
      price,
      stock,
      type,
      imageUrl: uploadImage.secure_url,
      imageId: uploadImage.public_id,
    });

    return res
      .status(201)
      .json({ message: "Product berhasil ditambahkan", data: newProduct });
  } catch (err) {
    console.log("Terjadi kesalahan:", err);
  }
};

export const getProductsController = async (req, res) => {
  try {
    const data = await product.find({}, { __v: 0 });

    if (!data) {
      return res.status(400).json({ message: "Gagal mengambil data" });
    }

    return res.json({ message: "Data product berhasil diambil", data });
  } catch (error) {
    console.log("Terjadi kesalahan:", error);
  }
};

export const getProductByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Id tidak ditemukan" });
    }

    const data = await product.findById(id, { __v: 0 });

    if (!data) {
      return res.status(400).json({ message: "Gagal mengambil product" });
    }

    return res.json({ message: "Product berhasil diambil", data });
  } catch (error) {
    console.log("Terjadi kesalahan:", error);
  }
};
