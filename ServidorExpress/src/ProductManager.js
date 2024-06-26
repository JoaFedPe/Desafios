const fs = require('fs').promises


class ProductManager {

    constructor () {
        this.ListadeProductosFile = "Listadeproductos.json"
        this.products = []
        
    }

    async addProduct(product){

        try {
            let products = await this.getProducts(product)

            product.id = String((parseInt(products[products?.length - 1]?.id) || 0) + 1);       
            products.push(product)

            if(!this.isProductValid(product)){
                console.error("Error al crear producto")
            }

            await fs.writeFile(this.ListadeProductosFile, JSON.stringify(products, null, 2))
            console.log("Producto agregado correctamente")
            
        } catch (error) {
            console.error("Error al agregar producto", error)
            
        }    
        
                

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

    async getProducts(limit){
        try {
            if(!limit) {
            const data = await fs.readFile(this.ListadeProductosFile, "utf8")
            return JSON.parse(data)
            } else {
                const lista = await fs.readFile(this.ListadeProductosFile, "utf8")
                const listaresumen = JSON.parse(lista)
                return listaresumen.slice(0, limit)
            }
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
            
            const findId = await fs.readFile(this.ListadeProductosFile)
            const productojson = JSON.parse(findId)
            
            return productojson.find( (product) =>

                product.id === Id
                
            )      
                            
        } catch (error) {  
            console.error("Error al buscar producto por Id", error)          
        
        }
    }
    
    async updateProduct(Id, price) {

        try {
    
          const productString = await fs.readFile(this.ListadeProductosFile);    
          const productJson = JSON.parse(productString);    

          const product = productJson.find((product) => product.id === Id);              
          product.price = price;
    
          await fs.writeFile(this.ListadeProductosFile, JSON.stringify(productJson, null, 2))             
          console.log("Precio Actualizado correctamente");    
        } catch (error) {    
          console.error("Error al actualizar Precio", error);
    
        }
    
      }

    async deleteProduct(Id){
        try {
          const productString = await fs.readFile(this.ListadeProductosFile);    
          const productJson = JSON.parse(productString);    

          const product = productJson.filter((product) => product.id !== Id);              
              
          await fs.writeFile(this.ListadeProductosFile, JSON.stringify(product, null, 2))    
               
          console.log("Producto eliminado correctamente")
            
        } catch (error) {
            console.error("Error al eliminar el Producto", error)
        }
    }
    
}

module.exports = ProductManager




