import React, { useState } from 'react';
import '../product-list/product/Product'

function SearchBar({ products }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="search-bar-container">
            <input 
                className="search-bar-input" 
                value={searchQuery} 
                onChange={handleSearchChange}
            />
            <button className="button">Hľadaj</button>

            <div className="product-list">
                {filteredProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default SearchBar;
