const { error } = require('console')
const ProductManager = require ('./ProductManager.js')

const productManager = new ProductManager()

//Agregar Producto nuevo

/*productManager.addProduct({
    title: "Producto A",
    description: "Descripcion del producto A",
    price: 10.99,
    thumnail: 'ruta/imagenA.jpg',
    code: 'PIB1',
    stock: 10
})*/

//Luego de agregar el producto A, se puede agregar el B y C (que luego será eliminado) cambiando al info del producto por esta:

/*productManager.addProduct({
    title: "Producto B",
    description: "Descripcion del producto B",
    price: 19.99,
    thumnail: 'ruta/imagenB.jpg',
    code: 'PIB2',
    stock: 5
})*/

/*productManager.addProduct({
    title: "Producto C",
    description: "Descripcion del producto C",
    price: 4.99,
    thumnail: 'ruta/imagenC.jpg',
    code: 'PIB3',
    stock: 50
})*/

//Lo que si, veo que no puedo agregar 2 productos a la vez, si me podés contestar Ruben el por qué no se puede, genial, si no, planeo preguntarle al profe en la prox clase

//Consultar Productos

/*productManager.getProducts() 
    .then(products => console.log('Productos', products))
    .catch(error => console.error("Error al consultar Productos", error))

{}*/


//Consultar Productos por Id

/*const consultarProducto = async () => {
    const productById = await productManager.getProductsById(2)
    console.log(productById)
}
consultarProducto()*/

// Modificar Productos

/*const updateProducto = async () => {
    const modificar = await productManager.updateProduct(2, 14.99)
    console.log(modificar)
}
updateProducto()*/

// Eliminar producto

const eliminarProducto = async () => {
    const eliminar = await productManager.deleteProduct(3)
    console.log(eliminar)
}
eliminarProducto()



