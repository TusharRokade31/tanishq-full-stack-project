import express from "express"
import { addCategory, deleteCategory, getCategoris, updateCategory } from "../controllers/category.controller.js"

const router = express.Router()


router.get("/get-categories", getCategoris)
router.post("/add-category", addCategory)
router.put("/update-category/:cat_id", updateCategory)
router.delete("/delete-category/:cat_id", deleteCategory)

export default router