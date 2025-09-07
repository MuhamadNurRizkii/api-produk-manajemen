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

    return res.status(201).json({ message: "Product berhasil ditambahkan" });
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

export const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock, type } = req.body;
    const { image } = req.files;

    if (!id) {
      return res.status(400).json({ message: "Id tidak ditemukan" });
    }

    if (!name || !description || !price || !stock || !image || !type) {
      return res.status(400).json({ message: "Semua field wajib diisi" });
    }

    const imageProduct = await product.findById(id, {
      imageUrl: 1,
      imageId: 1,
    });

    if (!imageProduct) {
      return res.status(400).json({ message: "Image not found" });
    }

    let updateData = { name, description, price, stock, type };

    if (image) {
      // hapus gambar lama
      if (imageProduct.imageId) {
        await cloudinary.uploader.destroy(imageProduct.imageId);
      }

      // upload gambar baru
      const uploadImage = await cloudinary.uploader.upload(image.tempFilePath, {
        folder: "products",
        width: 300,
        crop: "scale",
      });

      updateData.imageUrl = uploadImage.secure_url;
      updateData.imageId = uploadImage.public_id;
    }

    // update db
    const updateProduct = await product.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return res
      .status(201)
      .json({ message: "Product berhasil diupdate", updateProduct });
  } catch (error) {
    console.log("Terjadi kesalahan:", error);
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Id tidak ditemukan" });
    }

    const image = await product.findById(id, { imageId: 1 });

    // delete image
    if (image.imageId) {
      await cloudinary.uploader.destroy(image.imageId);
    }

    // delete data
    await product.findByIdAndDelete(id);

    return res.json({ message: "Product berhasil dihapus" });
  } catch (error) {
    console.log("Terjadi kesalahan:", error);
  }
};
