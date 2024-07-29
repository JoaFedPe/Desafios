import {Router} from "express"
import generateProducts from "../utils.js"

const router = Router()

router.get("/mockingproducts", async (req, res) => {
    let mProducts = []

    for(let i = 0; i < 100; i++){
        mProducts.push(generateProducts())
    }

    res.send({status:"succes", payload: mProducts})
})

export default router