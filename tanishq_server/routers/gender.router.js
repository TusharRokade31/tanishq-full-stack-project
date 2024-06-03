import express from "express"
import { addGender, getGender } from "../controllers/gender.controller.js"

const router = express.Router()

router.post("/add-gender", addGender)
router.get("/get-genders", getGender)



export default router