import React, {useState} from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import {addToDatabaseCart} from '../../utilities/databaseManager';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);

    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    //handleAddProduct function
    const handleAddProduct = product => {
    console.log("handleAddProduct clicked", product);
    const newCart = [...cart, product];
    setCart(newCart);

    const sameProduct = newCart.filter(pd => pd.key === product.key);
    const count = sameProduct.length;
    addToDatabaseCart(product.key, count);
    }

    return (
        <div className="twin-container shop">
           <div className="product-container">
           <ul>
            {
                products.map(product => 
                <Product 
                key={product.key}
                showAddToCart={true}
                product={product}
                handleAddProduct={handleAddProduct}/>)
            }
           </ul>
           </div>
           <div className="cart-container">
             <Cart cart={cart}/>
           </div>
        </div>
    );
};

export default Shop;