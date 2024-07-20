import ProductList from "./product-list/ProductList";
import './ItemContainer.css'
import { products } from '../services/Products';

function ItemContainer() {
    return(
    <>
    <div class="item-container">
        <ProductList products={products} />
    </div>
    </>
    
    );

}

export default ItemContainer;