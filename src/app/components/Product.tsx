"use client"

import { Product } from "../context/Interfaces/Product";

export default function ProductComponent(product:Product) {
    return (
        <div key={product.product_id}>
            <h2>{product.product_name}</h2>
            <p>{product.product_description}</p>
            <p>{product.product_price}</p>
        </div>
    )
}