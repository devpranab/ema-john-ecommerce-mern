import React, {useState, useEffect} from 'react';
import './Review.css';
import {getDatabaseCart, removeFromDatabaseCart, processOrder,} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImg from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        //console.log("Order Place");
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const removeProduct = productKey => {
        //console.log("remove product clicked", productKey);
        const newCart = cart.filter(product => product.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    let thankYou;
    if(orderPlaced){
        thankYou = <img src={happyImg} alt="thank you"/>
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
        <div className="twin-container">
             <div className="product-container">
             <h2>Cart Items: {cart.length}</h2>
                {
                    cart.map(product => <ReviewItem 
                        key={product.key}
                        product={product}
                        removeProduct={removeProduct}/>)
                    
                }
                {
                    thankYou
                }
             </div>
             <div className="cart-container">
                <Cart cart={cart}>
                <button onClick={handlePlaceOrder} className="main-btn">Place Order</button>
                </Cart>
             </div>
            </div>
    );
};

export default Review;