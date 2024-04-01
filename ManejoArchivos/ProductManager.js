const { ifError } = require('assert')
const { readFile } = require('fs')

const fs = require('fs').promises

class ProductManager {

    constructor () {
        this.ListadeProductosFile = "ListadeProductos.json"
        this.products = []
        this.nextId = 1
    }

    async addProduct(product){

        try {
            let products = await this.getProducts(product)

            products.push(product)
            await fs.writeFile(this.ListadeProductosFile, JSON.stringify(products, null, 2))
            console.log("Producto agregado correctamente")
            
        } catch (error) {
            console.error("Error al agregar producto", error)
            
        }    
        
        if(!this.isProductValid(product)){
            console.error("Error al crear producto", error)
        }

        product.id= this.nextId++
        this.products.push(product)

    } 

    async isProductValid(product) {
        return(
            product.title &&
            product.description &&
            product.price &&
            product.thumnail &&
            product.code &&
            product.stock !== undefined
        )
    }

    async getProducts(product){
        try {
            const data = await fs.readFile(this.ListadeProductosFile, "utf8")
            return JSON.parse(data)
        } catch (error) {
            if (error.code === 'ENOENT') {
                return []
            } else {
                throw error
            }
            
        }


    }

    async getProductsById(Id) {
        try {
            
            const Id = await fs.readFile(this.ListadeProductosFile, () => {
                return JSON.parse(Id) 
            })
                  
                            
        } catch (error) {  
            console.error("Error al buscar producto por Id", error)          
        
        }
    }
    
    async updateProduct(Id){
        const modificarPrecio = new product.price 

        try {
            await fs.appendFile(this.ListadeProductosFile, modificarPrecio)
            console.log("Precio Actualizado correctamente")
        } catch (error) {
            console.error("Error al actualizar Precio", error)
        }


    }

    async deleteProduct(Id){
        try {
            
        } catch (error) {
            
        }
    }
    
}


module.exports = ProductManager



