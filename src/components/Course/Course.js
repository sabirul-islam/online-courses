import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Course.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Course = () => {
    const first12 = fakeData.slice(0,12)
    const [products] = useState(first12);
    const [cart, setCart] = useState([]);
    
    const handleAddProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <div className='main-container'>
            <div className="course-container">
                {
                products.map(product => 
                <Product 
                product={product}
                handleAddProduct={handleAddProduct}
                key={product.key}
                >
                </Product>) 
                }
            </div>

            <div>
            <Cart cart={cart}></Cart>
            </div>

            
            
        </div>
    );
};

export default Course;