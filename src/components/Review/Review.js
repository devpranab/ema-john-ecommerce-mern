import React, {useState, useEffect} from 'react';
import './Review.css';
import {getDatabaseCart, removeFromDatabaseCart} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);

    const removeProduct = productKey => {
        //console.log("remove product clicked", productKey);
        const newCart = cart.filter(product => product.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(product => product.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[]);

    return (
        <div>
          <h2>Cart Items: {cart.length}</h2>
           {
                cart.map(product => 
                <ReviewItem 
                key={product.key}
                product={product}
                removeProduct={removeProduct}/>)  
            }
        </div>
    );
};

export default Review;