import cartRepository from '../repositories/cart.repository.js'

const getCarts = async () => {
    try {
        let carts = await cartRepository.getCarts()
        return ({result: "success", payload: carts})
                
    } catch (error) {
        console.log(error)
    }
}

export default {getCarts}