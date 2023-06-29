import express from "express"
import {
	addUser,
	findAll,
	createBootcamp,
	findById
} from "../controllers/bootcamp.controller.js"


const router = express.Router()

router.get("/", findAll)
router.post("/", createBootcamp)
router.post("/add", addUser)
router.get("/:id", findById)

export default router