import userModel from '../models/user.model.js'

/* const registerUser = async ({first_name, last_name, email, age, password}) => {
    return await userModel.create({first_name, last_name, email, age, password})
} */

const userFound = async ({ email }) => {
    return  userModel.findOne({email})
}    

export default {/*registerUser,*/ userFound}