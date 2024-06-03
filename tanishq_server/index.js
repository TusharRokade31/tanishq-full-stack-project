import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import userrouter from "./routers/user.router.js";
import metalrouter from "./routers/metal.router.js"
import genderrouter from "./routers/gender.router.js"
import productrouter from "./routers/product.router.js"
import categoryrouter from "./routers/category.router.js"
import cartrouter from "./routers/cart.router.js"
import otprouter from "./routers/otp.router.js"
import cors from "cors"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
const port = 8001;

app.use(express.static(__dirname));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  credentials: true,
}))
app.use(cookieParser())



app.listen(port, () => {
  console.log("tanishq server is created...");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/tanishq-database")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("tanishq server in running...");
});

app.use("/users", userrouter);
app.use("/metals", metalrouter);
app.use("/genders", genderrouter);
app.use("/products", productrouter);
app.use("/categories", categoryrouter);
app.use("/carts", cartrouter);
app.use("/otp", otprouter);

