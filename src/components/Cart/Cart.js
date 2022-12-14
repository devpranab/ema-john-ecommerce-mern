import React from 'react';
import './Cart.css';

const Cart = props => {
    const cart = props.cart;

    //total price
    //const total = cart.reduce((total, product) => total+product.price,  0);//0 initial value of total
    //or
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price * product.quantity;
        //debugger;
    }

    //shipping cost
    let shipping = 0;
    if(total > 35){
        shipping = 0
    }
    else if(total > 15){
        shipping = 4.99
    }
    else if(total > 0){
        shipping = 12.99
    }

    //tax 10%
    const tax = total / 10;

    // grandTotal
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h3>Order Summery</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p> <small>Shipping Cost: {shipping}</small></p>
            <p> <small>Tax: {formatNumber(tax)}</small></p>
            <hr />
            <h4>Total Price: $ {grandTotal}</h4>
            {/* <Link to="/review">
            <button className="main-btn">Review Order</button>
            </Link>  */}
            {
                props.children
            }
        </div>
    );
};

export default Cart;