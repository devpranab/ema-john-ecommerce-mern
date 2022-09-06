import React from 'react';
import './Product.css';

const Product = props => {
  return (
    <div className="product">
     <h4>{props.product.name}</h4>
    </div>
  );
};

export default Product;