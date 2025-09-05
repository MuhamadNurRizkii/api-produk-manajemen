import app from "../src/app.js";
import dotenv from "dotenv";
import { connectDb } from "../src/models/database.js";
dotenv.config();
const port = 3000;

connectDb().then(() => console.log("Mongodb connected successfully"));
app.listen(port, () => console.log(`Server listen on port: ${port}`));
