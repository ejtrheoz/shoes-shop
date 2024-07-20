import React, { useState } from 'react';
import './ProductFilter.css';
import Product from "../product/Product";

function CustomButton({ children, type, activeTypes, setActiveTypes }) {
    const isActive = activeTypes.includes(type);

    const toggleActive = () => {
        if (isActive) {
            setActiveTypes(activeTypes.filter(t => t !== type));
        } else {
            setActiveTypes([...activeTypes, type]);
        }
    };

    const activeStyle = {
        backgroundColor: isActive ? 'lightblue' : 'blue'
    };

    return (
        <button className="custom-button" style={activeStyle} onClick={toggleActive}>
            {children}
        </button>
    );
}

function ProductFilter({ products }){

    const [activeFilter, setActiveFilter] = useState('all');
    const [activeTypes, setActiveTypes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredQuery, setFilteredQuery] = useState('');

    const handleFilterChange = (event) => {
        setActiveFilter(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchClick = () => {
        setFilteredQuery(searchQuery);
    };

    const filteredProducts = products.filter(product => 
        (activeFilter === 'all' || product.category === activeFilter) &&
        (activeTypes.length === 0 || activeTypes.includes(product.type)) &&
        product.name.toLowerCase().includes(filteredQuery.toLowerCase())
    );

 return(  
    <>
        <div className="search-bar-container">
            <input 
                className="search-bar-input" 
                value={searchQuery} 
                onChange={handleSearchChange}
            />
            <button className="button" onClick={handleSearchClick}>Hľadaj</button>
        </div>
        
        <div className="filter-container">
        <input 
                    type="radio" 
                    name="filter" 
                    value="all"
                    checked={activeFilter === 'all'}
                    onChange={handleFilterChange}
                />
                <span>Všetko</span>
                
                <input 
                    type="radio" 
                    name="filter" 
                    value="men"
                    checked={activeFilter === 'men'}
                    onChange={handleFilterChange}
                />
                <span>Pánska obuv</span>

                <input 
                    type="radio" 
                    name="filter" 
                    value="women" 
                    checked={activeFilter === 'women'}
                    onChange={handleFilterChange}
                />
                <span>Dámska obuv</span>

                <input 
                    type="radio" 
                    name="filter" 
                    value="kids" 
                    checked={activeFilter === 'kids'}
                    onChange={handleFilterChange}
                />
            <span>Detská obuv</span>
        </div>

        <div className="category-container">
            <CustomButton type="sport" activeTypes={activeTypes} setActiveTypes={setActiveTypes}>Tenisky</CustomButton>
            <CustomButton type="casual" activeTypes={activeTypes} setActiveTypes={setActiveTypes}>Komfortná obuv</CustomButton>
            <CustomButton type="formal" activeTypes={activeTypes} setActiveTypes={setActiveTypes}>Formálna obuv</CustomButton>
            <CustomButton type="home" activeTypes={activeTypes} setActiveTypes={setActiveTypes}>Obuv na doma</CustomButton>
            <CustomButton type="outdoor" activeTypes={activeTypes} setActiveTypes={setActiveTypes}>Outdoorová obuv</CustomButton>
        </div>

        

        <div className="product-list">
                {filteredProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>

    </> 
);


}

export default ProductFilter;
