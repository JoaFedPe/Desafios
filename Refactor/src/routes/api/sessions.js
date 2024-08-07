import { Router } from "express"
import User from '../../dao/mongo/models/user.model.js'
//import firstCollection from "../../dao/mongo/models/user.model.js"
import passport from 'passport'


const router = Router()

router.post('/register', async (req, res) => {
    const {first_name, last_name, email, age, password} = req.body
    
    try{
        const newUser = new User ({first_name, last_name, email, age, password})

        if (email === 'adminCoder@coder.com') {
            newUser.rol = 'admin';
        } else {
            newUser.rol = 'user';
        }       

        await newUser.save()
        res.redirect('/login')

    } catch (err) {
        res.status(500).send('Error al registrar usuario')
    }
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body
    console.log(email, password)
    try{
        const user = await User.findOne ({email})
        console.log(user)
        if(!user) return res.status(404).send('Usuario no encontrado')
        req.session.user = {
            id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            age: user.age,
        }
        console.log(req.session.user)
        res.redirect('/products')   

    } catch(err){
        res.status(500).send('Error al iniciar sesión')
    }
})

router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(500).send('Error al cerrar sesión')
        res.redirect('/login')    
    })
})

router.get("/github", passport.authenticate("github",{scope:["user:email"]}),async(req,res)=>{})


router.get("/githubcallback",passport.authenticate("github",{failureRedirect:"/login"}),async(req,res)=>{
    req.session.user=req.user
    res.redirect("/products")
})

export default router