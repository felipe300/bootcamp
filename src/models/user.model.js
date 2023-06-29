import { DataTypes } from "sequelize"
import sequelize from "../config/db.config.js"

const User = sequelize.define(
	"users",
	{
		firstName: {
			type: DataTypes.STRING(50),
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		lastName: {
			type: DataTypes.STRING(50),
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
				notEmpty: true
			}
		}
	},
	{
		timestamps: true,
		tableName: "users"
	}
)

export default User