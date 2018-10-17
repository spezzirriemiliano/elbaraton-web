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
}

export interface FilterProduct {
    available: boolean
    minPrice: number
    maxPrice: number
    stockQuantity: number
}

export interface ProductOrder {
    orderField: string
    reverse: boolean
}