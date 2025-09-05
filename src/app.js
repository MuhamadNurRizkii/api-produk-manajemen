import express from "express";
import admin from "./routes/admin-products.js";
import fileUpload from "express-fileupload";
const app = express();

app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));

app.use("/admin", admin);

export default app;
