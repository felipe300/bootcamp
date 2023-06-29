import express from "express"
import userRoutes from "./routes/user.routes.js"
// import cuentasRoutes from "./routes/cuentas.routes.js"

const app = express()

app.use(express.json())

//definir rutas
app.use("/api/v1/users", userRoutes)
// app.use("/api/v1/cuentas", cuentasRoutes)

export default app