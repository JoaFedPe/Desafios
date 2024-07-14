import sessionsRepository from '../repositories/sessions.repository.js'
import User from '../models/user.model.js'

//chequear si está bien o tiene que pasar por repo y el redirect
const registerUser = async (params) => {

    let {first_name, last_name, email, age, password} = params
    
    try{
        //const newUser = await sessionsRepository.registerUser({first_name, last_name, email, age, password})
        const newUser = new User ({first_name, last_name, email, age, password})
        
        if (email === 'adminCoder@coder.com') {
            newUser.rol = 'admin';
        } else {
            newUser.rol = 'user';
        }
         
        await newUser.save()
        redirect('/login')

    } catch (err) {
        return ({ status: "error 500", error: "error al registrar nuevo usuario"})
    }
}

//no logro hacer el redirect, creo que el resto funciona bien
const logUser = async (params, res) => {
    let {email, password} = params

    try{
        const user = await sessionsRepository.userFound({email})
        
        if(!user) {
            return ({ status: "error 404", error: "Usuario no encontrado"})
        }

        session.user = {
            id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            age: user.age,
        } 
        
        return res.redirect('/products')   

    } catch(err){
        return ({ status: "error 500", error: "error al iniciar sesión"})
    }
}

export default {registerUser, logUser}