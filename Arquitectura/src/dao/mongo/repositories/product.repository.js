import productModel from '../models/products.model.js'

const getProducts = async ({filters, page, limit, sort}) => 
    productModel.paginate(filters, {page, limit, sort, lean: true}, )      

const getProductsById = async ({_id:pid}) =>
    productModel.findOne({_id:pid})

export default {getProducts, getProductsById}