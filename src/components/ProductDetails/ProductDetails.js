import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const { productKey } = useParams();
    const product = fakeData.find(product => product.key === productKey);
    //console.log(product);
    document.title = "Product Details";
    return (
        <div>
            <h1>{productKey} Your Product Details</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;