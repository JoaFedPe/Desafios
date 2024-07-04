import  productsServices  from "../dao/mongo/services/products.services.js"

const getProducts = async (req, res) => {
    const {page:_page, limit:_limit, category, title, sort} = req.query
    let page = parseInt(_page)
    let limit = parseInt(_limit)
    

    let result = await productsServices.getProducts ({page,limit,title,sort,category})    
    
    res.render('products', {
        docs:result.docs,
        user: req.session.user,
        isValid: true             
    })

} 

const getProductsById = async (req, res) => {
    const pid  = req.params
    
    let product = await productsServices.getProductsById(pid)
    
    res.json(product)
}

const addProduct = async (req, res) => {
    let {title, description, code, price, status, stock, category} = req.body   

    let productAdded = await productsServices.addProduct({title, description, code, price, status, stock, category})

    res.json(productAdded)
}

const modifyProduct = async (req, res) => {
    const pid  = req.params
    let productToModify = req.body
    let productModifyed = await productsServices.modifyProduct(productToModify.title, productToModify.description, productToModify.code, productToModify.price, productToModify.status, productToModify.stock, productToModify.category)
    res.json(productModifyed)
    console.log("controler", productModifyed)
}

const deleteProduct = async (req, res) => {
    const pid  = req.params
    
    let productDeleted = await productsServices.deleteProduct(pid)
    
    res.json(productDeleted)
}

export {getProducts, getProductsById, addProduct, modifyProduct, deleteProduct}

