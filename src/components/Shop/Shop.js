import React, {useState} from 'react';
import './Shop.css';
import fakeData from '../../fakeData';

const Shop = () => {
    //console.log(fakeData);
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);

    return (
        <div>
            Shop
            <h3>products: {products.length}</h3>
            <ul>
                {
                    products.map(product => <li>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;