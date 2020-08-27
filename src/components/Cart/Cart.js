import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce( (total, product) => total + product.price ,0)
    console.log(cart);
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Orderd Item: {cart.length}</h4>
            <h5>Total Price: {Math.floor(totalPrice)}</h5>
            <button className='btn btn-sm btn-warning'>Order Now</button>
        </div>
    );
};

export default Cart;