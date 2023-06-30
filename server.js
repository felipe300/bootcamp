import sequelize from "./src/config/db.config.js"
import app from "./src/app.js"

//importar asociaciones
import "./src/models/associations.js"

const PORT = 3000

const main = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync({ force: true, alter: true })
		let PORT = 3000
		app.listen(PORT, () =>
			console.log(`Server Listening on port => ${PORT}🔥🔥🔥`)
		)
	} catch (err) {
		console.log(`Something went wrong, Error => ${err}`)
	}
}

main()