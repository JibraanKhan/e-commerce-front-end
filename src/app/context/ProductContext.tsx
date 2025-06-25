"use client"

import { createContext, useContext, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Product } from "./Interfaces/Product";
import { ProductContextType } from "./Interfaces/ProductContextType";

const productContext = createContext<ProductContextType>({
    products: [],
    setProducts: () => {}
});

export const ProductProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
    const [products,setProducts] = useState<Product[]>([]);

    const getProducts = () => {
        console.log("Getting products");
        axios.get("http://localhost:8080/products/")
        .then((response:AxiosResponse<Product[]>) => {
            const data = response.data;
            // console.log("Data:" + JSON.stringify(data));
            setProducts(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getProducts();
    }, []);

    return <productContext.Provider value={{products,setProducts}}>{children}</productContext.Provider>
}

export const useProduct = () => useContext(productContext);