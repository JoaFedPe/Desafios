class ProductManager {
    constructor(){
        this.products = []
        this.nextId = 1
    } 

    addProduct(product){
        if(!this.isProductValid(product)){
            console.log("ERROR: El Producto no es válido")
            return 

        }

        if(this.isCodeDuplicate(product.code)){
            console.log("ERROR: El código del producto ya está en uso")
            return
        }

        product.id= this.nextId++
        this.products.push(product)
    }

    getProducts() {
        return this.products
    }

    getProductsById(id) {
        const product = this.products.find((p)=>p.id === id)
        if(product) {
            return product
        }else {
            console.log("ERROR: Producto no encontrado")
        }
    }

    isProductValid(product) {
        return(
            product.title &&
            product.description &&
            product.price &&
            product.thumnail &&
            product.code &&
            product.stock !== undefined
        )
    }

    isCodeDuplicate(code){
        return this.products.some((p)=>p.code === code)
    }     

}

const productManager = new ProductManager()

productManager.addProduct({
    title: "Producto A",
    description: "Descripcion del producto A",
    price: 10.99,
    thumnail: 'ruta/imagenA.jpg',
    code: 'PIB1',
    stock: 10
})

productManager.addProduct({
    title: "Producto B",
    description: "Descripcion del producto B",
    price: 20.99,
    thumnail: 'ruta/imagenB.jpg',
    code: 'PIB2',
    stock: 5
})

productManager.addProduct({
    title: "Producto C",
    description: "Descripcion del producto C",
    price: 15.99,
    thumnail: 'ruta/imagenC.jpg',
    code: 'PIB3',
    stock: 15
})



const producto = productManager.getProductsById(1)

//const producto = productManager.getProductsById(2)

//const producto = productManager.getProductsById(3)


console.log(producto)


// Function to add a product
function addProduct() {
    // Capture input values
    const title = document.getElementById('titleProduct').value;
    const description = document.getElementById('descriptionProduct').value;
    const code = document.getElementById('codeProduct').value;
    const price = document.getElementById('priceProduct').value;
    const status = document.getElementById('statusProduct').value;
    const stock = document.getElementById('stockProduct').value;
    const category = document.getElementById('categoryProduct').value;

    // Emit an event to the server with the product data
    socket.emit('addProduct', {
        title,
        description,
        code,
        price,
        status,
        stock,
        category
    });
}

// Listen for response from the server (optional)
socket.on('productAdded', () => {
    // Optionally, you can update the client-side display here
    console.log('Product added successfully');
});