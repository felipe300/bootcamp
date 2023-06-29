import express from "express"
import {
	findAll,
	createUser,
	findUserById,
	updateUserById,
	deleteUserById
} from "../controllers/user.controller.js"


const router = express.Router()

router.get("/", findAll)
router.post("/", createUser)
router.get("/:id", findUserById)
router.put("/:id", updateUserById)
router.delete("/:id", deleteUserById)

export default router