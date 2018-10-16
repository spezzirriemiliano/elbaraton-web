export interface Category {
    id: number,
    name: string,
    sublevels?: Array<Category>
}

export interface Product {
    quantity: number
    price: string
    available: boolean
    sublevel_id: number
    name: string
    id: string
}
