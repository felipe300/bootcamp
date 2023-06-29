import User from "../models/user.model.js"

export const findAll = async (_req, res) => {
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
	try {
		let { firstName, lastName, email } = req.body
		const [user, created] = await User.findOrCreate({
			where: { email },
			defaults: {
				firstName,
				lastName,
				email
			},
		})

		if (!created) {
			return res.status(400).send({
				code: 400,
				message: `User '${user.email}' already exists!`
			})
		}

		res.status(201).send({
			code: 201,
			message: `User '${user.firstName} ${user.lastName}' created!`,
		})
	} catch (err) {
		res.status(500).send({
			code: 500,
			message: `💩, Error to create user, ${err.message}`,
		})
	}
}

export const findUserById = async (req, res) => {
	try {
		let { id } = req.params
		let found = await User.findByPk(id)

		if (!found) {
			return res
				.status(404)
				.send({ code: 404, message: "User not found!" })
		}

		res.status(200).send({
			code: 200,
			message: `User '${found.email}' found!`,
			data: found
		})
	} catch (err) {
		res.status(500).send({
			code: 500,
			message: `💩, Error to to find user by id, ${err.message}`,
		})
	}
}

export const updateUserById = async (req, res) => {
	try {
		let { id } = req.params
		let { firstName, lastName, email } = req.body
		let found = await User.findByPk(id)

		if (!found) {
			return res
				.status(404)
				.send({ code: 404, message: "User not found!" })
		}

		let newUser = await found.update(
			{ firstName, lastName, email },
			{
				where: {
					id
				}
			}
		)

		res.status(200).send({
			code: 200,
			message: `User '${newUser.firstName} ${newUser.lastName}' updated!`,
			data: newUser 
		})
	} catch (err) {
		res.status(500).send({
			code: 500,
			message: `💩, Error to update user, ${err.message}`,
		})
	}
}

export const deleteUserById = async (req, res) => {
	try {
		let { id } = req.params
		let found = await User.findByPk(id)
		let fullname = `${found.firstName} ${found.lastName}`

		if (!found) {
			return res
				.status(404)
				.send({ code: 404, message: `User not found!` })
		}
		await found.destroy()

		res.status(200).send({
			code: 200,
			message: `User '${fullname}' deleted!`
		})
	} catch (err) {
		res.status(500).send({
			code: 500,
			message: `💩, Error to delete by id, ${err.message}`,
		})
	}
}
