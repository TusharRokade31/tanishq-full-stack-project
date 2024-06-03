import express from "express"
import { addProduct, deleteProduct, getProduct, getProducts, getSearchProducts, updateProduct } from "../controllers/product.controller.js"

const router = express.Router()

router.post("/add-product", addProduct)
router.put("/update-product/:product_id", updateProduct)
router.get("/get-products", getSearchProducts)
router.get("/get-all-products", getProducts)
router.get("/get-product/:product_id", getProduct)
router.delete("/delete-product/:product_id", deleteProduct)


export default router