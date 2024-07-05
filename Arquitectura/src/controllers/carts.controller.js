import cartsServices from "../dao/mongo/services/carts.services.js"

const getCarts = async (req, res) => {

    let carts = await cartsServices.getCarts()
    
    res.json(carts)
}

export {getCarts}