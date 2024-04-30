/* const socket = io()

//import {products} from './routes/products.router.js'

function addProduct() {
    const product = {
    title : document.getElementById('titleProduct').value,
    description : document.getElementById('descriptionProduct').value,
    code : document.getElementById('codeProduct').value,
    price : document.getElementById('priceProduct').value,
    status : document.getElementById('statusProduct').value,
    stock : document.getElementById('stockProduct').value,
    category : document.getElementById('categoryProduct').value,
    }

    //products.push(product)
    socket.emit("newProduct", product)
}

function appendProduct(newProduct) {
    const productList = document.getElementById('productList');
    newProduct = document.createElement('li');
    newProduct.textContent = `${newProduct.title} - ${newProduct.price}`;
    productList.appendChild(newProduct)
}

socket.on("productList", (products) => {
    const productList = document.getElementById('productList')
    productList.innerHTML = ""
    products.forEach((product) => {
        appendProduct(
            product.title,
            product.price
        )
    })
})

socket.on("newProduct", (data) => {
    appendProduct(data.title, data.price)
}) */