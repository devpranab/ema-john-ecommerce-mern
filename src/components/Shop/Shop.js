import React, {useState, useEffect} from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);

    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    //Access from local storage
    useEffect(() => {
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(exisKey => {
            const product = fakeData.find(pd => pd.key === exisKey);
            //console.log(exisKey, savedCart[exisKey]);
            product.quantity = savedCart[exisKey];
            return product;
        });
        //console.log(savedCart);
        //console.log(previousCart);
        setCart(previousCart);
    },[]);

    //handleAddProduct function
    const handleAddProduct = product => {
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
    let count= 1;
    let newCart;
    if(sameProduct){
        count = sameProduct.quantity + 1;
        sameProduct.quantity = count;
        const others = cart.filter(pd => pd.key !== toBeAddedKey);
        newCart = [...others, sameProduct];
    }
    else{
        product.quantity = 1;
        newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count);
    //or
    // const newCart = [...cart, product];
    // setCart(newCart);

    // const sameProduct = newCart.filter(pd => pd.key === product.key);
    // const count = sameProduct.length;
    // addToDatabaseCart(product.key, count);
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