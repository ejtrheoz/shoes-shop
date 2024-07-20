import ProductFilter from "./product-filter/ProductFilter";
import './ProductList.css';
import { useContext } from 'react';
import { ProductsContext } from '../../services/ProductsContext';

function ProductList({ products }){

    return (
      <>
      <ProductFilter products={products} />
  </>
    );
}

export default ProductList;