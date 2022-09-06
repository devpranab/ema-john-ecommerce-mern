import React, {useState, useEffect} from 'react';
import './Review.css';
import {getDatabaseCart} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);

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
                product={product}/>)  
            }
        </div>
    );
};

export default Review;