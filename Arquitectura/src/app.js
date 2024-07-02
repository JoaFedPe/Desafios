import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import __dirname from './utils.js'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'
import productsRouter from './routes/products.routes.js'
import cartsRouter from './routes/carts.routes.js'
import sessionsRouter from './routes/api/sessions.js'
import viewsRouter from './routes/views.js'
import passport from 'passport'
import initializePassport from './config/passport.config.js'
import config from './config/config.js'

console.log(config.MONGO_URL)
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(session({
    secret:'secretkey',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: config.MONGO_URL}),
    
}))

initializePassport()
app.use(passport.initialize())
app.use(passport.session())

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

mongoose.connect(config.MONGO_URL).then(()=> 
{console.log("Conectado a la base de datos")}).catch(error => console.error("Error en la conexion", error))

app.use('/', productsRouter)
app.use('/', cartsRouter)
app.use('/', viewsRouter)
 
app.use('/api/sessions', sessionsRouter)


app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
})