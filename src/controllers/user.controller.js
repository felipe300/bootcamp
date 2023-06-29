import User from "../models/user.model.js"

export const findAll = async (req, res) => {
	try {
		const users = await User.findAll()
		res.send({ code: 200, data: users })
	} catch (err) {
		res.status(500).send({
			code: 500,
			message: `💩, Error to get users, ${err.message}`,
		})
	}
}

export const createUser = async (req, res) => {
	res.send({ message: "ok create" })
}

export const findUserById = async (req, res) => {
	res.send({ message: "ok find by id" })
}

export const updateUserById = async (req, res) => {
	res.send({ message: "ok uodate by id" })
}

export const deleteUserById = async (req, res) => {
	res.send({ message: "ok delete" })
}
