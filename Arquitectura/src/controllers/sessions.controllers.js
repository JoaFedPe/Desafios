import sessionsServices from "../dao/mongo/services/sessions.services.js"

const registerUser = async (req, res) => {
    let {first_name, last_name, email, age, password} = req.body

    let registeredUser = await sessionsServices.registerUser({first_name, last_name, email, age, password})

    res.json(registeredUser)
}

const logUser = async (req, res) => {
    let {email, password} = req.body

    const loguedUser = await sessionsServices.logUser({email, password})

    res.json(loguedUser)
}

export {registerUser, logUser}