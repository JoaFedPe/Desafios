import cartModel from '../models/carts.model.js'

const getCarts = async () => {
   return await cartModel.find()
}

export default {getCarts}