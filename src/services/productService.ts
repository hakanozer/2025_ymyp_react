import { IProduct, IProductDetail, Product } from "../models/IProduct"
import api from "./api"

export const allProduct = (page: string, per_page: string) => {
    const sendObj = {
        page: page,
        per_page: per_page
    }
    return api.get<IProduct>('products', { params: sendObj })
}

export const singleProduct = (pid: string) => {
    return api.get<IProductDetail>('products/' + pid)
}

export const productSearch = (query: string) => {
    return api.get<Product[]>('products/search', { params: { query: query } })
}