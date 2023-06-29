import Bootcamp from "../models/bootcamp.model.js"

export const createBootcamp = async (req, res) => {
	try {
		let { title, cue, description } = req.body
		const [bootcamp, created] = await Bootcamp.findOrCreate({
			where: { title },
			defaults: {
				title,
				cue,
				description
			},
		})

		if (!created) {
			return res.status(400).send({
				code: 400,
				message: `Bootcamp '${bootcamp.title}' already exists!`
			})
		}

		res.status(201).send({
			code: 201,
			message: `Bootcamp '${bootcamp.title}' created!`,
		})
	} catch (err) {
		res.status(500).send({
			code: 500,
			message: `💩, Error to create bootcamp, ${err.message}`,
		})
	}
}

export const addUser = async (req, res) => {
	res.send({ message: 'ok add' })
}

export const findById = async (req, res) => {
	try {
		let { id } = req.params
		let found = await Bootcamp.findByPk(id)

		if (!found) {
			return res
				.status(404)
				.send({ code: 404, message: "Bootcamp not found!" })
		}

		res.status(200).send({
			code: 200,
			message: `Bootcamp '${found.title}' found!`,
			data: found
		})
	} catch (err) {
		res.status(500).send({
			code: 500,
			message: `💩, Error to to find user by id, ${err.message}`,
		})
	}
}

export const findAll = async (_req, res) => {
	try {
		const bootcamps = await Bootcamp.findAll()
		res.send({ code: 200, data: bootcamps })
	} catch (err) {
		res.status(500).send({
			code: 500,
			message: `💩, Error to get bootcamps, ${err.message}`,
		})
	}
}
