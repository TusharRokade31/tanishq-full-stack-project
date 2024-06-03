import express from "express"
import { getUser, getUsers, login, signUp, softDeleteUser, updateUser } from "../controllers/user.controller.js"

const router = express.Router()

router.get("/get-users", getUsers)
router.get("/get-user/:user_id", getUser)
router.put("/update-user/:user_id", updateUser)
router.delete("/delete-user/:user_id", softDeleteUser)
router.post("/sign-up", signUp)
router.post("/login", login)



export default router