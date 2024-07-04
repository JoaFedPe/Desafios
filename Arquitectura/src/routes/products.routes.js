import { Router } from 'express'
import {getProducts, getProductsById, addProduct, modifyProduct, deleteProduct} from '../controllers/products.controller.js'


const router = Router()

router.get('/products', getProducts)

router.get('/products/:pid', getProductsById) 

router.post('/products', addProduct) 

router.put('/products/:pid', modifyProduct) /* async (req, res) => {
    let { pid } = req.params
    let productToReplace = req.body
    if (!productToReplace.title || !productToReplace.description || !productToReplace.code || !productToReplace.price || !productToReplace.status || !productToReplace.stock || !productToReplace.category) {
        res.send ({ status: "error", error: "Faltan caracteristicas del producto que quieres modificar"})        
    }
    let replacedProduct = await productModel.updateOne({_id:pid}, productToReplace)
    res.send ({result: "success", payload: replacedProduct})

} */

router.delete('/products/:pid', deleteProduct) 

export default router