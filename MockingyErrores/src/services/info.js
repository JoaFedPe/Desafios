export const registerUserErrorInfo = (user) => {
    return `Una o más propiedades está incompleta o no es válida
    Lista de propiedades:
    * first_name: Necesita ser un string, se recibió ${user.first_name}
    * last_name: Necesita ser un string, se recibió ${user.last_name}
    * email: Necesita ser un string, se recibió ${user.email}
    * age: Necesita ser un number, se recibió ${user.age}
    * password: Necesita ser un string, se recibió ${user.password}`
}

export const userErrorInfo = () => {
    return `Usuario no encontrado`
}

export const logInErrorInfo = () => {
    return ` el email o  la contraseña no coinciden`
}

export const getProductErrorInfo = (product) => {
    return `No existe producto con la ID ingresada se recibió ${product._id}`
}

export const addProductErrorInfo = (product) => {
    return `Una o más propiedades está incompleta o no es válida
    Lista de propiedades:
    * title: Necesita ser un string, se recibió ${product.title}
    * description: Necesita ser un string, se recibió ${product.description}
    * code: Necesita ser un string, se recibió ${product.code}
    * price: Necesita ser un number, se recibió ${product.price}
    * status: Necesita ser "true", se recibió ${product.status}
    * stock: Necesita ser un number, se recibió ${product.stock}
    * category: Necesita ser un string, se recibió ${product.category}`
}

export const modifyProductErrorInfo = (product) => {
    return `Una o más propiedades está incompleta o no es válida
    Lista de propiedades:
    * title: Necesita ser un string, se recibió ${product.title}
    * description: Necesita ser un string, se recibió ${product.description}
    * code: Necesita ser un string, se recibió ${product.code}
    * price: Necesita ser un number, se recibió ${product.price}
    * status: Necesita ser "true", se recibió ${product.status}
    * stock: Necesita ser un number, se recibió ${product.stock}
    * category: Necesita ser un string, se recibió ${product.category}`
}

export const getCartErrorInfo = (cart) => {
    return `No existe carrito con la ID ingresada se recibió ${cart._id}`
}


