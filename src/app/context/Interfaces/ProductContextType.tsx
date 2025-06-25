import { Product } from "./Product";

export interface ProductContextType {
    products: Product[];
    setProducts: (products: Product[]) => void;
}