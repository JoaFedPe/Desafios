import { Router } from 'express'
import cartModel from '../dao/mongo/models/carts.model.js'
import productModel from '../dao/mongo/models/products.model.js'
import {getCarts, getCartById, addCart, modifyCart, deleteCart, deleteProductsInCart, deleteONEproduct} from '../controllers/carts.controller.js'

const router = Router()

router.get('/carts', getCarts)

router.get('/carts/:cid', getCartById)

router.post('/carts', addCart)

router.put('/carts/:cid/product/:pid',modifyCart) 

router.delete('/deletecart/:cid', deleteCart)

router.delete('/carts/:cid', deleteProductsInCart) 

router.delete('/carts/:cid/product/:pid', deleteONEproduct)/* async (req, res) => {
    let { cid,  pid } = req.params
    const productToDel = await productModel.findOne({_id:pid})

    if (!productToDel) {
        res.send({ status: "error", error: "Producto no encontrado" })
    }

    const updatedCart = await cartModel.findOneAndUpdate(
        { _id: cid },
        { $pull: { productsInCart: { product: productToDel._id }}},
        { new: true }
    )

    res.send({result: "success", payload: updatedCart})  

}) */

export default router