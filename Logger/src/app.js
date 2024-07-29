import express from "express"
import mProductsRouter from './routes/MockingProducts.js'
import errorHandler from './middleware/index.js'
import { addDevLogger, addProdLogger } from "./logger.js"

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", mProductsRouter)
app.use(errorHandler)
app.use(addDevLogger, addProdLogger)

app.get("/LoggerTest", (req, res) => {
    req.logger.error("ERROR")
    req.logger.fatal("FATAL")
    res.send({ message: "Test"})
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})