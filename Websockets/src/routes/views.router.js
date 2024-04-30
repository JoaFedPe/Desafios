import express from 'express'
import { promises as fs } from "fs"


const router = express.Router()

router.get("/realtimeproducts", async (req, res) => {
    let data = await fs.readFile("productos.json", "utf8")
    const products = JSON.parse(data)
    res.render('realTimeProducts', {products})
})

export default router

