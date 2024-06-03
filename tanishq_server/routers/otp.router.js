import express from "express"
import { OtpLogin, SendOtp } from "../controllers/otp.controller.js"

const router = express.Router()

router.post("/send-otp", SendOtp)
router.post("/otp-login", OtpLogin)

export default router