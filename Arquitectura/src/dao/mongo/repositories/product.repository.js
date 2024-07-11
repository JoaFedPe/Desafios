import productModel from '../models/products.model.js'


const getProducts = async ({filters, page, limit, sort}) => 
    productModel.paginate(filters, {page, limit, sort, lean: true}, )      

const getProductsById = async ({pid}) => {
    
    return await productModel.findOne({_id:pid})
}   

const addProduct = async ({title, description, code, price, status, stock, category}) => {
        
    return await productModel.create({title, description, code, price, status, stock, category})
}

const productFound = async ({ code }) => {
     return  productModel.findOne({code})
}
//No funciona
/* const modifyProduct = async () => {
    return productModel.updateOne({_id:pid}, productToModify)
    console.log("repo", productToModify)
} */

const deleteProduct = async ({pid}) => {
    
    return await productModel.deleteOne({_id:pid})
}     


export default {getProducts, getProductsById, addProduct, productFound, deleteProduct}