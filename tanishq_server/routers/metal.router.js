import express from "express"
import { addMetal, deleteMetal, getMetal, updateMetal } from "../controllers/metal.controller.js"

const router = express.Router()

router.post("/add-metal", addMetal)
router.put("/update-metal/:met_id", updateMetal)
router.delete("/delete-metal/:met_id", deleteMetal)
router.get("/get-metals", getMetal)



export default router