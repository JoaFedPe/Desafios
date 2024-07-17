import { Router } from 'express'
import {getProducts, getProductsById, modifyProduct, addProduct, deleteProduct} from '../controllers/products.controller.js'


const router = Router()

router.get('/products', getProducts)

router.get('/products/:pid', getProductsById) 

router.post('/products', addProduct) 

router.put('/products/:pid', modifyProduct) 

router.delete('/products/:pid', deleteProduct) 

export default router