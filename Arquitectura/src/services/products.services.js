import productModel from '../dao/mongo/models/products.model.js'
import productRepository from '../dao/mongo/repositories/product.repository.js'

const getProducts = async (params) => {
    const {page=1, limit=10,category,sort, title} = params
    let filters = {}
    let sortFilter = {}    
    
    
    if(category) filters.category= category
    if(title) filters.title= title
    if(sort) sortFilter.price = sort
    let result = await productRepository.getProducts ({filters,limit,page,sort:sortFilter})
    result.prevLink = result.hasPrevPage ? `http://localhost:8080/products?page=${result.prevPage}&limit=${limit}` : ''
    result.nextLink = result.hasNextPage ? `http://localhost:8080/products?page=${result.nextPage}&limit=${limit}` : ''
    result.isValid = !(page <= 0 || page > result.totalPages)
    
    return result
}

const getProductsById = async (params) => {
    const pid = params
    let result = await productRepository.getProductsById(pid)
    
    return result
    
    
    
    /* let { pid } = params
    try {
        let product = await productRepository.getProductsById(pid)
        console.log(product)
        res.send({result: "success", payload: product})
        
        
    } catch (error) {
        res.send({ status: "error", error: "No existe producto con la ID ingresada"})
    } */
   
}

export default {getProducts, getProductsById}
