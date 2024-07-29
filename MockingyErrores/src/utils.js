import { faker } from '@faker-js/faker'

export const generateProduct = () => {
    return {
        title: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        code: faker.number.int({ min: 100000 }),
        price: faker.commerce.price({ min: 1000, max: 20000, dec: 0 }),
        status: "true",
        stock: faker.number.int({ min: 10, max: 100 }),
        category: faker.commerce.productAdjective()
    }
}

export const generateProducts = () => {
    let products = []

    for (let i = 0; i < 100; i++) {
        products.push(generateProduct())
    }

    console.log(products)

    return products
}


export default generateProducts