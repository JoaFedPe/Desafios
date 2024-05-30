import express from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'
import MongoStore from 'connect-mongo'
import __dirname from './utils.js'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'
import productsRouter from './routes/products.routes.js'
import cartsRouter from './routes/carts.routes.js'
import sessionsRouter from './routes/api/sessions.js'
import viewsRouter from './routes/views.js'


const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(session({
    secret:'secretkey',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://joafedpe:Emperor1527@cluster0.izy0ekx.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0'}),
    //cookie: { maxAge: 180*60*1000},
}))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

mongoose.connect("mongodb+srv://joafedpe:Emperor1527@cluster0.izy0ekx.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0").then(()=> 
    {console.log("Conectado a la base de datos")}).catch(error => console.error("Error en la conexion", error))

app.use('/', productsRouter)
app.use('/', cartsRouter)
app.use('/', viewsRouter)
//app.use('/sessions', sessionsRouter) 
app.use('/api/sessions', sessionsRouter)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})