import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    
    const {img, category, seller, price} = props.product;
    const handleAddProduct = props.handleAddProduct;
    return (
        <div className='product'>
            <div className='mr-5'>
                <img src={img} alt=""/>
            </div>
            
            <div>
            <h3>Course Name: {category}</h3>
            <h4>instructor: {seller}</h4>
            <h5>Price: ${price}</h5>
            <button onClick={() => handleAddProduct(props.product)} className='btn btn-warning btn-sm'><FontAwesomeIcon icon={faShoppingCart} /> enroll now</button>
            </div>
        </div>
    );
};

export default Product;