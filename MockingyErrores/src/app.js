import express from "express"
import mProductsRouter from './routes/MockingProducts.js'
import errorHandler from './middleware/index.js'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", mProductsRouter)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})