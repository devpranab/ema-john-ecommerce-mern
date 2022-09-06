import React, {useState, useEffect} from 'react';
import './Review.css';
import {getDatabaseCart} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';

const Review = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        //cart
        const savedCart = getDatabaseCart();
         //console.log(savedCart);
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(product => product.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        //console.log(cartProducts);
        setCart(cartProducts);
    },[]);

    return (
        <div>
            Review
           <h2>Cart Items: {cart.length}</h2>
        </div>
    );
};

export default Review;