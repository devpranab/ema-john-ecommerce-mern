import React, {useState} from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);

    //handleAddProduct function
    const handleAddProduct = product => {
    console.log("handleAddProduct clicked", product);
    }

    return (
        <div className="shop-container">
           <div className="product-container">
           <ul>
            {
                products.map(product => 
                <Product 
                key={product.key}
                product={product}
                handleAddProduct={handleAddProduct}/>)
            }
           </ul>
           </div>
           <div className="cart-container">
             Cart
           </div>
        </div>
    );
};

export default Shop;