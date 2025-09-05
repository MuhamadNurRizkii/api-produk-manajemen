import cloudinary from "../utils/cloudinary.js";
import product from "../models/product-schema.js";

export const createProductController = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const { image } = req.files;

    if (!name || !description || !price || !stock || !image) {
      return res.status(400).json({ message: "Semua field wajib diisi" });
    }

    const uploadImage = await cloudinary.uploader.upload(image.tempFilePath, {
      folder: "products",
    });

    console.log(uploadImage);

    const newProduct = await product.create({
      name,
      description,
      price,
      stock,
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
