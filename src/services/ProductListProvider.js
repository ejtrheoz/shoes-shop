// ProductsContext.js
import { createContext } from 'react';
import { products } from './Products';

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
}
