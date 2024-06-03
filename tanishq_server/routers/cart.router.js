import express from "express"
import { addToCart, deleteCartItem, getCartData, updateQuantity } from "../controllers/cart.controller.js"

const router = express.Router()

router.post("/add-to-cart", addToCart)
router.post("/get-cart", getCartData)
router.put("/update-quantity/:cart_id", updateQuantity);
router.delete("/delete-cart-item/:cart_id", deleteCartItem);


export default router