"use client"

import { Product } from "../context/Interfaces/Product";
import { useProduct } from "../context/ProductContext";
import ProductComponent from "./Product";

export default function ProductListComponent () {

    const { products, setProducts } = useProduct()!;

    return (
        <div>
            {products.map((product:Product) => <ProductComponent key={product.product_id} {...product} />)}
        </div>
    )
}