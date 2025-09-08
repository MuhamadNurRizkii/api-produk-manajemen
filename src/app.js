import express from "express";
import admin from "./routes/admin-products.js";
import fileUpload from "express-fileupload";
import { errorHandler } from "./middleware/error-handler.js";
const app = express();

app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));

app.use("/admin", admin);

app.use(errorHandler);

export default app;
