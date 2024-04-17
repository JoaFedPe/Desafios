const fs = require('fs').promises
const express = require('express')
const app = express()
const PORT = 8080 
const ProductManager = require ('./ProductManager.js')
const { pid } = require('process')
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

const productManager = new ProductManager()



app.get('/products', async (req, res) => {
    
    try{
        let { limit } = req.query 
            
        const lista = await productManager.getProducts(limit) 
        res.json(lista)    
        
    } catch(error) {
        console.error("Error al mostrar productos", error)
    }
    
})


app.get('/products/:pid', async (req, res) => { 
        
    try {
    let Id = parseInt(req.params.pid)    
    
    const producto = await productManager.getProductsById(Id)
    
    res.send(producto)
    
   } catch (error) {
    console.error("Error al buscar producto", error)
   }
  
})

app.listen(PORT, ()=>{
    console.log(`Server Running on port ${PORT}`)
})
