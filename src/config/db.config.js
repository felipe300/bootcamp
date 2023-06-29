import Sequelize from 'sequelize'

const sequelize = new Sequelize(
	"bootcamp",
	"postgres",
	"postgres",
	{
		host: "localhost",
		dialect: "postgres",
	}
)

export default sequelize