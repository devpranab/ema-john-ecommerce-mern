import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = props => {
  const { img, name, seller, price, stock, key } = props.product;
  return (
    <div className="product"> 
      <div className="product-img">
        <img src={img} alt=""/>
      </div>
      <div>
        <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
        <p><small>by: {seller}</small></p>
        <p>$ {price}</p>
        <br/>
        <p><small>only {stock} left in stock - order soon</small></p>
        
        {
          props.showAddToCart && <button onClick={() => props.handleAddProduct(props.product)} className="main-btn"><FontAwesomeIcon icon={faShoppingCart}/> Add to cart</button>
        }
      </div>
    </div>
  );
};

export default Product;