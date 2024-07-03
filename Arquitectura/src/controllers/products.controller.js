import  productsServices  from "../services/products.services.js"




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

export {getProducts, getProductsById}