import React from 'react';
import './ReviewItem.css';

const ReviewItem = props => {
    //console.log(props);
    const { name, quantity, price } = props.product;
    return (
        <div className="review-item">
            <h4 className="item-header">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <button className="main-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;