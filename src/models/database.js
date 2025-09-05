import moongose from "mongoose";

export async function connectDb() {
  await moongose.connect("mongodb://localhost:27017/toko_online");
}
