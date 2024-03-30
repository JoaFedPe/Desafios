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

//Luego de agregar el producto A, se puede agregar el B cambiando al info del producto por esta:

/*productManager.addProduct({
    title: "Producto B",
    description: "Descripcion del producto B",
    price: 19.99,
    thumnail: 'ruta/imagenB.jpg',
    code: 'PIB2',
    stock: 5
})*/

//Lo que si, veo que no puedo agregar 2 productos a la vez, si me podés contestar Ruben el por qué no se puede, genial, si no, planeo preguntarle al profe en la prox clase

//Consultar Productos

/*productManager.getProducts() 
    .then(products => console.log('Productos', products))
    .catch(error => console.error("Error al consultar Productos", error))

{}*/


//Consultar Productos por Id
const producto = productManager.getProductsById(2)
console.log(producto)




