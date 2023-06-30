import sequelize from "./src/config/db.config.js"
import app from "./src/app.js"
import 'dotenv/config'

//importar asociaciones
import "./src/models/associations.js"

const PORT = process.env.PORT || 3000

const main = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync({ force: false, alter: true })
		let PORT = 3000
		app.listen(PORT, () =>
			console.log(`Server Listening on port => ${PORT}🔥🔥🔥`)
		)
	} catch (err) {
		console.log(`Something went wrong, Error => ${err}`)
	}
}

main()