"use client";

import { Product } from "../context/Interfaces/Product";
import "../css/product.css";

export default function ProductComponent(product: Product) {
  return (
    <div key={product.product_id} className="cell card">
      <div className="card-content">
        <p className="title mb-3">{product.product_name}</p>
        <p className="subtitle has-text-centered">{product.product_price}</p>
      </div>
      {/* <h2>{product.product_name}</h2> */}
      {/* <p>{product.product_description}</p> */}
      {/* <p>{product.product_price}</p> */}
    </div>
  );
}
