export interface Category {
    id: number,
    name: string,
    sublevels?: Array<Category>
}

export interface Product {
    quantity: number
    price: number
    available: boolean
    sublevel_id: number
    name: string
    id: string
    img: string
}

export interface FilterProduct {
    available: boolean | string
    minPrice: number
    maxPrice: number
    stockQuantity: number
    textField: string
}

export interface ProductOrder {
    orderField: string
    reverse: boolean
}

export interface CartProduct {
    productId: string
    name: string
    quantity: number
    price: number
}

export interface CardData {
    number: number
    name: string
    expireDate: Date
    secureCode: number
}