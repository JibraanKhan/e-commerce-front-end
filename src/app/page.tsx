"use client"

import ProductListComponent from "./components/ProductList";
import { Product } from "./context/Interfaces/Product";
import { useProduct } from "./context/ProductContext";

export default function Home() {

  return (<div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>

      <ProductListComponent/>
  </div>)
}