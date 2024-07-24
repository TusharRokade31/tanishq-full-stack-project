import express from "express"
import { addToCart, clearCart, deleteCartItem, getCartData, updateQuantity } from "../controllers/cart.controller.js"

const router = express.Router()

router.post("/add-to-cart", addToCart)
router.post("/get-cart", getCartData)
router.delete("/clear-cart", clearCart)
router.put("/update-quantity/:cart_id", updateQuantity);
router.delete("/delete-cart-item/:cart_id", deleteCartItem);


export default router