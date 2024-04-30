import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import viewsRouter from './routes/views.router.js'
import cartsRouter from './routes/carts.router.js'
import productsRouter from './routes/products.router.js'
import { Server } from 'socket.io'

const app = express()
const PORT = 8080 
const httpServer = app.listen(PORT,console.log(`Server running on port ${PORT}`))

const socketServer = new Server(httpServer)

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine','handlebars')

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use("/", cartsRouter)
app.use("/", productsRouter)
app.use("/", viewsRouter)

//import {products} from './routes/products.router.js'

socketServer.on('connection', socket => {
    console.log("Nuevo cliente conectado")

        socket.on("newProduct", (product) => {
           socketServer.emit("newProduct", {
            title: product.title,
            price: product.price 
        })
    })
  
})

